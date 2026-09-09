import type {StructureResolver} from 'sanity/structure'

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('⚙️ Site Settings')
        .child(S.document().schemaType('siteSettings').documentId('siteSettings')),

      S.listItem()
        .title('🏠 Homepage')
        .child(S.document().schemaType('homePage').documentId('homePage')),

      S.divider(),

      S.listItem()
        .title('📥 Form Submissions')
        .child(
          S.documentTypeList('formSubmission')
            .title('Form Submissions')
            .defaultOrdering([{field: 'submittedAt', direction: 'desc'}]),
        ),
    ])
