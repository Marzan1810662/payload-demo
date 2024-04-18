import { CollectionConfig } from 'payload/types'

export const Pages: CollectionConfig = {
    slug: 'pages',
    // fields: [
    //     {
    //         name: 'myField',
    //         type: 'text',
    //     },
    //     {
    //         name: 'otherField',
    //         type: 'checkbox',
    //     },
    //     {
    //         name: 'anotherField',
    //         type: 'checkbox',
    //     },
    // ],
    fields: [
        {
          name: 'title',
          required: true,
          type: 'text',
        },
        // {
        //   name: 'categories',
        //   admin: {
        //     position: 'sidebar',
        //   },
        //   hasMany: true,
        //   relationTo: 'categories',
        //   type: 'relationship',
        // },
        {
          name: 'publishedDate',
          admin: {
            position: 'sidebar',
          },
          type: 'date',
        },
        {
          tabs: [
            {
              fields: [
                {
                  name: 'hero',
                  fields: [
                    // richText(),
                    {
                      name: 'media',
                      relationTo: 'customers',
                      type: 'upload',
                    },
                  ],
                  type: 'group',
                },
              ],
              label: 'Hero',
            },
            {
              fields: [
                {
                  name: 'layout',
                  blocks: [],
                  required: true,
                  type: 'blocks',
                },
              ],
              label: 'Content',
            },
          ],
          type: 'tabs',
        },
        {
          name: 'relatedProjects',
          filterOptions: ({ id }) => {
            return {
              id: {
                not_in: [id],
              },
            }
          },
          hasMany: true,
          relationTo: 'customers',
          type: 'relationship',
        },
        // slugField(),
      ],
}


export default Pages