import { CollectionConfig } from 'payload/types'
import { Field } from 'payload/types';
import { selfOrAdmin } from '../access/selfOrAdmin';

const translation : {[k: string]: string} = {
    en: 'Written by',
    es: 'Escrito por'
}

const Customers: CollectionConfig = {
    slug: 'customers',
    auth: true,
    admin: {
        useAsTitle: 'First Name'
    },
    access: {
        create: () => true,
        read: selfOrAdmin,
        update: selfOrAdmin,
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
            defaultValue: ' First Name',
            hooks: {
                beforeChange: [({ value }) => {
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
        {
            name: 'attribution',
            type: 'text',
            defaultValue: ({ user, locale }: {user: any, locale:string}):string => {
                return `${translation[locale]} ${user.email}`},
        }

    ],
    hooks: {
        afterChange: [(args) => {
            // console.log(args);
        }],
        beforeRead: [(args) => {
            // console.log(args);
        }]

    }

}

export default Customers;