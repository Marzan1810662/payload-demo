import { Access } from "payload/config";


export const selfOrAdmin: Access = (args) => {
    // console.log(` selfOrAdmin: ${user} }}`);
    // if (args.req.user?.collection === 'users') {
    //     return true
    // }
    // console.log(`Written by ${args.req?.user.email}`);
    return {
        or: [
            {
                attribution: {
                    equals: `Written by ${args.req?.user.email}`
                }
            },
            // {
            //     id: {
            //         equals: args.req?.user.id
            //     }
            // }
        ]
    }

}