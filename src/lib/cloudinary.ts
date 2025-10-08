import { v2 as cloudinary } from "cloudinary";

// Configure Cloudinary from environment variables at import time.
// Required envs: CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET
// Optional: CLOUDINARY_UPLOAD_FOLDER
if (
  process.env.CLOUDINARY_CLOUD_NAME &&
  process.env.CLOUDINARY_API_KEY &&
  process.env.CLOUDINARY_API_SECRET
) {
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true,
  });
}

export const getCloudinary = () => cloudinary;

export const getUploadFolder = () =>
  process.env.CLOUDINARY_UPLOAD_FOLDER || "fielduo/blog-images";


