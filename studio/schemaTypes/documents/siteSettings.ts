import {defineType, defineField} from 'sanity'
import {CogIcon} from '@sanity/icons'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  icon: CogIcon,
  fields: [
    defineField({name: 'siteName', title: 'Site name', type: 'string'}),
    defineField({name: 'phone', title: 'Phone', type: 'string'}),
    defineField({name: 'email', title: 'Email', type: 'string'}),
    defineField({name: 'address', title: 'Address', type: 'string'}),
    defineField({name: 'instagramUrl', title: 'Instagram URL', type: 'url'}),
    defineField({name: 'tiktokUrl', title: 'TikTok URL', type: 'url'}),
    defineField({name: 'mapsUrl', title: 'Google Maps URL', type: 'url'}),
    defineField({name: 'defaultSeoTitle', title: 'Default SEO title', type: 'string'}),
    defineField({name: 'defaultSeoDescription', title: 'Default SEO description', type: 'text', rows: 3}),
  ],
  preview: {
    prepare() {
      return {title: 'Site Settings'}
    },
  },
})
