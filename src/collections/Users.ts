import { CollectionConfig } from 'payload/types';


const Users: CollectionConfig = {
  slug: 'users',

  auth: {
    tokenExpiration: 36000,

  },
  admin: {
    useAsTitle: 'email',
    defaultColumns: ['email',],
    group: 'Admin',
  },

  fields: [
    {
      name: 'email', // required
      type: 'email', // required
      label: 'Email',
      required: true,
    },
  ],
};

export default Users;
