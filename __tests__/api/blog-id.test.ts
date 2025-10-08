import { NextRequest } from 'next/server'
import { GET, PUT, DELETE } from '@/app/api/blog/[id]/route'

// Mock the admin auth middleware
jest.mock('@/lib/admin-api', () => ({
  withAdminAuth: jest.fn((handler) => 
    async (request: NextRequest) => {
      // Mock user object for admin auth
      return await handler(request, { email: 'admin@test.com', role: 'admin' })
    }
  )
}))

// Mock the MongoDB client
jest.mock('@/lib/mongodb', () => ({
  getMongoClient: jest.fn()
}))

describe('/api/blog/[id]', () => {
  beforeEach(() => {
    jest.clearAllMocks()
    process.env.MONGODB_URI = 'mongodb://test'
  })

  describe('GET /api/blog/[id]', () => {
    it('should return a blog by ID', async () => {
      const mockBlog = {
        id: 'test-123',
        title: 'Test Blog',
        content: 'Test content',
        author: 'Test Author',
        published: true,
        createdAt: '2025-01-01T00:00:00.000Z'
      }

      require('@/lib/mongodb').getMongoClient.mockResolvedValue({
        db: jest.fn(() => ({
          collection: jest.fn(() => ({
            findOne: jest.fn()
              .mockResolvedValueOnce(mockBlog) // First call finds by ID
              .mockResolvedValueOnce(null) // Second call by slug returns null
          }))
        }))
      })

      const request = new NextRequest('http://localhost:3000/api/blog/test-123')
      const response = await GET(request)
      const data = await response.json()

      expect(response.status).toBe(200)
      expect(data.blog).toEqual(mockBlog)
    })

    it('should return 404 when blog not found', async () => {
      require('@/lib/mongodb').getMongoClient.mockResolvedValue({
        db: jest.fn(() => ({
          collection: jest.fn(() => ({
            findOne: jest.fn().mockResolvedValue(null)
          }))
        }))
      })

      const request = new NextRequest('http://localhost:3000/api/blog/nonexistent')
      const response = await GET(request)
      const data = await response.json()

      expect(response.status).toBe(404)
      expect(data.message).toBe('Blog not found')
    })
  })

  describe('PUT /api/blog/[id]', () => {
    it('should update a blog post', async () => {
      const updateData = {
        title: 'Updated Blog',
        content: '<p>Updated content</p>',
        author: 'Updated Author',
        published: false,
        tags: ['updated']
      }

      require('@/lib/mongodb').getMongoClient.mockResolvedValue({
        db: jest.fn(() => ({
          collection: jest.fn(() => ({
            updateOne: jest.fn().mockResolvedValue({ matchedCount: 1 })
          }))
        }))
      })

      const request = new NextRequest('http://localhost:3000/api/blog/test-123', {
        method: 'PUT',
        body: JSON.stringify(updateData),
        headers: {
          'Content-Type': 'application/json'
        }
      })

      const response = await PUT(request)
      const data = await response.json()

      expect(response.status).toBe(200)
      expect(data.ok).toBe(true)
      expect(data.message).toBe('Blog updated successfully')
    })

    it('should return 400 for missing required fields', async () => {
      const incompleteData = {
        title: 'Updated Blog'
        // Missing content
      }

      const request = new NextRequest('http://localhost:3000/api/blog/test-123', {
        method: 'PUT',
        body: JSON.stringify(incompleteData),
        headers: {
          'Content-Type': 'application/json'
        }
      })

      const response = await PUT(request)
      const data = await response.json()

      expect(response.status).toBe(400)
      expect(data.message).toBe('Title and content required')
    })
  })

  describe('DELETE /api/blog/[id]', () => {
    it('should delete a blog post', async () => {
      require('@/lib/mongodb').getMongoClient.mockResolvedValue({
        db: jest.fn(() => ({
          collection: jest.fn(() => ({
            deleteOne: jest.fn().mockResolvedValue({ deletedCount: 1 })
          }))
        }))
      })

      const request = new NextRequest('http://localhost:3000/api/blog/test-123')
      const response = await DELETE(request)
      const data = await response.json()

      expect(response.status).toBe(200)
      expect(data.ok).toBe(true)
      expect(data.message).toBe('Blog deleted successfully')
    })

    it('should return 404 when blog to delete not found', async () => {
      require('@/lib/mongodb').getMongoClient.mockResolvedValue({
        db: jest.fn(() => ({
          collection: jest.fn(() => ({
            deleteOne: jest.fn().mockResolvedValue({ deletedCount: 0 })
          }))
        }))
      })

      const request = new NextRequest('http://localhost:3000/api/blog/nonexistent')
      const response = await DELETE(request)
      const data = await response.json()

      expect(response.status).toBe(404)
      expect(data.message).toBe('Blog not found')
    })
  })
})