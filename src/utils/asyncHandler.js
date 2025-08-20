/*why we use this
explain:
Imagine this
You have a delivery boy (your route function) who brings parcels (data) to people.
Sometimes he trips and falls (error happens).

Without help:
You have to run behind him every single time with a first aid kit (try...catch) to help him.
It’s tiring to do this for every delivery.

With asyncHandler:
You give the delivery boy a bodyguard (the wrapper function).
If he trips, the bodyguard automatically carries him to the doctor (next(err)), so you don’t have to run behind him every time.


*/


const asyncHandler=(requestHandler)=>{
    return (req,res,next)=>{
        Promise.resolve(requestHandler(req,res,next)).catch((err)=>next(err))
    }
}

export {asyncHandler,}


//another method using try and catch

// const asyncHandler=(fn)=>async(req,res,next)=>{
//     try{
//         await fn(req,res,next)
//     }
//     catch(error){
//         res.status(err.code || 500).json({
//             sucess:false,
//             message:err.message
//         })
//     }
// }
