//ApiError is just a custom error with more details for API responses, so you can send clear and useful error messages to the client.
class ApiError extends Error{
    constructor(
        statusCode,
        message="Something Went Wrong",
        errors=[],
        stack=""
    ){
        super(message)
        this.statusCode=statusCode
        this.data=null
        this.message=message
        this.success=false
        this.errors=errors

        if(stack){
            this.stack=stack
        }
        else{
            Error.captureStackTrace(this,this.constructor)
        }

    }

}
export {ApiError}