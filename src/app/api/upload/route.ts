import { NextRequest, NextResponse } from "next/server";
import { getCloudinary, getUploadFolder } from "@/lib/cloudinary";

export const runtime = "nodejs";

// Temporarily remove auth requirement for debugging
export async function POST(request: NextRequest) {
  try {
    console.log('📤 Upload API called');
    
    // Check if Cloudinary is configured
    if (!process.env.CLOUDINARY_CLOUD_NAME || !process.env.CLOUDINARY_API_KEY || !process.env.CLOUDINARY_API_SECRET) {
      console.error('❌ Cloudinary not configured');
      return NextResponse.json({
        success: false,
        message: 'Cloudinary not configured. Please check environment variables.',
        config: {
          cloudName: !!process.env.CLOUDINARY_CLOUD_NAME,
          apiKey: !!process.env.CLOUDINARY_API_KEY,
          apiSecret: !!process.env.CLOUDINARY_API_SECRET
        }
      }, { status: 500 });
    }

    const data = await request.formData();
    const file: File | null = data.get("file") as unknown as File;

    if (!file) {
      console.error('❌ No file provided');
      return NextResponse.json({ 
        success: false, 
        message: "No file uploaded" 
      }, { status: 400 });
    }

    console.log('📁 File received:', {
      name: file.name,
      size: file.size,
      type: file.type
    });

    // Validate file type
    const allowedTypes = ["image/jpeg", "image/jpg", "image/png", "image/gif", "image/webp"];
    if (!allowedTypes.includes(file.type)) {
      console.error('❌ Invalid file type:', file.type);
      return NextResponse.json({ 
        success: false, 
        message: `Invalid file type: ${file.type}. Only JPEG, PNG, GIF, and WebP images are allowed.`
      }, { status: 400 });
    }

    // Validate file size (4MB limit to stay under common host limits)
    const maxSize = 4 * 1024 * 1024; // 4MB
    if (file.size > maxSize) {
      console.error('❌ File too large:', file.size);
      return NextResponse.json({ 
        success: false, 
        message: `File too large: ${(file.size / 1024 / 1024).toFixed(2)}MB. Maximum size is 5MB.`
      }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    console.log('☁️ Uploading to Cloudinary...');

    const cloudinary = getCloudinary();
    const folder = getUploadFolder();

    const uploadResult = await new Promise<any>((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        {
          folder,
          resource_type: "image",
          overwrite: false,
          public_id: `blog-${Date.now()}-${file.name.replace(/\.[^/.]+$/, "")}`,
          transformation: [
            // Auto format and quality for web delivery
            { fetch_format: "auto", quality: "auto" },
          ],
        },
        (error, result) => {
          if (error) {
            console.error('❌ Cloudinary upload error:', error);
            reject(error);
          } else {
            console.log('✅ Cloudinary upload success:', result?.public_id);
            resolve(result);
          }
        }
      );
      uploadStream.end(buffer);
    });

    console.log('✅ Upload successful:', uploadResult.secure_url);

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
    console.error("💥 Upload error:", error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    
    return NextResponse.json({ 
      success: false, 
      message: `Upload failed: ${errorMessage}`,
      error: process.env.NODE_ENV === 'development' ? errorMessage : 'Internal server error'
    }, { status: 500 });
  }
}

// Add GET method for testing configuration
export async function GET() {
  const isConfigured = !!(process.env.CLOUDINARY_CLOUD_NAME && process.env.CLOUDINARY_API_KEY && process.env.CLOUDINARY_API_SECRET);
  
  return NextResponse.json({
    message: 'Upload endpoint. Use POST to upload files.',
    configured: isConfigured,
    config: {
      cloudName: !!process.env.CLOUDINARY_CLOUD_NAME,
      apiKey: !!process.env.CLOUDINARY_API_KEY,
      apiSecret: !!process.env.CLOUDINARY_API_SECRET,
      folder: process.env.CLOUDINARY_UPLOAD_FOLDER || "fielduo/blog-images"
    }
  });
}
