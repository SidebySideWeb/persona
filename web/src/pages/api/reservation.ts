import type {APIRoute} from 'astro'
import {createReservationSubmission, parseReservationBody} from '../../lib/form-submission-handler'

export const prerender = false

async function readJsonBody(request: Request): Promise<unknown> {
  const contentType = request.headers.get('content-type') ?? ''
  if (contentType.includes('application/json')) {
    return request.json()
  }
  if (contentType.includes('application/x-www-form-urlencoded') || contentType.includes('multipart/form-data')) {
    const formData = await request.formData()
    return Object.fromEntries(formData.entries())
  }
  return request.json().catch(() => null)
}

function jsonResponse(body: Record<string, unknown>, status: number): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: {'Content-Type': 'application/json'},
  })
}

export const POST: APIRoute = async ({request}) => {
  try {
    const body = await readJsonBody(request)
    const fields = parseReservationBody(body)

    if (!fields) {
      return jsonResponse(
        {success: false, error: 'Συμπλήρωσε όνομα, τηλέφωνο και ημερομηνία.'},
        400,
      )
    }

    const created = await createReservationSubmission(fields)
    return jsonResponse({success: true, id: created._id}, 201)
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error)
    console.error('[api/reservation] Submit failed:', message)

    const isDev = import.meta.env.DEV
    const isConfigError = message.includes('SANITY_WRITE_TOKEN')
    const clientError =
      isDev && isConfigError
        ? `Server misconfiguration: ${message}`
        : 'Unable to save your reservation. Please try again later or call us.'

    return jsonResponse({success: false, error: clientError}, isConfigError ? 503 : 500)
  }
}
