import { CollectionConfig } from 'payload/types'
import { selfOrAdmin } from '../access/selfOrAdmin';

const Customers: CollectionConfig = {
    slug: 'customers',
    auth: true,
    access: {
        create: () => true,
        read:selfOrAdmin,
        update:selfOrAdmin,
        delete: ({ req: { user } }) => {
            return user?.collection === 'users';
        }
    },
    fields: [
        {
            name: 'First Name',
            type: 'text',
            label: 'First Name',
            required: true,
            hooks: {
                beforeChange: [({value}) => {
                    // Trim whitespace and convert to lowercase
                    return value.trim().toLowerCase()
                  }]
            }
        },
        {
            name: 'Last Name',
            type: 'text',
            label: 'Last Name',
            required: true
        },

    ],
    hooks: {
        afterChange: [(args)=>{
            console.log(args);
        }],
        beforeRead: [(args) =>{
            console.log(args);
        }]

    }

}

export default Customers;