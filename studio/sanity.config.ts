import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {structure} from './structure'

export default defineConfig({
  name: 'default',
  title: 'Persona Spritzeria',

  projectId: process.env.SANITY_STUDIO_PROJECT_ID || 'REPLACE_ME',
  dataset: process.env.SANITY_STUDIO_DATASET || 'production',

  plugins: [structureTool({structure}), visionTool()],

  schema: {
    types: schemaTypes,
    templates: (templates) =>
      templates.filter(({schemaType}) => !['siteSettings', 'homePage'].includes(schemaType)),
  },
})
