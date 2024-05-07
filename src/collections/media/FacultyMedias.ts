import test from "node:test";
import { CollectionConfig } from "payload/types";
import path from "path";
const FacultyMedias: CollectionConfig ={
    slug: 'faculty-media',
    admin:{
        group: 'Media'
    },
    upload: {
        staticURL:'/media',
        staticDir: path.resolve('public', 'media'),
        mimeTypes: ['image/*']
    },
    fields:[
        {
            name:'alt',
            type: 'text'
        }
    ]
}

export default FacultyMedias