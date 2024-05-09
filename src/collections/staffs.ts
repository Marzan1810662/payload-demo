import { CollectionConfig } from 'payload/types'
import { Field } from 'payload/types';
import { selfOrAdmin } from '../access/selfOrAdmin';

const translation: { [k: string]: string } /*index signature*/ = {
    en: 'Written by',
    es: 'Escrito por'
}

const Staffs: CollectionConfig = {
    slug: 'staffs',
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
            admin: {
                placeholder: 'First Name'
            },
            hooks: {
                beforeChange: [({ value }) => {
                    // Trim whitespace and convert to lowercase
                    return value.charAt(0).toUpperCase() + value.substr(1).toLowerCase();
                }]
            }
        },
        {
            name: 'Last Name',
            type: 'text',
            label: 'Last Name',
            required: true,
            admin: {
                placeholder: 'Last Name'
            },
            hooks:{
                afterChange:[
                    (args) =>{
                        // console.log(args);
                        let names :string[] = args.value.split(' ')
                        let newName = ''
                        names.forEach(item => {
                            item = item.charAt(0).toUpperCase() + item.substr(1).toLowerCase();
                            newName += item + ' '
                        });
                        return newName
                    }
                ]
            }
        },
        {
            name: 'attribution',
            type: 'text',
            defaultValue: ({ user, locale }: { user: any, locale: string }): string => {
                return `${translation[locale]} ${user.email}`
            },
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

export default Staffs;