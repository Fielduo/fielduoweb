import { NextRequest, NextResponse } from 'next/server'
import { GET, POST } from '@/app/api/blog/route'

// Mock the MongoDB client
jest.mock('@/lib/mongodb', () => ({
  getMongoClient: jest.fn(() =>
    Promise.resolve({
      db: jest.fn(() => ({
        collection: jest.fn(() => ({
          find: jest.fn(() => ({
            projection: jest.fn(() => ({
              sort: jest.fn(() => ({
                toArray: jest.fn(() => Promise.resolve([
                  {
                    id: 'test-1',
                    title: 'Test Blog',
                    content: 'Test content',
                    author: 'Test Author',
                    published: true,
                    tags: ['test'],
                    createdAt: '2025-01-01T00:00:00.000Z'
                  }
                ]))
              }))
            }))
          })),
          createIndex: jest.fn(() => Promise.resolve()),
          insertOne: jest.fn(() => Promise.resolve())
        }))
      }))
    })
  )
}))

describe('/api/blog', () => {
  beforeEach(() => {
    jest.clearAllMocks()
    // Reset environment variables
    process.env.MONGODB_URI = 'mongodb://test'
  })

  describe('GET /api/blog', () => {
    it('should return blogs from MongoDB', async () => {
      const response = await GET()
      const data = await response.json()

      expect(response.status).toBe(200)
      expect(data.items).toHaveLength(1)
      expect(data.items[0]).toMatchObject({
        id: 'test-1',
        title: 'Test Blog',
        content: 'Test content',
        author: 'Test Author',
        published: true
      })
    })

    it('should fallback to memory when MongoDB is not available', async () => {
      delete process.env.MONGODB_URI

      const response = await GET()
      const data = await response.json()

      expect(response.status).toBe(200)
      expect(data.items).toEqual([])
    })
  })

  describe('POST /api/blog', () => {
    it('should create a new blog post', async () => {
      const blogData = {
        title: 'New Test Blog',
        content: '<p>This is test content</p>',
        author: 'Test Author',
        published: true,
        tags: ['test', 'new'],
        imageUrl: 'https://example.com/image.jpg',
        imageAlt: 'Test image'
      }

      const request = new NextRequest('http://localhost:3000/api/blog', {
        method: 'POST',
        body: JSON.stringify(blogData),
        headers: {
          'Content-Type': 'application/json'
        }
      })

      const response = await POST(request)
      const data = await response.json()

      expect(response.status).toBe(201)
      expect(data.ok).toBe(true)
      expect(data.id).toBe('test-uuid-123')
    })

    it('should return 400 for missing required fields', async () => {
      const incompleteData = {
        title: 'Incomplete Blog'
        // Missing content
      }

      const request = new NextRequest('http://localhost:3000/api/blog', {
        method: 'POST',
        body: JSON.stringify(incompleteData),
        headers: {
          'Content-Type': 'application/json'
        }
      })

      const response = await POST(request)
      const data = await response.json()

      expect(response.status).toBe(400)
      expect(data.message).toBe('Title and content required')
    })

    it('should return 400 for invalid JSON', async () => {
      const request = new NextRequest('http://localhost:3000/api/blog', {
        method: 'POST',
        body: 'invalid json',
        headers: {
          'Content-Type': 'application/json'
        }
      })

      const response = await POST(request)
      const data = await response.json()

      expect(response.status).toBe(400)
      expect(data.message).toBe('Invalid JSON')
    })

    it('should generate slug from title', async () => {
      const blogData = {
        title: 'This is a Test Title with Special Characters!@#',
        content: '<p>Test content</p>',
        author: 'Test Author'
      }

      const request = new NextRequest('http://localhost:3000/api/blog', {
        method: 'POST',
        body: JSON.stringify(blogData),
        headers: {
          'Content-Type': 'application/json'
        }
      })

      // Mock the insertOne to capture the document being inserted
      const mockInsertOne = jest.fn()
      require('@/lib/mongodb').getMongoClient.mockResolvedValue({
        db: jest.fn(() => ({
          collection: jest.fn(() => ({
            createIndex: jest.fn(),
            insertOne: mockInsertOne
          }))
        }))
      })

      await POST(request)

      expect(mockInsertOne).toHaveBeenCalledWith(
        expect.objectContaining({
          slug: 'this-is-a-test-title-with-special-characters'
        })
      )
    })
  })
})