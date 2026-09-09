import {defineType, defineField} from 'sanity'
import {EnvelopeIcon} from '@sanity/icons'

export const formSubmission = defineType({
  name: 'formSubmission',
  title: 'Form Submission',
  type: 'document',
  icon: EnvelopeIcon,
  fields: [
    defineField({
      name: 'formType',
      title: 'Form type',
      type: 'string',
      options: {
        list: [
          {title: 'Reservation', value: 'reservation'},
          {title: 'Contact', value: 'contact'},
        ],
      },
      readOnly: true,
    }),
    defineField({name: 'name', title: 'Όνοματεπώνυμο', type: 'string', readOnly: true}),
    defineField({name: 'email', title: 'Email', type: 'string', readOnly: true}),
    defineField({name: 'phone', title: 'Τηλέφωνο', type: 'string', readOnly: true}),
    defineField({name: 'date', title: 'Ημερομηνία', type: 'string', readOnly: true}),
    defineField({name: 'guests', title: 'Άτομα', type: 'string', readOnly: true}),
    defineField({name: 'notes', title: 'Σημειώσεις', type: 'text', rows: 3, readOnly: true}),
    defineField({name: 'message', title: 'Μήνυμα', type: 'text', rows: 4, readOnly: true}),
    defineField({name: 'read', title: 'Διαβάστηκε', type: 'boolean', initialValue: false}),
    defineField({name: 'submittedAt', title: 'Submitted at', type: 'datetime', readOnly: true}),
  ],
  preview: {
    select: {title: 'name', subtitle: 'formType', date: 'submittedAt'},
    prepare({title, subtitle, date}) {
      return {
        title: title || 'Submission',
        subtitle: [subtitle, date].filter(Boolean).join(' · '),
      }
    },
  },
  orderings: [
    {
      title: 'Newest first',
      name: 'submittedAtDesc',
      by: [{field: 'submittedAt', direction: 'desc'}],
    },
  ],
})
