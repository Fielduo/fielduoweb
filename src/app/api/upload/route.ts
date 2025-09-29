import { NextRequest, NextResponse } from "next/server";
import { withAdminAuth } from "@/lib/admin-api";
import { getCloudinary, getUploadFolder } from "@/lib/cloudinary";

export const runtime = "nodejs";

export const POST = withAdminAuth(async (request: NextRequest, user: any) => {
  try {
    const data = await request.formData();
    const file: File | null = data.get("file") as unknown as File;

    if (!file) {
      return NextResponse.json({ success: false, message: "No file uploaded" }, { status: 400 });
    }

    // Validate file type
    const allowedTypes = ["image/jpeg", "image/jpg", "image/png", "image/gif", "image/webp"];
    if (!allowedTypes.includes(file.type)) {
      return NextResponse.json({ 
        success: false, 
        message: "Invalid file type. Only JPEG, PNG, GIF, and WebP images are allowed." 
      }, { status: 400 });
    }

    // Validate file size (5MB limit)
    const maxSize = 5 * 1024 * 1024; // 5MB
    if (file.size > maxSize) {
      return NextResponse.json({ 
        success: false, 
        message: "File too large. Maximum size is 5MB." 
      }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const cloudinary = getCloudinary();
    if (!process.env.CLOUDINARY_CLOUD_NAME || !process.env.CLOUDINARY_API_KEY || !process.env.CLOUDINARY_API_SECRET) {
      return NextResponse.json({ success: false, message: "Cloudinary is not configured on the server" }, { status: 500 });
    }

    const folder = getUploadFolder();

    const uploadResult = await new Promise<any>((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        {
          folder,
          resource_type: "image",
          overwrite: false,
          transformation: [
            // Auto format and quality for web delivery
            { fetch_format: "auto", quality: "auto" },
          ],
        },
        (error, result) => {
          if (error) return reject(error);
          resolve(result);
        }
      );
      uploadStream.end(buffer);
    });

    return NextResponse.json({
      success: true,
      imageUrl: uploadResult.secure_url,
      publicId: uploadResult.public_id,
      width: uploadResult.width,
      height: uploadResult.height,
      format: uploadResult.format,
      message: "File uploaded successfully",
    });

  } catch (error) {
    console.error("Upload error:", error);
    return NextResponse.json({ 
      success: false, 
      message: "Failed to upload file" 
    }, { status: 500 });
  }
});
