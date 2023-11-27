import { type SchemaTypeDefinition } from 'sanity'

import experience from './schemas/expereince'
import pageInfo from './schemas/pageInfo'
import social from './schemas/social'
import skill from './schemas/skill'
import project from './schemas/project'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [pageInfo, social, experience, project, skill],
}
