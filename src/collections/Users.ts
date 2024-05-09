import { CollectionConfig } from 'payload/types';


const Users: CollectionConfig = {
  slug: 'users',//identifier of the collection

  auth: {
    tokenExpiration: 36000,

  },
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['number','name','email',],
    group: 'Admin',
    
  },

  fields: [
    {
      name: 'number', // required
      type: 'number', // required
      label: 'Number',
      required: true,
    },
    {
      name: 'name', // required
      type: 'text', // required
      label: 'Name',
      required: true,
    },
    {
      name: 'email', // required
      type: 'email', // required
      label: 'Email',
      required: true,
    },
    
  ],
};

export default Users;
