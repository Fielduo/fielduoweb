import { NextRequest, NextResponse } from "next/server";
import { getCloudinary } from "@/lib/cloudinary";

export const runtime = "nodejs";

export async function GET() {
  try {
    // Check if Cloudinary environment variables are set
    const cloudName = process.env.CLOUDINARY_CLOUD_NAME;
    const apiKey = process.env.CLOUDINARY_API_KEY;
    const apiSecret = process.env.CLOUDINARY_API_SECRET;

    if (!cloudName || !apiKey || !apiSecret) {
      return NextResponse.json({
        success: false,
        message: "Cloudinary environment variables are missing",
        config: {
          cloudName: !!cloudName,
          apiKey: !!apiKey,
          apiSecret: !!apiSecret
        }
      }, { status: 400 });
    }

    // Try to get Cloudinary instance
    const cloudinary = getCloudinary();
    
    // Test Cloudinary connection by getting API usage
    const result = await cloudinary.api.usage();
    
    return NextResponse.json({
      success: true,
      message: "Cloudinary is properly configured",
      config: {
        cloudName: cloudName,
        apiKey: apiKey.substring(0, 6) + "...", // Only show first 6 chars for security
        connectionTest: "successful"
      },
      usage: {
        credits: result.credits,
        used_credits: result.used_credits,
        limit: result.limit
      }
    });

  } catch (error) {
    console.error("Cloudinary test error:", error);
    return NextResponse.json({
      success: false,
      message: "Failed to connect to Cloudinary",
      error: error instanceof Error ? error.message : "Unknown error"
    }, { status: 500 });
  }
}