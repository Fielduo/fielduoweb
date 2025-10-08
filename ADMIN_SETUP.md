# Fielduo Admin Panel Setup

## Overview
This admin panel provides a comprehensive backend management system for the Fielduo website with the following features:

- **Dashboard**: Overview of all data with statistics
- **Contacts**: Manage contact form submissions
- **Newsletter**: Manage newsletter subscribers
- **Blogs**: Create and manage blog posts
- **Early Bird**: Manage early bird subscriptions

## Features

### Authentication
- Secure login/logout system
- JWT-based authentication
- Protected admin routes
- Session management

### Dashboard
- Real-time statistics
- Recent activity overview
- Quick access to all sections

### Contact Management
- View all contact form submissions
- Update contact status (pending/done)
- Detailed contact information
- Search and filter contacts

### Newsletter Management
- View all newsletter subscribers
- Export subscriber data to CSV
- Bulk delete operations
- Search functionality

### Blog Management
- Create new blog posts
- Edit existing posts
- Publish/draft status
- Tag management
- Author assignment

### Early Bird Management
- View early bird subscribers
- Export subscriber data
- Bulk operations
- Statistics and analytics

## Setup Instructions

### 1. Environment Configuration
Create a `.env.local` file in your project root with the following variables:

```env
MONGODB_URI=mongodb://localhost:27017
MONGODB_DB=fielduo
ADMIN_EMAIL=admin@fielduo.com
ADMIN_PASSWORD=admin123
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-nextauth-secret-key
```

### 2. Database Setup
Make sure MongoDB is running and accessible at the URI specified in your environment variables.

### 3. Access the Admin Panel
1. Navigate to `/admin` in your browser
2. You'll be redirected to the login page
3. Use the credentials from your `.env.local` file:
   - Email: `admin@fielduo.com`
   - Password: `admin123`

### 4. Default Credentials
- **Email**: admin@fielduo.com
- **Password**: admin123

**Important**: Change these credentials in production!

## API Endpoints

### Authentication
- `POST /api/auth/login` - Admin login
- `POST /api/auth/logout` - Admin logout
- `GET /api/auth/verify` - Verify authentication

### Contacts
- `GET /api/contacts` - Get all contacts
- `POST /api/contacts` - Create contact
- `GET /api/contacts/[id]` - Get specific contact
- `PATCH /api/contacts/[id]` - Update contact status
- `DELETE /api/contacts/[id]` - Delete contact

### Newsletter
- `GET /api/newsletter` - Get all subscribers
- `POST /api/newsletter` - Subscribe to newsletter
- `GET /api/newsletter/[id]` - Get specific subscriber
- `DELETE /api/newsletter/[id]` - Delete subscriber

### Blogs
- `GET /api/blog` - Get all blog posts
- `POST /api/blog` - Create blog post
- `GET /api/blog/[id]` - Get specific blog post
- `PUT /api/blog/[id]` - Update blog post
- `DELETE /api/blog/[id]` - Delete blog post

### Early Bird
- `GET /api/early-bird` - Get all early bird subscribers
- `POST /api/early-bird` - Subscribe to early bird
- `GET /api/early-bird/[id]` - Get specific subscriber
- `DELETE /api/early-bird/[id]` - Delete subscriber

## Security Features

- JWT-based authentication
- HTTP-only cookies for token storage
- Protected API routes
- Admin-only access to management functions
- Secure password handling

## File Structure

```
src/
├── app/
│   ├── admin/
│   │   ├── components/
│   │   │   ├── AdminHeader.tsx
│   │   │   └── AdminSidebar.tsx
│   │   ├── contacts/
│   │   │   └── page.tsx
│   │   ├── newsletter/
│   │   │   └── page.tsx
│   │   ├── blogs/
│   │   │   └── page.tsx
│   │   ├── early-bird/
│   │   │   └── page.tsx
│   │   ├── login/
│   │   │   └── page.tsx
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── api/
│       ├── auth/
│       │   ├── login/route.ts
│       │   ├── logout/route.ts
│       │   └── verify/route.ts
│       ├── contacts/
│       │   ├── [id]/route.ts
│       │   └── route.ts
│       ├── newsletter/
│       │   ├── [id]/route.ts
│       │   └── route.ts
│       ├── blog/
│       │   ├── [id]/route.ts
│       │   └── route.ts
│       └── early-bird/
│           ├── [id]/route.ts
│           └── route.ts
├── lib/
│   ├── auth.ts
│   ├── admin-api.ts
│   └── mongodb.ts
└── middleware.ts
```

## Usage

1. **Login**: Access `/admin` and login with your credentials
2. **Dashboard**: View overview of all data and statistics
3. **Manage Contacts**: Review and update contact form submissions
4. **Newsletter**: Manage subscriber list and export data
5. **Blogs**: Create, edit, and manage blog posts
6. **Early Bird**: Manage early bird subscription list

## Production Considerations

1. **Change default credentials** in `.env.local`
2. **Use strong JWT secrets** for production
3. **Enable HTTPS** for secure cookie transmission
4. **Set up proper MongoDB security** with authentication
5. **Configure proper CORS** settings if needed
6. **Set up monitoring** and logging for admin activities

## Troubleshooting

### Common Issues

1. **Login not working**: Check your `.env.local` credentials
2. **Database connection issues**: Verify MongoDB is running and accessible
3. **Authentication errors**: Clear browser cookies and try again
4. **API errors**: Check browser console for detailed error messages

### Support

For technical support or questions about the admin panel, please refer to the main project documentation or contact the development team.
