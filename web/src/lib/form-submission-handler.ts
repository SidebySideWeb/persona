import {sendAdminNotificationEmail, type FormSubmissionEmailFields, type FormSubmissionType} from './admin-notification-email'
import {createSanityWriteClient} from './sanity-write-client'

export interface CreatedFormSubmission {
  readonly _id: string
}

export interface ReservationFields {
  readonly name: string
  readonly phone: string
  readonly date: string
  readonly guests?: string | null
  readonly notes?: string | null
}

export async function createFormSubmissionDocument(
  formType: FormSubmissionType,
  fields: FormSubmissionEmailFields,
): Promise<CreatedFormSubmission> {
  const client = createSanityWriteClient()

  const created = await client.create({
    _type: 'formSubmission',
    formType,
    name: fields.name,
    email: fields.email,
    phone: (fields as FormSubmissionEmailFields & {phone?: string}).phone,
    company: fields.company ?? undefined,
    projectType: fields.projectType ?? undefined,
    hasExistingWebsite: fields.hasExistingWebsite ?? undefined,
    existingWebsiteUrl: fields.existingWebsiteUrl ?? undefined,
    message: fields.message ?? undefined,
    timeline: fields.timeline ?? undefined,
    read: false,
    submittedAt: new Date().toISOString(),
  })

  try {
    await sendAdminNotificationEmail(formType, fields, created._id)
  } catch (error) {
    console.error('[form-submission] Admin notification email failed after Sanity create:', error)
  }

  return {_id: created._id}
}

export async function createReservationSubmission(
  fields: ReservationFields,
): Promise<CreatedFormSubmission> {
  const client = createSanityWriteClient()

  const message = [
    `Date: ${fields.date}`,
    fields.guests ? `Guests: ${fields.guests}` : null,
    fields.notes ? `Notes: ${fields.notes}` : null,
  ]
    .filter(Boolean)
    .join('\n')

  const created = await client.create({
    _type: 'formSubmission',
    formType: 'reservation',
    name: fields.name,
    phone: fields.phone,
    date: fields.date,
    guests: fields.guests ?? undefined,
    message: message || undefined,
    notes: fields.notes ?? undefined,
    read: false,
    submittedAt: new Date().toISOString(),
  })

  try {
    await sendAdminNotificationEmail(
      'reservation',
      {
        name: fields.name,
        email: fields.phone,
        message,
      },
      created._id,
    )
  } catch (error) {
    console.error('[form-submission] Admin notification email failed after Sanity create:', error)
  }

  return {_id: created._id}
}

function readString(value: unknown): string | null {
  if (typeof value !== 'string') return null
  const trimmed = value.trim()
  return trimmed.length > 0 ? trimmed : null
}

export function parseReservationBody(body: unknown): ReservationFields | null {
  if (!body || typeof body !== 'object') return null
  const data = body as Record<string, unknown>

  const name = readString(data.name)
  const phone = readString(data.phone)
  const date = readString(data.date)

  if (!name || !phone || !date) return null

  return {
    name,
    phone,
    date,
    guests: readString(data.guests),
    notes: readString(data.notes),
  }
}

export function parseQuoteRequestBody(body: unknown): FormSubmissionEmailFields | null {
  if (!body || typeof body !== 'object') return null
  const data = body as Record<string, unknown>

  const name = readString(data.name)
  const email = readString(data.email)
  const projectType = readString(data.projectType)
  const message = readString(data.message)
  const timeline = readString(data.timeline)

  if (!name || !email || !projectType || !message || !timeline) return null

  const hasExistingWebsite =
    typeof data.hasExistingWebsite === 'boolean'
      ? data.hasExistingWebsite
      : data.hasExistingWebsite === 'true' || data.hasExistingWebsite === 'on'

  return {
    name,
    email,
    company: readString(data.company),
    projectType,
    hasExistingWebsite,
    existingWebsiteUrl: readString(data.existingWebsiteUrl),
    message,
    timeline,
  }
}

export function parseContactBody(body: unknown): FormSubmissionEmailFields | null {
  if (!body || typeof body !== 'object') return null
  const data = body as Record<string, unknown>

  const name = readString(data.name)
  const email = readString(data.email)
  const message = readString(data.message)

  if (!name || !email || !message) return null

  return {name, email, message}
}
