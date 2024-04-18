import { Access } from "payload/config";


export const selfOrAdmin: Access = (args) => {
    // console.log(` selfOrAdmin: ${user} }}`);
    if (args.req.user?.collection === 'users') {
        return true
    }
    return {
        id: {
            equals: args.req.user?.id
        }
    }
    
}