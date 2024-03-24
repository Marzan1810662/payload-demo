import { CollectionConfig } from 'payload/types'

export const Pages: CollectionConfig = {
    slug: 'pages',
    fields: [
        {
            name: 'myField',
            type: 'text',
        },
        {
            name: 'otherField',
            type: 'checkbox',
        },
        {
            name: 'anotherField',
            type: 'checkbox',
        },
    ],
}


export default Pages