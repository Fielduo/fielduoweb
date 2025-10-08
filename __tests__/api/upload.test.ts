import { NextRequest } from 'next/server'
import { POST } from '@/app/api/upload/route'

// Mock the admin auth middleware
jest.mock('@/lib/admin-api', () => ({
  withAdminAuth: jest.fn((handler) => 
    async (request: NextRequest) => {
      return await handler(request, { email: 'admin@test.com', role: 'admin' })
    }
  )
}))

// Mock Cloudinary
jest.mock('@/lib/cloudinary', () => ({
  getCloudinary: jest.fn(() => ({
    uploader: {
      upload_stream: jest.fn((options, callback) => {
        // Simulate successful upload
        setTimeout(() => {
          callback(null, {
            secure_url: 'https://res.cloudinary.com/test/image/upload/test.jpg',
            public_id: 'test-image-123',
            width: 800,
            height: 600,
            format: 'jpg'
          })
        }, 10)
        return {
          end: jest.fn()
        }
      })
    }
  })),
  getUploadFolder: jest.fn(() => 'test-folder')
}))

describe('/api/upload', () => {
  beforeEach(() => {
    jest.clearAllMocks()
    // Set required environment variables
    process.env.CLOUDINARY_CLOUD_NAME = 'test-cloud'
    process.env.CLOUDINARY_API_KEY = 'test-key'
    process.env.CLOUDINARY_API_SECRET = 'test-secret'
  })

  it('should upload an image successfully', async () => {
    const formData = new FormData()
    const file = new File(['test image content'], 'test.jpg', { type: 'image/jpeg' })
    formData.append('file', file)

    const request = new NextRequest('http://localhost:3000/api/upload', {
      method: 'POST',
      body: formData
    })

    const response = await POST(request)
    const data = await response.json()

    expect(response.status).toBe(200)
    expect(data.success).toBe(true)
    expect(data.imageUrl).toBe('https://res.cloudinary.com/test/image/upload/test.jpg')
    expect(data.publicId).toBe('test-image-123')
    expect(data.width).toBe(800)
    expect(data.height).toBe(600)
    expect(data.format).toBe('jpg')
  })

  it('should return 400 when no file is uploaded', async () => {
    const formData = new FormData()
    // No file added

    const request = new NextRequest('http://localhost:3000/api/upload', {
      method: 'POST',
      body: formData
    })

    const response = await POST(request)
    const data = await response.json()

    expect(response.status).toBe(400)
    expect(data.success).toBe(false)
    expect(data.message).toBe('No file uploaded')
  })

  it('should return 400 for invalid file type', async () => {
    const formData = new FormData()
    const file = new File(['test content'], 'test.txt', { type: 'text/plain' })
    formData.append('file', file)

    const request = new NextRequest('http://localhost:3000/api/upload', {
      method: 'POST',
      body: formData
    })

    const response = await POST(request)
    const data = await response.json()

    expect(response.status).toBe(400)
    expect(data.success).toBe(false)
    expect(data.message).toBe('Invalid file type. Only JPEG, PNG, GIF, and WebP images are allowed.')
  })

  it('should return 400 for file too large', async () => {
    const formData = new FormData()
    // Create a large file (6MB - larger than 5MB limit)
    const largeContent = new Array(6 * 1024 * 1024).fill('a').join('')
    const file = new File([largeContent], 'large.jpg', { type: 'image/jpeg' })
    formData.append('file', file)

    const request = new NextRequest('http://localhost:3000/api/upload', {
      method: 'POST',
      body: formData
    })

    const response = await POST(request)
    const data = await response.json()

    expect(response.status).toBe(400)
    expect(data.success).toBe(false)
    expect(data.message).toBe('File too large. Maximum size is 5MB.')
  })

  it('should return 500 when Cloudinary is not configured', async () => {
    // Remove environment variables
    delete process.env.CLOUDINARY_CLOUD_NAME
    delete process.env.CLOUDINARY_API_KEY
    delete process.env.CLOUDINARY_API_SECRET

    const formData = new FormData()
    const file = new File(['test content'], 'test.jpg', { type: 'image/jpeg' })
    formData.append('file', file)

    const request = new NextRequest('http://localhost:3000/api/upload', {
      method: 'POST',
      body: formData
    })

    const response = await POST(request)
    const data = await response.json()

    expect(response.status).toBe(500)
    expect(data.success).toBe(false)
    expect(data.message).toBe('Cloudinary is not configured on the server')
  })
})