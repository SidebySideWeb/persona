import {defineType, defineField} from 'sanity'
import {HomeIcon} from '@sanity/icons'

export const homePage = defineType({
  name: 'homePage',
  title: 'Homepage',
  type: 'document',
  icon: HomeIcon,
  fields: [
    defineField({
      name: 'seoTitle',
      title: 'SEO Title',
      type: 'string',
    }),
    defineField({
      name: 'seoDescription',
      title: 'SEO Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'announcement',
      title: 'Top announcement bar',
      type: 'string',
    }),
    defineField({
      name: 'heroTagline',
      title: 'Hero tagline',
      type: 'text',
      rows: 2,
    }),
  ],
  preview: {
    prepare() {
      return {title: 'Homepage'}
    },
  },
})
