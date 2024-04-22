import { CollectionConfig } from 'payload/types'
import ImageWaringLabelStatic from '../components/Text/ImageWaringLabelStatic'



export const FacultyMembers: CollectionConfig = {
    slug: 'faculty-members',
    admin: {
        useAsTitle: 'name',
        defaultColumns: ['name', 'departmrentName', 'facultyEmail', 'priority'],
        pagination: {
            defaultLimit: 5,
            limits: [10, 20]
        }
    },
    labels: {
        singular: 'Faculty Member',
        plural: 'Faculty Members'
    },
    upload: {
        staticURL: '/media',
        staticDir: 'media',
        mimeTypes: ['image/*']

    },
    fields: [
        {
            name: 'name',
            label: 'Name',
            type: 'text',
            required: true,

        },
        {
            name: 'alternative-name',
            label: 'Alternative Name',
            type: 'text',
            admin: {
                description: 'Enter alternative names given in publications separated by comma(,)'
            }
        },
        {
            name: 'designation',
            label: 'Designation',
            type: 'select',
            options: ['Professor', 'Associate Professor', 'Assistant Professor', 'Lecturer A', 'Lecturer B', 'Lecturer C']
        },
        {
            name: 'position',
            label: 'Position',
            type: 'text',
            admin: {
                description: 'No character limit'
            }
        },
        {
            name: 'head',
            label: 'Head',
            type: 'checkbox',
            admin: {
                description: 'check this box if you are head'
            }
        },
        {
            name: 'is-in-charge',
            label: 'Is In Charge',
            type: 'checkbox',
            admin: {
                description: 'check this box if you are in charge'
            }
        },
        {
            name: 'school',
            label: 'School',
            required: true,
            type: 'select',
            options: ['SBE', 'SETS', 'SELS', 'SPPH'],
        },
        {
            name: 'department',
            label: 'Department',
            required: true,
            type: 'select',
            options: ['CSE', 'CS', 'EEE', 'HRM', 'Fin', 'Law'],
        },
        {
            name: 'organization',
            label: 'Organization',
            type: 'text',
            defaultValue: 'Independent University, Bangladesh'
        },
        {
            name: 'profile-picture',
            label: 'Profile Prictire',
            type: 'upload',
            relationTo: 'faculty-media',
            admin: {
                description: ImageWaringLabelStatic('W:H=1:1'),

            }
        },
    ]


}


export default FacultyMembers