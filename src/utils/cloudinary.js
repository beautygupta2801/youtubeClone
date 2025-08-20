import {v2 as cloudinary} from "cloudinary"
//help in read write and file handling related stuff
import fs from "fs"

cloudinary.config({ 
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
        api_key: process.env.CLOUDINARY_CLOUD_API_KEY, 
        api_secret:process.env.CLOUDINARY_API_SECRET // Click 'View API Keys' above to copy your API secret
    });
    
const uploadOnCloudinary=async (localFilePath)=>{
    try{
        if(!localFilePath)return null
        //upload file on cloudinary
        const response=await cloudinary.uploader.upload(
            localFilePath,{
                resource_type:"auto"     
            }
        )
        //file has been uploaded succesful
        console.log("file is uploaded on cloudinary",response.url);
        return response
    }
    catch(error){
        fs.unlinkSync(localFilePath) //remove the locally saved temporary file as upload operation got failed
        return null;
    }
}
export {uploadOnCloudinary}