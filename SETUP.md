# Video Upload Setup Guide

## Prerequisites

1. **ImageKit Account**: Sign up at [ImageKit.io](https://imagekit.io) and get your credentials
2. **PostgreSQL Database**: Set up a PostgreSQL database
3. **Environment Variables**: Configure the required environment variables

## Environment Variables Setup

Create a `.env.local` file in the root directory with the following variables:

```env
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/your_database_name"

# ImageKit Configuration
NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY="your_imagekit_public_key"
NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT="https://ik.imagekit.io/your_endpoint"
PRIVATE_KEY="your_imagekit_private_key"

# Clerk Authentication (if using)
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="your_clerk_publishable_key"
CLERK_SECRET_KEY="your_clerk_secret_key"
```

## Getting ImageKit Credentials

1. Go to [ImageKit Dashboard](https://imagekit.io/dashboard)
2. Navigate to "Developer Options" → "API Keys"
3. Copy your:
   - Public Key
   - Private Key
   - URL Endpoint

## Database Setup

1. Run the database migration:
```bash
npx prisma migrate dev
```

2. Generate the Prisma client:
```bash
npx prisma generate
```

## Installation and Running

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

## Features Fixed

- ✅ File size validation (20MB limit)
- ✅ Upload progress calculation
- ✅ Better error handling
- ✅ Form validation improvements
- ✅ Environment variable validation
- ✅ Database connection fixes

## Common Issues and Solutions

### 1. "ImageKit configuration is missing" error
- Ensure all ImageKit environment variables are set correctly
- Check that the `.env.local` file is in the root directory

### 2. Database connection errors
- Verify your `DATABASE_URL` is correct
- Ensure PostgreSQL is running
- Run `npx prisma migrate dev` to set up the database

### 3. Upload fails with authentication error
- Check that your ImageKit credentials are correct
- Verify the `PRIVATE_KEY` is set (not exposed to client)

### 4. File upload size issues
- The system now properly validates file size (20MB limit)
- Progress calculation has been fixed

## Testing the Upload

1. Navigate to the upload form
2. Fill in the required fields (title, description, category)
3. Upload a video file (under 20MB)
4. Optionally upload a thumbnail image
5. Submit the form

The video should upload successfully to ImageKit and be saved to your database. 