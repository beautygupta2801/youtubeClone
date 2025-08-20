import multer from "multer";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./public/temp")
    },
    filename: function (req, file, cb) {
      
      cb(null, file.originalname)
    }
  })
  
export const upload = multer({ 
    storage, 
})


/*
1. storage = multer.diskStorage({ ... })

This means:

Store files on your local disk temporarily before doing something else with them.

2. destination function
destination: function (req, file, cb) {
    cb(null, "./public/temp")
}


Tells multer which folder to put the uploaded file in.

Here, it’s ./public/temp → like a temporary holding shelf in the post office.

cb(null, ...) means: “No error, here’s the folder path.”

3. filename function
filename: function (req, file, cb) {
    cb(null, file.originalname)
}


Decides what name to give the uploaded file.

Here, it keeps the original name from the sender’s computer.

Like when a package arrives, you keep the sender’s label intact.

4. export const upload
export const upload = multer({ storage: storage })


Creates an upload handler using these rules.

When you use this in a route, it’s like saying:

“Hey multer, take this file, store it in /public/temp with its original name.”

Example flow:

User uploads a profile picture.

Multer receives it → saves it in public/temp folder with original filename.

Later, your code (like uploadOnCloudinary) takes it from temp and uploads to Cloudinary.

After successful upload, the temp file is deleted.

💡 Memory hook:

Multer here is like a mail sorting desk — it puts all new packages into a temporary box with their original labels before you send them to their final destination (Cloudinary).

If you want, I can show you how this multer code and your Cloudinary upload function work together in one complete YouTube clone upload flow. That will connect both pieces perfectly.
*/