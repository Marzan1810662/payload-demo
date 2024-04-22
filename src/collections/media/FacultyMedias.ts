import test from "node:test";
import { CollectionConfig } from "payload/types";

const FacultyMedias: CollectionConfig ={
    slug: 'faculty-media',
    admin:{
        group: 'Media'
    },
    upload: {
        staticURL:'/media',
        staticDir: 'media',
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