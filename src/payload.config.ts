import path from 'path';
import { buildConfig } from 'payload/config';
import Users from './collections/Users';
import Customers from './collections/Customers';




export default buildConfig({
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL,
  admin: {
    user: Users.slug,
  },
  cors: ['http://localhost:3000'],

  collections: [
    Customers,
    Users,
    {
      slug: 'pages',
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'content',
          type: 'richText',
          required: true,
        },
        {
          name: 'nav',
          type: 'array',
          fields: [
            {
              name: 'page',
              type: 'relationship',
              relationTo: 'pages',
            },
          ],
        }
      ],
    }
  ],
  globals: [
    {
      slug: 'header',
      fields: [
        {
          name: 'nav',
          type: 'array',
          fields: [
            {
              name: 'page',
              type: 'relationship',
              relationTo: 'pages',
            },
          ],
        },
      ],
    },
    {
      slug: 'header1',
      fields: [
        {
          name: 'nav1',
          type: 'array',
          fields: [
            {
              name: 'page',
              type: 'text',
            },
          ],
        },
      ],
    },
  ],

  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    disable: true,
  },
  express: {
    json: {
      limit: 400000, //4MB
    },
  },
  upload: {
    limits: {
      fileSize: 26214400, // 25MB, written in bytes
    },
  },
  rateLimit: {
    trustProxy: true,
  },
});
