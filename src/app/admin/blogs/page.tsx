'use client';

import { useEffect, useRef, useState } from 'react';
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
  const [isUploadingInlineImage, setIsUploadingInlineImage] = useState(false);
  const [textSizeMultiplier, setTextSizeMultiplier] = useState(1);
  const [selectedTextSize, setSelectedTextSize] = useState('16px');
  const selectionRef = useRef<Range | null>(null);

  const exec = (command: string, value?: string) => {
    if (typeof document !== 'undefined') {
      try {
        // Ensure the content editor is focused
        const contentEditor = document.querySelector('[role="textbox"]') as HTMLDivElement;
        if (contentEditor) {
          contentEditor.focus();
        }
        
        // Execute the command
        const success = document.execCommand(command, false, value);
        console.log(`📝 Executed ${command}${value ? ` with value: ${value}` : ''} - Success: ${success}`);
        
        // Update form data after command execution
        if (contentEditor) {
          setTimeout(() => {
            setFormData(prev => ({ ...prev, content: contentEditor.innerHTML }));
          }, 50);
        }
        
        return success;
      } catch (error) {
        console.error(`❌ Error executing ${command}:`, error);
        return false;
      }
    }
    return false;
  };

  // Enhanced heading function for better compatibility
  const applyHeading = (tagName: string) => {
    const contentEditor = document.querySelector('[role="textbox"]') as HTMLDivElement;
    if (!contentEditor) return;

    contentEditor.focus();
    
    // Try formatBlock first
    let success = exec('formatBlock', `<${tagName}>`);
    
    // Fallback method if formatBlock doesn't work
    if (!success) {
      const selection = window.getSelection();
      if (selection && selection.rangeCount > 0) {
        const range = selection.getRangeAt(0);
        const selectedText = range.toString();
        
        if (selectedText) {
          // Wrap selected text in heading
          const headingElement = document.createElement(tagName);
          headingElement.textContent = selectedText;
          
          range.deleteContents();
          range.insertNode(headingElement);
          
          // Update selection
          range.selectNodeContents(headingElement);
          selection.removeAllRanges();
          selection.addRange(range);
          
          setFormData(prev => ({ ...prev, content: contentEditor.innerHTML }));
          console.log(`✅ Applied ${tagName} using fallback method`);
        } else {
          // No text selected, create new heading
          const headingElement = document.createElement(tagName);
          headingElement.textContent = `${tagName.toUpperCase()} Heading`;
          
          range.insertNode(headingElement);
          range.selectNodeContents(headingElement);
          selection.removeAllRanges();
          selection.addRange(range);
          
          setFormData(prev => ({ ...prev, content: contentEditor.innerHTML }));
          console.log(`✅ Created new ${tagName} heading`);
        }
      }
    }
  };

  // Enhanced text alignment function
  const applyTextAlignment = (alignment: 'left' | 'center' | 'right') => {
    const contentEditor = document.querySelector('[role="textbox"]') as HTMLDivElement;
    if (!contentEditor) return;

    contentEditor.focus();
    
    const selection = window.getSelection();
    if (selection && selection.rangeCount > 0) {
      const range = selection.getRangeAt(0);
      
      // Try execCommand first
      let success = false;
      switch (alignment) {
        case 'left':
          success = exec('justifyLeft');
          break;
        case 'center':
          success = exec('justifyCenter');
          break;
        case 'right':
          success = exec('justifyRight');
          break;
      }
      
      // Fallback method if execCommand doesn't work
      if (!success) {
        try {
          const selectedText = range.toString();
          
          if (selectedText) {
            // Wrap selected text in a div with alignment
            const alignDiv = document.createElement('div');
            alignDiv.style.textAlign = alignment;
            alignDiv.style.margin = '0.5rem 0';
            
            // Extract the selected content
            const selectedContent = range.extractContents();
            alignDiv.appendChild(selectedContent);
            
            // Insert the aligned div
            range.insertNode(alignDiv);
            
            // Update selection to show the result
            range.selectNodeContents(alignDiv);
            selection.removeAllRanges();
            selection.addRange(range);
            
            setFormData(prev => ({ ...prev, content: contentEditor.innerHTML }));
            console.log(`✅ Applied ${alignment} alignment using fallback method`);
          } else {
            // No text selected, apply to current block element
            const currentNode = range.startContainer;
            let blockElement = currentNode.nodeType === Node.TEXT_NODE ? 
              currentNode.parentElement : currentNode as Element;
            
            // Find the closest block element
            while (blockElement && !['DIV', 'P', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'LI'].includes(blockElement.tagName)) {
              blockElement = blockElement.parentElement;
            }
            
            if (blockElement && blockElement instanceof HTMLElement) {
              blockElement.style.textAlign = alignment;
              setFormData(prev => ({ ...prev, content: contentEditor.innerHTML }));
              console.log(`✅ Applied ${alignment} alignment to block element: ${blockElement.tagName}`);
            }
          }
        } catch (error) {
          console.error(`Failed to apply ${alignment} alignment:`, error);
        }
      }
    }
  };

  const testFormattingFunctions = () => {
    console.log('🧪 Testing all formatting functions...');
    
    const tests = [
      { name: 'Bold', fn: () => exec('bold') },
      { name: 'Italic', fn: () => exec('italic') },
      { name: 'Underline', fn: () => exec('underline') },
      { name: 'Left Align', fn: () => { applyTextAlignment('left'); return true; } },
      { name: 'Center Align', fn: () => { applyTextAlignment('center'); return true; } },
      { name: 'Right Align', fn: () => { applyTextAlignment('right'); return true; } },
      { name: 'Bullet List', fn: () => exec('insertUnorderedList') },
      { name: 'Numbered List', fn: () => exec('insertOrderedList') },
      { name: 'H1 Heading', fn: () => { applyHeading('h1'); return true; } },
      { name: 'H2 Heading', fn: () => { applyHeading('h2'); return true; } },
      { name: 'H3 Heading', fn: () => { applyHeading('h3'); return true; } },
    ];

    tests.forEach(test => {
      console.log(`Testing ${test.name}...`);
      const result = test.fn();
      console.log(`${test.name}: ${result === false ? '❌ Failed' : '✅ Working'}`);
    });
    
    console.log('🧪 Formatting test complete');
  };

  // Helper function to get current (or last saved) cursor position in contentEditable
  const getCurrentCursorPosition = () => {
    if (selectionRef.current) return selectionRef.current;
    const selection = window.getSelection();
    if (selection && selection.rangeCount > 0) {
      return selection.getRangeAt(0);
    }
    return null;
  };

  // Helper function to insert content at cursor position
  const insertAtCursor = (element: HTMLElement) => {
    const range = getCurrentCursorPosition();
    const contentEditor = document.querySelector('[role="textbox"]') as HTMLDivElement;
    
    if (range && contentEditor) {
      // Insert at cursor position
      range.deleteContents();
      range.insertNode(element);
      
      // Move cursor after the inserted element
      range.setStartAfter(element);
      range.setEndAfter(element);
      
      const selection = window.getSelection();
      if (selection) {
        selection.removeAllRanges();
        selection.addRange(range);
      }
      
      return true;
    } else if (contentEditor) {
      // Fallback: append to end
      contentEditor.appendChild(element);
      
      // Focus and move cursor to end
      contentEditor.focus();
      const newRange = document.createRange();
      newRange.setStartAfter(element);
      newRange.setEndAfter(element);
      
      const selection = window.getSelection();
      if (selection) {
        selection.removeAllRanges();
        selection.addRange(newRange);
      }
      
      return true;
    }
    
    return false;
  };

  const insertInlineImage = async (file: File, alignment: 'left' | 'center' | 'right' = 'center', size: 'small' | 'medium' | 'large' | 'full' = 'medium') => {
    setIsUploadingInlineImage(true);
    try {
      console.log('🖼️ Starting image upload...', {
        fileName: file.name,
        fileSize: file.size,
        fileType: file.type,
        alignment,
        size
      });
      
      // Validate file before upload
      const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp'];
      if (!allowedTypes.includes(file.type)) {
        throw new Error(`Invalid file type: ${file.type}. Please use JPEG, PNG, GIF, or WebP images.`);
      }
      
      const maxSize = 5 * 1024 * 1024; // 5MB
      if (file.size > maxSize) {
        throw new Error(`File too large: ${(file.size / 1024 / 1024).toFixed(2)}MB. Maximum size is 5MB.`);
      }

      const uploadFormData = new FormData();
      uploadFormData.append('file', file);

      console.log('📤 Sending upload request to /api/upload...');
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: uploadFormData,
      });

      console.log('📥 Upload response received:', {
        status: response.status,
        statusText: response.statusText,
        ok: response.ok
      });
      
      const result = await response.json();
      console.log('📄 Upload result:', result);
      
      if (!response.ok) {
        console.error('❌ Upload failed:', { status: response.status, result });
        throw new Error(result.message || `Upload failed with status ${response.status}`);
      }
      
      if (result.success && result.imageUrl) {
        // Create size styles (always centered)
        const sizeStyles: Record<string, string> = {
          small: 'max-width: 300px; width: 30%;',
          medium: 'max-width: 500px; width: 50%;',
          large: 'max-width: 700px; width: 70%;',
          full: 'max-width: 100%; width: 100%;'
        };

        // Centered image wrapper HTML to insert at caret
        const imageHtml = `
          <div class="image-container" style="text-align: center; margin: 20px 0; clear: both;">
            <img src="${result.imageUrl}" 
                 alt="${result.publicId || file.name}" 
                 style="${sizeStyles[size]} height: auto; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); margin: 0 auto; display: block;"
                 class="blog-image"
                 data-size="${size}"
                 data-alignment="center"
                 loading="lazy" />
          </div><div><br></div>`;
        
        console.log('🎨 Inserting centered image HTML...');
        
        // Get the current editor
        const contentEditor = document.querySelector('[role="textbox"]') as HTMLDivElement;
        if (contentEditor) {
          // Build a DOM node from the HTML and insert at cursor
          const container = document.createElement('div');
          container.innerHTML = imageHtml;
          const wrapper = container.firstElementChild as HTMLElement | null;
          if (wrapper) {
            insertAtCursor(wrapper);
          }
          
          // Ensure the editor is focused and update form data
          contentEditor.focus();
          setFormData(prev => ({ ...prev, content: contentEditor.innerHTML }));
          console.log('📍 Image inserted at cursor position');
        }
        
        alert(`✅ Image "${file.name}" uploaded successfully!`);
        return result.imageUrl;
      } else {
        console.error('❌ Upload result indicates failure:', result);
        throw new Error(result.message || 'Upload succeeded but no image URL returned');
      }
    } catch (error) {
      console.error('💥 Error uploading inline image:', error);
      const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
      alert(`❌ Failed to upload image: ${errorMessage}\n\nPlease check:\n1. File type (JPEG, PNG, GIF, WebP)\n2. File size (max 5MB)\n3. Internet connection\n4. Cloudinary configuration`);
      return null;
    } finally {
      setIsUploadingInlineImage(false);
    }
  };

  const handleInlineImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // For now, use default settings to test upload
      insertInlineImage(file, 'center', 'medium');
    }
    // Reset the input so the same file can be uploaded again
    e.target.value = '';
  };

  const handleInlineImageUploadWithOptions = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Show image options dialog
      showImageOptionsDialog(file);
    }
    // Reset the input so the same file can be uploaded again
    e.target.value = '';
  };

  const showImageOptionsDialog = (file: File) => {
    const dialog = document.createElement('div');
    dialog.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50';
    dialog.innerHTML = `
      <div class="bg-white rounded-lg p-6 max-w-md w-full mx-4">
        <h3 class="text-lg font-semibold mb-4 text-gray-900">Image Options</h3>
        
        <div class="mb-4">
          <label class="block text-sm font-medium text-gray-700 mb-2">Alignment</label>
          <div class="flex gap-2">
            <button type="button" class="alignment-btn px-3 py-1 border rounded text-sm" data-alignment="left">Left</button>
            <button type="button" class="alignment-btn px-3 py-1 border rounded text-sm bg-blue-100" data-alignment="center">Center</button>
            <button type="button" class="alignment-btn px-3 py-1 border rounded text-sm" data-alignment="right">Right</button>
          </div>
        </div>
        
        <div class="mb-4">
          <label class="block text-sm font-medium text-gray-700 mb-2">Size</label>
          <div class="flex gap-2">
            <button type="button" class="size-btn px-3 py-1 border rounded text-sm" data-size="small">Small</button>
            <button type="button" class="size-btn px-3 py-1 border rounded text-sm bg-blue-100" data-size="medium">Medium</button>
            <button type="button" class="size-btn px-3 py-1 border rounded text-sm" data-size="large">Large</button>
            <button type="button" class="size-btn px-3 py-1 border rounded text-sm" data-size="full">Full</button>
          </div>
        </div>
        
        <div class="flex justify-end gap-2">
          <button type="button" class="cancel-btn px-4 py-2 border rounded text-gray-600">Cancel</button>
          <button type="button" class="insert-btn px-4 py-2 bg-blue-600 text-white rounded">Insert Image</button>
        </div>
      </div>
    `;

    document.body.appendChild(dialog);

    let selectedAlignment: 'left' | 'center' | 'right' = 'center';
    let selectedSize: 'small' | 'medium' | 'large' | 'full' = 'medium';

    // Handle alignment selection
    dialog.querySelectorAll('.alignment-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        dialog.querySelectorAll('.alignment-btn').forEach(b => b.classList.remove('bg-blue-100'));
        btn.classList.add('bg-blue-100');
        const alignment = btn.getAttribute('data-alignment');
        if (alignment === 'left' || alignment === 'center' || alignment === 'right') {
          selectedAlignment = alignment;
        }
      });
    });

    // Handle size selection
    dialog.querySelectorAll('.size-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        dialog.querySelectorAll('.size-btn').forEach(b => b.classList.remove('bg-blue-100'));
        btn.classList.add('bg-blue-100');
        const size = btn.getAttribute('data-size');
        if (size === 'small' || size === 'medium' || size === 'large' || size === 'full') {
          selectedSize = size;
        }
      });
    });

    // Handle insert
    dialog.querySelector('.insert-btn')?.addEventListener('click', () => {
      document.body.removeChild(dialog);
      insertInlineImage(file, selectedAlignment, selectedSize);
    });

    // Handle cancel
    dialog.querySelector('.cancel-btn')?.addEventListener('click', () => {
      document.body.removeChild(dialog);
    });
  };

  const adjustTextSize = (factor: number) => {
    setTextSizeMultiplier(factor);
    const contentEditor = document.querySelector('[role="textbox"]') as HTMLDivElement;
    if (contentEditor) {
      contentEditor.style.fontSize = `${factor}rem`;
      console.log('Text size adjusted to:', factor, 'rem');
    }
  };

  // Apply text size to selected text
  const applyTextSize = (size: string) => {
    const contentEditor = document.querySelector('[role="textbox"]') as HTMLDivElement;
    if (!contentEditor) return;

    contentEditor.focus();
    
    const selection = window.getSelection();
    if (selection && selection.rangeCount > 0) {
      const range = selection.getRangeAt(0);
      const selectedText = range.toString();
      
      if (selectedText) {
        // Wrap selected text in span with font size
        const span = document.createElement('span');
        span.style.fontSize = size;
        span.textContent = selectedText;
        
        range.deleteContents();
        range.insertNode(span);
        
        // Update selection
        range.selectNodeContents(span);
        selection.removeAllRanges();
        selection.addRange(range);
        
        setFormData(prev => ({ ...prev, content: contentEditor.innerHTML }));
        console.log(`✅ Applied font size ${size} to selected text`);
      } else {
        // No text selected, apply to current position
        const span = document.createElement('span');
        span.style.fontSize = size;
        span.textContent = 'Text';
        
        range.insertNode(span);
        range.selectNodeContents(span);
        selection.removeAllRanges();
        selection.addRange(range);
        
        setFormData(prev => ({ ...prev, content: contentEditor.innerHTML }));
        console.log(`✅ Applied font size ${size} at cursor position`);
      }
    }
  };

  // Removed draggable image behavior per new requirements

  const stripHtml = (html: string) => html.replace(/<[^>]*>/g, '');

  useEffect(() => {
    fetchBlogs();
    
    // Ensure images are centered when content is loaded
    const centerImages = () => {
      const contentEditor = document.querySelector('[role="textbox"]') as HTMLDivElement;
      if (contentEditor) {
        const images = contentEditor.querySelectorAll('img');
        images.forEach(img => {
          img.style.display = 'block';
          img.style.margin = '20px auto';
          img.style.maxWidth = '100%';
          img.style.height = 'auto';
          
          const container = img.parentElement;
          if (container) {
            container.style.textAlign = 'center';
            container.style.margin = '20px 0';
            container.style.clear = 'both';
          }
        });
        // No drag behavior
      }
    };

    // Center images after a short delay to ensure DOM is ready
    setTimeout(centerImages, 500);
  }, []);

  // Effect to center images when form data changes
  useEffect(() => {
    if (formData.content) {
      const centerImages = () => {
        const contentEditor = document.querySelector('[role="textbox"]') as HTMLDivElement;
        if (contentEditor) {
          const images = contentEditor.querySelectorAll('img');
          images.forEach(img => {
            img.style.display = 'block';
            img.style.margin = '20px auto';
            img.style.maxWidth = '100%';
            img.style.height = 'auto';
            
            const container = img.parentElement;
            if (container) {
              container.style.textAlign = 'center';
              container.style.margin = '20px 0';
              container.style.clear = 'both';
            }
          });
          // No drag behavior
        }
      };

      setTimeout(centerImages, 100);
    }
  }, [formData.content]);

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
        console.error('Upload failed:', result);
        alert(result.message || 'Failed to upload image. Please check Cloudinary configuration.');
        return null;
      }
    } catch (error) {
      console.error('Error uploading image:', error);
      alert('Failed to upload image. Please check your network connection and try again.');
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
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium text-gray-900">
              {editingBlog ? 'Edit Blog Post' : 'Create New Blog Post'}
            </h3>
            {/* Debug Button */}
            <button
              type="button"
              onClick={async () => {
                try {
                  console.log('🧪 Testing Cloudinary configuration...');
                  const response = await fetch('/api/test-cloudinary');
                  const result = await response.json();
                  
                  if (result.success) {
                    console.log('✅ Cloudinary test successful:', result);
                    alert(`✅ Cloudinary Test Successful!\n\nCloud Name: ${result.config.cloudName}\nAPI Key: ${result.config.apiKey}\nConnection: ${result.config.connectionTest}\n\nUsage: ${result.usage.used_credits}/${result.usage.limit} credits used`);
                  } else {
                    console.error('❌ Cloudinary test failed:', result);
                    alert(`❌ Cloudinary Test Failed!\n\nError: ${result.message}\n\nConfiguration Status:\n- Cloud Name: ${result.config?.cloudName ? '✅' : '❌'}\n- API Key: ${result.config?.apiKey ? '✅' : '❌'}\n- API Secret: ${result.config?.apiSecret ? '✅' : '❌'}`);
                  }
                } catch (error) {
                  console.error('💥 Cloudinary test error:', error);
                  alert(`💥 Cloudinary Test Error!\n\n${error instanceof Error ? error.message : 'Unknown error'}\n\nPlease check:\n1. Server is running\n2. Environment variables are set\n3. Network connection`);
                }
              }}
              className="px-3 py-1 text-xs bg-blue-50 text-blue-600 rounded hover:bg-blue-100 border border-blue-200"
            >
              🧪 Test Cloudinary
            </button>
          </div>
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
              
              {/* Simple Toolbar */}
              <div className="mt-1 border border-gray-300 rounded-md">
                <div className="border-b border-gray-200 bg-gray-50">
                  <div className="flex items-center gap-2 px-3 py-2 flex-wrap">
                    {/* Text Formatting */}
                    <button type="button" onMouseDown={(e) => e.preventDefault()} onClick={() => exec('bold')} className="px-2 py-1 text-sm font-bold rounded hover:bg-gray-100" title="Bold">
                      B
                    </button>
                    <button type="button" onMouseDown={(e) => e.preventDefault()} onClick={() => exec('italic')} className="px-2 py-1 text-sm italic rounded hover:bg-gray-100" title="Italic">
                      I
                    </button>
                    <button type="button" onMouseDown={(e) => e.preventDefault()} onClick={() => exec('underline')} className="px-2 py-1 text-sm underline rounded hover:bg-gray-100" title="Underline">
                      U
                    </button>
                    
                    <div className="w-px h-6 bg-gray-300 mx-1"></div>
                    
                    {/* Heading Dropdown */}
                    <select 
                      onChange={(e) => {
                        if (e.target.value) {
                          const tagName = e.target.value.replace('<', '').replace('>', '');
                          if (tagName === 'p') {
                            exec('formatBlock', '<p>');
                          } else {
                            applyHeading(tagName);
                          }
                          e.target.value = ''; // Reset selection
                        }
                      }}
                      className="px-2 py-1 text-sm border rounded hover:bg-gray-50"
                      title="Text Format"
                      defaultValue=""
                    >
                      <option value="" disabled>Format</option>
                      <option value="<p>">Normal Text</option>
                      <option value="<h1>">Heading 1 (Main Title)</option>
                      <option value="<h2>">Heading 2 (Section)</option>
                      <option value="<h3>">Heading 3 (Subsection)</option>
                      <option value="<h4>">Heading 4</option>
                      <option value="<h5>">Heading 5</option>
                      <option value="<h6>">Heading 6</option>
                    </select>
                    
                    {/* Quick Heading Buttons */}
                    <button type="button" onMouseDown={(e) => e.preventDefault()} onClick={() => applyHeading('h1')} className="px-2 py-1 text-sm font-bold rounded hover:bg-gray-100" title="Heading 1 (Main Title)">
                      H1
                    </button>
                    <button type="button" onMouseDown={(e) => e.preventDefault()} onClick={() => applyHeading('h2')} className="px-2 py-1 text-sm font-semibold rounded hover:bg-gray-100" title="Heading 2 (Section Title)">
                      H2
                    </button>
                    <button type="button" onMouseDown={(e) => e.preventDefault()} onClick={() => applyHeading('h3')} className="px-2 py-1 text-sm font-medium rounded hover:bg-gray-100" title="Heading 3 (Subsection)">
                      H3
                    </button>
                    <button type="button" onMouseDown={(e) => e.preventDefault()} onClick={() => exec('formatBlock', '<p>')} className="px-2 py-1 text-sm rounded hover:bg-gray-100" title="Normal Paragraph">
                      P
                    </button>
                    
                    <div className="w-px h-6 bg-gray-300 mx-1"></div>
                    
                    {/* Text Alignment */}
                    <button type="button" onMouseDown={(e) => e.preventDefault()} onClick={() => applyTextAlignment('left')} className="px-2 py-1 text-sm rounded hover:bg-gray-100" title="Align Left">
                      ⬅️
                    </button>
                    <button type="button" onMouseDown={(e) => e.preventDefault()} onClick={() => applyTextAlignment('center')} className="px-2 py-1 text-sm rounded hover:bg-gray-100" title="Align Center">
                      ↔️
                    </button>
                    <button type="button" onMouseDown={(e) => e.preventDefault()} onClick={() => applyTextAlignment('right')} className="px-2 py-1 text-sm rounded hover:bg-gray-100" title="Align Right">
                      ➡️
                    </button>
                    
                    <div className="w-px h-6 bg-gray-300 mx-1"></div>
                    
                    {/* Text Color */}
                    <input 
                      type="color" 
                      onChange={(e) => {
                        const success = exec('foreColor', e.target.value);
                        if (!success) {
                          // Fallback method for color
                          const selection = window.getSelection();
                          if (selection && selection.rangeCount > 0) {
                            const range = selection.getRangeAt(0);
                            const span = document.createElement('span');
                            span.style.color = e.target.value;
                            try {
                              range.surroundContents(span);
                              console.log(`✅ Applied text color ${e.target.value} using fallback`);
                            } catch (err) {
                              console.log('Color application failed:', err);
                            }
                          }
                        }
                      }}
                      className="w-8 h-6 border border-gray-300 rounded cursor-pointer"
                      title="Text Color"
                      defaultValue="#000000"
                    />
                    
                    {/* Background Color */}
                    <input 
                      type="color" 
                      onChange={(e) => {
                        const success = exec('backColor', e.target.value);
                        if (!success) {
                          // Fallback method for background color
                          const selection = window.getSelection();
                          if (selection && selection.rangeCount > 0) {
                            const range = selection.getRangeAt(0);
                            const span = document.createElement('span');
                            span.style.backgroundColor = e.target.value;
                            try {
                              range.surroundContents(span);
                              console.log(`✅ Applied background color ${e.target.value} using fallback`);
                            } catch (err) {
                              console.log('Background color application failed:', err);
                            }
                          }
                        }
                      }}
                      className="w-8 h-6 border border-gray-300 rounded cursor-pointer"
                      title="Background Color"
                      defaultValue="#ffffff"
                    />
                    
                    <div className="w-px h-6 bg-gray-300 mx-1"></div>
                    
                    {/* Text Size Control */}
                    <select 
                      value={selectedTextSize}
                      onChange={(e) => {
                        setSelectedTextSize(e.target.value);
                        applyTextSize(e.target.value);
                      }}
                      className="px-2 py-1 text-sm border rounded hover:bg-gray-50"
                      title="Text Size"
                    >
                      <option value="12px">12px (Small)</option>
                      <option value="14px">14px (Small)</option>
                      <option value="16px">16px (Normal)</option>
                      <option value="18px">18px (Medium)</option>
                      <option value="20px">20px (Large)</option>
                      <option value="24px">24px (X-Large)</option>
                      <option value="28px">28px (XX-Large)</option>
                      <option value="32px">32px (Huge)</option>
                      <option value="36px">36px (Giant)</option>
                    </select>
                    
                    <button 
                      type="button" 
                      onMouseDown={(e) => e.preventDefault()} 
                      onClick={() => applyTextSize(selectedTextSize)} 
                      className="px-2 py-1 text-sm rounded hover:bg-gray-100" 
                      title="Apply Text Size"
                    >
                      📏 Size
                    </button>
                    
                    <div className="w-px h-6 bg-gray-300 mx-1"></div>
                    
                    {/* Lists */}
                    <button type="button" onMouseDown={(e) => e.preventDefault()} onClick={() => exec('insertUnorderedList')} className="px-2 py-1 text-sm rounded hover:bg-gray-100" title="Bullet List">
                      • List
                    </button>
                    <button type="button" onMouseDown={(e) => e.preventDefault()} onClick={() => exec('insertOrderedList')} className="px-2 py-1 text-sm rounded hover:bg-gray-100" title="Numbered List">
                      1. List
                    </button>
                    
                    <div className="w-px h-6 bg-gray-300 mx-1"></div>
                    
                    {/* Link */}
                    <button 
                      type="button" 
                      onMouseDown={(e) => e.preventDefault()} 
                      onClick={() => {
                        const url = prompt('Enter URL:');
                        if (url) {
                          exec('createLink', url);
                        }
                      }} 
                      className="px-2 py-1 text-sm rounded hover:bg-gray-100" 
                      title="Insert Link"
                    >
                      🔗 Link
                    </button>
                    
                    {/* Image Upload */}
                    <label className="px-2 py-1 text-sm rounded cursor-pointer hover:bg-gray-100" title="Insert Image">
                      🖼️ Image
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleInlineImageUpload}
                        className="hidden"
                      />
                    </label>
                    
                    <button 
                      type="button" 
                      onMouseDown={(e) => e.preventDefault()} 
                      onClick={testFormattingFunctions} 
                      className="px-2 py-1 text-xs bg-purple-50 text-purple-600 rounded hover:bg-purple-100" 
                      title="Test All Formatting Functions"
                    >
                      🔧 Test Functions
                    </button>
                    
                    {/* Test Format Button - for debugging */}
                    <button 
                      type="button" 
                      onMouseDown={(e) => e.preventDefault()} 
                      onClick={() => {
                        const contentEditor = document.querySelector('[role="textbox"]') as HTMLDivElement;
                        if (contentEditor) {
                          const testContent = `
                            <h1>Main Title (H1)</h1>
                            <p>This is a normal paragraph with <strong>bold text</strong> and <em>italic text</em>.</p>
                            <h2>Section Heading (H2)</h2>
                            <p>Another paragraph with <u>underlined text</u>.</p>
                            <h3>Subsection (H3)</h3>
                            <ul>
                              <li>Bullet point one</li>
                              <li>Bullet point two</li>
                            </ul>
                            <h4>Sub-subsection (H4)</h4>
                            <ol>
                              <li>Numbered item one</li>
                              <li>Numbered item two</li>
                            </ol>
                            <h5>Minor heading (H5)</h5>
                            <div style="text-align: left;">Left aligned text example</div>
                            <div style="text-align: center;">Centered text example</div>
                            <div style="text-align: right;">Right aligned text example</div>
                            <h6>Smallest heading (H6)</h6>
                            <p style="color: blue;">Blue colored text</p>
                            <p style="background-color: yellow;">Highlighted text</p>
                            <br>`;
                          
                          console.log('🧪 Inserting test formatted content...');
                          contentEditor.innerHTML = testContent;
                          setFormData(prev => ({ ...prev, content: contentEditor.innerHTML }));
                          console.log('🧪 Test content inserted with all formats');
                        }
                      }} 
                      className="px-2 py-1 text-xs bg-green-50 text-green-600 rounded hover:bg-green-100" 
                      title="Insert Test Formatted Content"
                    >
                      🧪 Test All
                    </button>
                    
                    <div className="w-px h-6 bg-gray-300 mx-1"></div>
                    
                    {/* Undo/Redo */}
                    <button type="button" onMouseDown={(e) => e.preventDefault()} onClick={() => exec('undo')} className="px-2 py-1 text-sm rounded hover:bg-gray-100" title="Undo">
                      ↶ Undo
                    </button>
                    <button type="button" onMouseDown={(e) => e.preventDefault()} onClick={() => exec('redo')} className="px-2 py-1 text-sm rounded hover:bg-gray-100" title="Redo">
                      ↷ Redo
                    </button>
                  </div>
                </div>
                
                {/* Simple Text Editor with Centered Images */}
                <div
                  role="textbox"
                  contentEditable
                  suppressContentEditableWarning
                  className="min-h-40 max-h-[60vh] md:max-h-[70vh] lg:max-h-[75vh] overflow-auto px-3 py-2 focus:outline-none border-0 w-full"
                  style={{ 
                    fontSize: '1rem',
                    lineHeight: '1.6',
                    fontFamily: 'system-ui, -apple-system, sans-serif',
                    direction: 'ltr',
                    textAlign: 'left',
                    unicodeBidi: 'bidi-override',
                    writingMode: 'horizontal-tb',
                    wordBreak: 'break-word'
                  }}
                  dir="ltr"
                  lang="en"
                  onInput={(e) => {
                    const target = e.currentTarget as HTMLDivElement;
                    const sel = window.getSelection();
                    if (sel && sel.rangeCount > 0) {
                      selectionRef.current = sel.getRangeAt(0);
                    }
                    
                    // Ensure all images remain centered after any content change
                    const images = target.querySelectorAll('img');
                    images.forEach(img => {
                      // Force center styling on each image
                      img.style.display = 'block';
                      img.style.margin = '20px auto';
                      img.style.maxWidth = '100%';
                      img.style.height = 'auto';
                      
                      // Ensure parent container is also centered
                      const container = img.parentElement;
                      if (container) {
                        container.style.textAlign = 'center';
                        container.style.margin = '20px 0';
                        container.style.clear = 'both';
                      }
                    });
                    setFormData({ ...formData, content: target.innerHTML });
                  }}
                  onMouseUp={() => {
                    const sel = window.getSelection();
                    if (sel && sel.rangeCount > 0) {
                      selectionRef.current = sel.getRangeAt(0);
                    }
                  }}
                  onKeyUp={() => {
                    const sel = window.getSelection();
                    if (sel && sel.rangeCount > 0) {
                      selectionRef.current = sel.getRangeAt(0);
                    }
                  }}
                  onKeyDown={(e) => {
                    // Don't prevent any keys, just let normal typing happen
                    const target = e.currentTarget as HTMLDivElement;
                    
                    // Only prevent problematic key combinations
                    if (e.ctrlKey && e.shiftKey && (e.key === 'X' || e.key === 'x')) {
                      e.preventDefault(); // Prevent some RTL shortcuts
                    }
                  }}
                  onPaste={(e) => {
                    // Handle paste events normally
                    e.preventDefault();
                    const text = e.clipboardData.getData('text/plain');
                    document.execCommand('insertText', false, text);
                  }}
                  ref={(el) => {
                    if (el && formData.content) {
                      // Set content directly if different
                      if (el.innerHTML !== formData.content) {
                        el.innerHTML = formData.content;
                      }
                      
                      // Ensure all images are centered
                      const images = el.querySelectorAll('img');
                      images.forEach(img => {
                        img.style.display = 'block';
                        img.style.margin = '20px auto';
                        img.style.maxWidth = '100%';
                        img.style.height = 'auto';
                        
                        const container = img.parentElement;
                        if (container) {
                          container.style.textAlign = 'center';
                          container.style.margin = '20px 0';
                          container.style.clear = 'both';
                        }
                      });
                    }
                  }}
                />
              </div>
              
              <p className="mt-1 text-xs text-gray-500">
                Use the toolbar to format your content: Select text format from dropdown (H1-H6, Normal), apply bold/italic/underline, align text, change colors, adjust text size, create lists, add links and images. Use H1 for main titles, H2 for sections, H3 for subsections. Select a position in the text and upload an image — it will be inserted right there.
              </p>
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
                    <div className="relative">
                      <img
                        src={formData.imageUrl}
                        alt="Blog preview"
                        className="h-32 w-48 object-cover rounded-md border border-gray-300"
                        onError={(e) => {
                          console.error('Failed to load preview image:', formData.imageUrl);
                          (e.target as HTMLImageElement).style.display = 'none';
                          const errorDiv = document.createElement('div');
                          errorDiv.className = 'h-32 w-48 border border-red-300 rounded-md flex items-center justify-center bg-red-50 text-red-600 text-sm';
                          errorDiv.textContent = 'Failed to load image preview';
                          (e.target as HTMLImageElement).parentNode?.appendChild(errorDiv);
                        }}
                        onLoad={() => console.log('Preview image loaded successfully:', formData.imageUrl)}
                      />
                    </div>
                    <div className="mt-2 space-x-2">
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, imageUrl: '', imageAlt: '' })}
                        className="text-sm text-red-600 hover:text-red-800"
                      >
                        Remove Image
                      </button>
                      <a
                        href={formData.imageUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-blue-600 hover:text-blue-800"
                      >
                        View Full Size
                      </a>
                    </div>
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
                        onError={(e) => {
                          console.error('Failed to load blog image:', blog.imageUrl);
                          (e.target as HTMLImageElement).style.display = 'none';
                        }}
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

