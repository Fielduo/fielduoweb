'use client';

import { useEffect, useState } from 'react';
import { FileText, Plus, Edit, Trash2, Calendar, Eye, Search } from 'lucide-react';

interface Blog {
  id: string;
  title: string;
  content: string;
  author: string;
  createdAt: string;
  updatedAt?: string;
  published: boolean;
  tags?: string[];
  imageUrl?: string;
  imageAlt?: string;
}

export default function AdminBlogs() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [editingBlog, setEditingBlog] = useState<Blog | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    author: '',
    published: false,
    tags: '',
    imageUrl: '',
    imageAlt: ''
  });
  const [isUploading, setIsUploading] = useState(false);
  const exec = (command: string, value?: string) => {
    if (typeof document !== 'undefined') {
      document.execCommand(command, false, value);
    }
  };

  const stripHtml = (html: string) => html.replace(/<[^>]*>/g, '');

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const response = await fetch('/api/blog');
      const data = await response.json();
      setBlogs(data.items || []);
    } catch (error) {
      console.error('Error fetching blogs:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const blogData = {
        ...formData,
        tags: formData.tags.split(',').map(tag => tag.trim()).filter(tag => tag),
        published: formData.published
      };

      const url = editingBlog ? `/api/blog/${editingBlog.id}` : '/api/blog';
      const method = editingBlog ? 'PUT' : 'POST';

      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(blogData),
      });

      if (response.ok) {
        fetchBlogs();
        setShowCreateForm(false);
        setEditingBlog(null);
        setFormData({ title: '', content: '', author: '', published: false, tags: '', imageUrl: '', imageAlt: '' });
      }
    } catch (error) {
      console.error('Error saving blog:', error);
    }
  };

  const handleEdit = (blog: Blog) => {
    setEditingBlog(blog);
    setFormData({
      title: blog.title,
      content: blog.content,
      author: blog.author,
      published: blog.published,
      tags: blog.tags?.join(', ') || '',
      imageUrl: blog.imageUrl || '',
      imageAlt: blog.imageAlt || ''
    });
    setShowCreateForm(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this blog post?')) return;

    try {
      const response = await fetch(`/api/blog/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        fetchBlogs();
      }
    } catch (error) {
      console.error('Error deleting blog:', error);
    }
  };

  const handleImageUpload = async (file: File) => {
    setIsUploading(true);
    try {
      const formData = new FormData();
      formData.append('file', file);

      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();
      
      if (result.success) {
        setFormData(prev => ({ ...prev, imageUrl: result.imageUrl }));
        return result.imageUrl;
      } else {
        alert(result.message || 'Failed to upload image');
        return null;
      }
    } catch (error) {
      console.error('Error uploading image:', error);
      alert('Failed to upload image');
      return null;
    } finally {
      setIsUploading(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleImageUpload(file);
    }
  };

  const filteredBlogs = blogs.filter(blog =>
    blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    blog.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Blog Management</h1>
          <p className="text-gray-600">Create and manage blog posts</p>
        </div>
        <button
          onClick={() => {
            setShowCreateForm(true);
            setEditingBlog(null);
            setFormData({ title: '', content: '', author: '', published: false, tags: '', imageUrl: '', imageAlt: '' });
          }}
          className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          <Plus className="h-4 w-4 mr-2" />
          New Blog Post
        </button>
      </div>

      {/* Search */}
      <div className="bg-white rounded-lg shadow p-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search blogs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Create/Edit Form */}
      {showCreateForm && (
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            {editingBlog ? 'Edit Blog Post' : 'Create New Blog Post'}
          </h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Title</label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Author</label>
                <input
                  type="text"
                  value={formData.author}
                  onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                  className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700">Content</label>
              <div className="mt-1 border border-gray-300 rounded-md">
                <div className="flex items-center gap-1 border-b border-gray-200 px-2 py-1 bg-gray-50">
                  <button type="button" onMouseDown={(e) => e.preventDefault()} onClick={() => exec('bold')} className="px-2 py-1 text-sm font-semibold rounded hover:bg-gray-100">B</button>
                  <button type="button" onMouseDown={(e) => e.preventDefault()} onClick={() => exec('italic')} className="px-2 py-1 text-sm italic rounded hover:bg-gray-100">I</button>
                  <button type="button" onMouseDown={(e) => e.preventDefault()} onClick={() => exec('underline')} className="px-2 py-1 text-sm underline rounded hover:bg-gray-100">U</button>
                  <span className="mx-1 h-4 w-px bg-gray-300" />
                  <button type="button" onMouseDown={(e) => e.preventDefault()} onClick={() => exec('insertUnorderedList')} className="px-2 py-1 text-sm rounded hover:bg-gray-100">• List</button>
                  <button type="button" onMouseDown={(e) => e.preventDefault()} onClick={() => exec('insertOrderedList')} className="px-2 py-1 text-sm rounded hover:bg-gray-100">1. List</button>
                  <span className="mx-1 h-4 w-px bg-gray-300" />
                  <button
                    type="button"
                    onMouseDown={(e) => e.preventDefault()}
                    onClick={() => { exec('removeFormat'); exec('formatBlock', 'p'); }}
                    className="px-2 py-1 text-sm rounded hover:bg-gray-100"
                    title="Clear formatting"
                  >
                    Normal
                  </button>
                </div>
                <div
                  role="textbox"
                  aria-label="Rich text editor"
                  contentEditable
                  suppressContentEditableWarning
                  className="min-h-40 max-h-[50vh] overflow-auto px-3 py-2 focus:outline-none prose prose-sm max-w-none"
                  onInput={(e) => setFormData({ ...formData, content: (e.currentTarget as HTMLDivElement).innerHTML })}
                  dangerouslySetInnerHTML={{ __html: formData.content }}
                />
              </div>
              <p className="mt-1 text-xs text-gray-500">You can format text with bold, italic, underline, and lists.</p>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700">Tags (comma-separated)</label>
              <input
                type="text"
                value={formData.tags}
                onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
                placeholder="technology, business, news"
                className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Image Upload Section */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Blog Image (Optional)</label>
                <div className="mt-1">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-medium file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                    disabled={isUploading}
                  />
                  {isUploading && (
                    <p className="mt-2 text-sm text-blue-600">Uploading image...</p>
                  )}
                </div>
              </div>

              {formData.imageUrl && (
                <div>
                  <label className="block text-sm font-medium text-gray-700">Image Preview</label>
                  <div className="mt-1">
                    <img
                      src={formData.imageUrl}
                      alt="Blog preview"
                      className="h-32 w-32 object-cover rounded-md border border-gray-300"
                    />
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, imageUrl: '', imageAlt: '' })}
                      className="mt-2 text-sm text-red-600 hover:text-red-800"
                    >
                      Remove Image
                    </button>
                  </div>
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-700">Image Alt Text (Optional)</label>
                <input
                  type="text"
                  value={formData.imageAlt}
                  onChange={(e) => setFormData({ ...formData, imageAlt: e.target.value })}
                  placeholder="Describe the image for accessibility"
                  className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            
            <div className="flex items-center">
              <input
                type="checkbox"
                id="published"
                checked={formData.published}
                onChange={(e) => setFormData({ ...formData, published: e.target.checked })}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="published" className="ml-2 block text-sm text-gray-900">
                Published
              </label>
            </div>
            
            <div className="flex justify-end space-x-3">
              <button
                type="button"
                onClick={() => {
                  setShowCreateForm(false);
                  setEditingBlog(null);
                  setFormData({ title: '', content: '', author: '', published: false, tags: '', imageUrl: '', imageAlt: '' });
                }}
                className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                {editingBlog ? 'Update' : 'Create'} Blog Post
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Blogs List */}
      <div className="bg-white rounded-lg shadow">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-medium text-gray-900">
            Blog Posts ({filteredBlogs.length})
          </h3>
        </div>
        
        <div className="divide-y divide-gray-200">
          {filteredBlogs.map((blog) => (
              <div key={blog.id} className="p-6 hover:bg-gray-50">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-start space-x-4">
                    {blog.imageUrl && (
                      <img
                        src={blog.imageUrl}
                        alt={blog.imageAlt || blog.title}
                        className="h-16 w-16 object-cover rounded-md border border-gray-300 flex-shrink-0"
                      />
                    )}
                    <div className="flex-1">
                      <div className="flex items-center space-x-2">
                        <h4 className="text-lg font-medium text-gray-900">{blog.title}</h4>
                        {blog.published ? (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            Published
                          </span>
                        ) : (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                            Draft
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-gray-600 mt-1">By {blog.author}</p>
                      <p className="text-sm text-gray-500 mt-2 line-clamp-2">{stripHtml(blog.content)}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 mt-3">
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="h-4 w-4 mr-1" />
                      {new Date(blog.createdAt).toLocaleDateString()}
                    </div>
                    {blog.tags && blog.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1">
                        {blog.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-gray-100 text-gray-800"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="flex items-center space-x-2 ml-4">
                  <button
                    onClick={() => handleEdit(blog)}
                    className="p-2 text-blue-600 hover:text-blue-800 hover:bg-blue-50 rounded-md"
                  >
                    <Edit className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => handleDelete(blog.id)}
                    className="p-2 text-red-600 hover:text-red-800 hover:bg-red-50 rounded-md"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredBlogs.length === 0 && (
          <div className="p-6 text-center text-gray-500">
            {searchTerm ? 'No blogs found matching your search.' : 'No blog posts yet.'}
          </div>
        )}
      </div>
    </div>
  );
}
