import { CollectionConfig } from 'payload/types'
import ImageWarningLabelStatic from '../components/Text/ImageWarningLabelStatic'
import { Journal } from '../blocks/publication/Journal'
import { Patent } from '../blocks/publication/Patent'
import { Thesis } from '../blocks/publication/Thesis'
import { Book } from '../blocks/publication/Book'
import { Chapter } from '../blocks/publication/Chapter'
import { Conference } from '../blocks/publication/Conference'
import { CourtCase } from '../blocks/publication/CourtCase'
import { Other } from '../blocks/publication/Other'


export const FacultyMembers: CollectionConfig = {
    slug: 'faculty-members',
    admin: {
        useAsTitle: 'name',
        // defaultColumns: ['name', 'department', 'facultyEmail', 'priority'],
        pagination: {
            defaultLimit: 5,
            limits: [10, 20]
        }
    },
    versions: {
        drafts: true,
        maxPerDoc: 5
    },
    labels: {
        singular: 'Faculty Member',
        plural: 'Faculty Members'
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
                description: ImageWarningLabelStatic('W:H=1:1'),

            }
        },
        {
            label: 'Professonal Links',
            type: 'collapsible',
            fields: [
                {
                    name: 'google-scholer',
                    label: 'Google Scholer',
                    type: 'text'
                },
                {
                    name: 'orchid',
                    label: 'Orchid',
                    type: 'text'
                },
                {
                    name: 'linkedin',
                    label: 'LinkedIn',
                    type: 'text'
                }
            ],
        },
        {
            type: 'tabs',
            tabs: [
                {
                    name: 'about',
                    label: 'About',
                    fields: [
                        {
                            name: 'ip-ext',
                            label: 'IP EXT',
                            type: 'text',
                            admin: {
                                placeholder: 'Ext:2130'
                            }
                        },
                        {
                            label: 'Office Address',
                            type: 'collapsible',
                            fields: [
                                {
                                    name: 'building',
                                    label: 'Building',
                                    type: 'select',
                                    options: ['Administration Building', 'Main Building', 'DMK Building', 'Jubilee Building']
                                },
                                {
                                    name: ' room-no',
                                    label: 'Room No.',
                                    type: 'text',
                                }
                            ]

                        },
                        {
                            label: 'Private Data',
                            type: 'collapsible',
                            fields: [
                                {
                                    name: 'phone-number',
                                    label: 'Phone Number',
                                    type: 'text',
                                    admin: {
                                        placeholder: 'e.g. 01755678232',
                                        description: 'Login will be required to see this information'
                                    }
                                },
                                {
                                    name: 'alternative-email',
                                    label: 'Alternative Email',
                                    type: 'email',
                                    admin: {
                                        description: 'Login will be required to see this information'
                                    }
                                }
                            ]
                        },
                        {
                            name: 'bio',
                            label: 'Bio',
                            type: 'richText',
                            admin: {
                                description: 'character left '
                            }
                        }
                    ]
                },
                {
                    name: 'experience',
                    label: 'Experience',
                    fields: [
                        {
                            name: 'experience',
                            label: 'Experience',
                            type: 'array',
                            fields: [
                                {
                                    name: 'designation',
                                    label: 'Designation',
                                    type: 'text'
                                },
                                {
                                    name: 'emploment-type',
                                    label: 'Employment Type',
                                    type: 'text'
                                },
                                {
                                    name: 'company-name',
                                    label: 'Company Name',
                                    type: 'text'
                                },
                                {
                                    name: 'start-date',
                                    label: 'Start Date',
                                    type: 'text',
                                    admin: {
                                        placeholder: 'e.g. January, 2023'
                                    }
                                },
                                {
                                    name: 'end-date',
                                    label: 'End Date',
                                    type: 'text',
                                    admin: {
                                        placeholder: 'e.g. January, 2023'
                                    }
                                },
                                {
                                    name: 'about-work',
                                    label: 'About Work',
                                    type: 'richText',
                                    admin:
                                    {
                                        description: 'characters'
                                        //     description: (a: any) : string=> {
                                        //         if (a){
                                        //             return a.value[0].children[0].text 
                                        //         }
                                        //         else{
                                        //             return 'kjhkjh'
                                        //         }
                                        //     } 
                                        // }

                                    }
                                }
                            ]

                        },
                        {
                            name: 'award',
                            label: 'Award',
                            type: 'array',
                            fields: [
                                {
                                    name: 'title-of-the-award',
                                    label: 'Title of the Award',
                                    type: 'text'
                                },
                                {
                                    name: 'organization-name',
                                    label: 'Organization Name',
                                    type: 'text'
                                },
                                {
                                    name: 'issued-date',
                                    label: 'Issued Date',
                                    type: 'text'
                                },
                                {
                                    name: 'about',
                                    label: 'About',
                                    type: 'richText',
                                    admin: {
                                        description: 'Max 1000 characters. | Characters: '
                                    }
                                }
                            ]
                        }
                    ]
                },
                {
                    name: 'education',
                    label: 'Education',
                    fields: [
                        {
                            name: 'education',
                            label: 'Education',
                            admin: {
                                description: 'Education',
                            },
                            type: 'array',
                            fields: [
                                {
                                    name: 'degree-title',
                                    label: 'Degree Title',
                                    type: 'text',
                                    admin: {
                                        placeholder: 'Eg:Bachelor | Master | PhD'
                                    }
                                },
                                {
                                    name: 'major-field',
                                    label: 'Major Field',
                                    type: 'text',
                                    admin: {
                                        placeholder: 'Eg:Computer Science | Mathematics'
                                    }
                                },
                                {
                                    name: 'institution',
                                    label: 'Institution',
                                    type: 'text',
                                    admin: {
                                        placeholder: 'Eg:BIndependent University, Bangladesh'
                                    }
                                },
                                {
                                    name: 'country',
                                    label: 'Country',
                                    type: 'text',
                                    admin: {
                                        placeholder: 'Eg:Bangladesh | USA | UK'
                                    }
                                },
                                {
                                    name: 'year',
                                    label: 'Year',
                                    type: 'text',
                                },
                                {
                                    name: 'about',
                                    label: 'About',
                                    type: 'richText',
                                    admin: {
                                        description: 'Max 1000 characters. | characters: 0'
                                    }
                                }
                            ]
                        },
                        {
                            name: 'certification',
                            label: 'Certification',
                            type: 'array',
                            fields: [
                                {
                                    name: 'title-certification',
                                    label: 'Title of the Certification',
                                    type: 'text'
                                },
                                {
                                    name: 'certifying-organization',
                                    label: 'Certifying Organization',
                                    type: 'text'
                                },
                                {
                                    name: 'issuing-date',
                                    label: 'Issuing Date',
                                    type: 'text',
                                    admin: {
                                        placeholder: 'e.g. January, 2023'
                                    }
                                },
                                {
                                    name: 'expiration-date',
                                    label: 'Expiration Date',
                                    type: 'text',
                                    admin: {
                                        placeholder: 'e.g. January, 2023'
                                    }
                                },
                                {
                                    name: 'credential-id',
                                    label: 'Credential ID',
                                    type: 'text'
                                },
                                {
                                    name: 'credential-url',
                                    label: 'Credential URL',
                                    type: 'text'
                                },
                                {
                                    name: 'about',
                                    label: 'About',
                                    type: 'richText',
                                    admin: {
                                        description: 'Max 1000 characters. | Characeters:0'
                                    }
                                }
                            ]
                        },
                    ]
                },
                {
                    name: 'teaching',
                    label: 'Teaching',
                    fields: [
                        {
                            name: 'visiting-hour',
                            label: 'Visiting Hour',
                            type: 'array',
                            fields: [
                                {
                                    name: 'day',
                                    label: 'Day',
                                    type: 'select',
                                    options: ['Satureday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']

                                },
                                {
                                    name: 'time-slots',
                                    label: 'Time Slots',
                                    type: 'array',
                                    fields: [
                                        {
                                            name: 'time-slot',
                                            label: 'Time Slot',
                                            type: 'text',
                                            admin: {
                                                placeholder: 'e.g. 10.00 AM - 12.00 PM'
                                            }
                                        }
                                    ]
                                }
                            ]
                        }
                    ]

                },
                {
                    name: 'projects',
                    label: 'Projects',
                    fields: [
                        {
                            name: 'projects',
                            label: 'Projects',
                            type: 'select',
                            options: ['dummy project 01', 'dummy project 02', 'dummy project 03', 'dummy projects 04']
                        }
                    ]
                },
                {
                    name: 'publications',
                    label: 'Publications',
                    fields: [
                        {
                            name: 'update-publication-data',
                            label: 'Update Data',
                            type: 'checkbox',
                            admin: {
                                description: 'Check this box to update the data from Google Scholar.If you have not added your Google Scholar ID, please add it first.And if the Data is updated, please uncheck this box.'
                            }

                        },
                        {
                            name: 'publication',
                            label: 'Publication',
                            type: 'blocks',
                            blocks: [
                                Journal,
                                Patent,
                                Thesis,
                                Book,
                                Chapter,
                                Conference,
                                CourtCase,
                                Other
                            ]

                        }
                    ]
                },
                {
                    name: 'view-card',
                    label: 'View Card',
                    fields: [
                        {
                            name: 'highest-education',
                            label: 'Highest Education',
                            type: 'text'
                        },
                        {
                            name: 'area-experience',
                            label: 'Area of Experience',
                            type: 'richText',
                            admin:{
                                description: 'Max 1000 characters. | Characters:0'
                            }
                        },
                        {
                            name: 'total-citations',
                            label: 'Total Citations',
                            type: 'text'
                        },
                        {
                            name: 'total-citations-subtitle',
                            label: 'Total Citations Subtitle',
                            type: 'text'
                        },
                        {
                            name: 'h-index',
                            label: 'H-Index',
                            type: 'text'
                        },
                        {
                            name: 'h-index-subtitle',
                            label: 'H-Index Subtitle',
                            type: 'text'
                        },
                        {
                            name: 'i-index',
                            label: 'I-Index',
                            type: 'text'
                        },
                        {
                            name: 'i-index-subtitle',
                            label: 'I-Index Subtitle',
                            type: 'text'
                        },
                        {
                            name: 'update-data',
                            label: 'Update Data',
                            type: 'checkbox',
                            admin:{
                                description: 'Check this box to update the data from Google Scholar.If you have not added your Google Scholar ID, please add it first.And if the Data is updated, please uncheck this box.'
                            }
                        }
                    ]
                }
            ]
        }
    ]


}


export default FacultyMembers