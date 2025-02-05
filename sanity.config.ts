import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'sanity-2',

  projectId: 'bo6apu8z',
  dataset: 'sanity-2',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
