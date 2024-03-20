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
    Users
  ],
  globals: [

  ],

  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    disable: true,
  },
  express: {
    json: {
      limit: 400000,
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
