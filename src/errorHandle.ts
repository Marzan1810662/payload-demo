
export const errorHandler = (func:any) => (req:any, res:any, next:any) =>{
    Promise.resolve(func(req,res,next)).catch(err => next(err))
}