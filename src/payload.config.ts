import path from 'path';
import { buildConfig } from 'payload/config';
import Users from './collections/Users';
import Staffs from './collections/staffs';
import FacultyMembers from './collections/FacultyMembers'
import FacultyMedias from './collections/media/FacultyMedias';




export default buildConfig({
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL,
  admin: {
    user: Users.slug,
  },
  cors: ['http://localhost:3000'],

  collections: [
    Staffs,
    FacultyMembers,
    Users,
    FacultyMedias
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
              relationTo: 'faculty-members',
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
