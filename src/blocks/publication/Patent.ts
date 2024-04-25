import { describe } from "node:test";
import { Block } from "payload/types";

export const Patent: Block = {
    slug: 'patent',
    labels:{
        singular: 'Patent',
        plural: 'Patent'
    },
    fields:[
        {
            name: 'title',
            label: 'Title',
            type: 'text',
        },
        {
            name: 'authors',
            label: 'Authors',
            type: 'text',
        },
        {
            name: 'publication-date',
            label: 'Publication Date',
            type: 'text',
        },
        {
          name: 'patent-office',
          label: 'Patent Office',
          type: 'text'  
        },
        {
            name: 'patent-number',
            label: 'Patent Number',
            type: 'text'
        },
        {
            name: 'application-number',
            label: 'Application Number',
            type: 'text'
        },
        {
            name: 'description',
            label: 'Description',
            type: 'richText',
            admin:{
                description: 'No Character Limit | Characters:0'
            }
        },
        {
            name: 'link-to-source',
            label: 'Link To Source',
            type: 'text',
        },
        {
            name: 'cited-by',
            label: 'Cited By',
            type: 'text',
        },
        {
            name: 'index-by',
            label: 'Index By',
            type: 'text',
        },
        {
            name: 'year',
            label: 'Year',
            type: 'text',
            admin:{
                readOnly: true
            }
        },
        {
            name: 'published',
            label: 'Published',
            type: 'checkbox',
            admin:{
                description: 'Generally this chekbox should be automatically checked. If it is not checked, the publication will not be visible on the website. Reason for this is that the publication author name does not match the Name/Aternative Names provided in the above section'
            }
        }
    ]
}