# Clerk Authentication Implementation

This document outlines the complete Clerk authentication implementation for the AI Recruiter application.

## Overview

The application now includes:
- Clerk authentication with sign-in and sign-up pages
- Automatic user creation in the database on first sign-up
- Protected dashboard that requires authentication
- Webhook handler for automatic user creation
- Updated navigation with authentication state

## Files Created/Modified

### 1. Authentication Pages
- `app/sign-in/[[...sign-in]]/page.tsx` - Sign-in page with Clerk UI
- `app/sign-up/[[...sign-up]]/page.tsx` - Sign-up page with Clerk UI

### 2. Database Integration
- `lib/actions/user-actions.ts` - Server actions for user management
- `lib/db/schema.ts` - Updated users table with Clerk-specific fields

### 3. Webhook Handler
- `app/api/webhooks/clerk/route.ts` - Webhook endpoint for automatic user creation

### 4. Protected Routes
- `app/dashboard/page.tsx` - Protected dashboard requiring authentication

### 5. Navigation Updates
- `app/page.tsx` - Updated navigation with Clerk authentication components
- `app/layout.tsx` - Added ClerkProvider wrapper

## Database Schema Changes

The users table now includes Clerk-specific fields:

```sql
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  clerk_user_id VARCHAR(255) UNIQUE,  -- New: Clerk user identifier
  email VARCHAR(255) NOT NULL UNIQUE,
  name VARCHAR(255),
  company VARCHAR(255),
  role VARCHAR(50) DEFAULT 'user',
  image_url VARCHAR(500),              -- New: Profile picture URL
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

## Authentication Flow

1. **User Signs Up/Signs In**: Users authenticate through Clerk's UI
2. **Webhook Triggered**: Clerk sends a `user.created` webhook event
3. **User Created**: Webhook handler automatically creates user in database
4. **Protected Access**: Dashboard and other protected routes check authentication
5. **User Data**: User information is retrieved and displayed

## Environment Variables Required

Add these to your `.env.local`:

```env
# Database Configuration
DATABASE_URL="postgresql://username:password@ep-xyz.us-east-1.aws.neon.tech/ai-recruiter?sslmode=require"

# Clerk Configuration
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="your-publishable-key"
CLERK_SECRET_KEY="your-secret-key"
NEXT_PUBLIC_CLERK_SIGN_IN_URL="/sign-in"
NEXT_PUBLIC_CLERK_SIGN_UP_URL="/sign-up"
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL="/dashboard"
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL="/dashboard"

# Webhook Configuration
WEBHOOK_SECRET="your-webhook-secret"
```

## Clerk Setup Instructions

1. **Create Clerk Account**: Sign up at [clerk.com](https://clerk.com)
2. **Get API Keys**: Copy publishable and secret keys from Clerk dashboard
3. **Configure Webhooks**: Set up webhook endpoint in Clerk dashboard:
   - URL: `https://your-domain.com/api/webhooks/clerk`
   - Events: `user.created`
4. **Add Environment Variables**: Update `.env.local` with Clerk keys

## Key Features

### ✅ Automatic User Creation
- Users are automatically saved to the database when they first sign up
- Clerk user ID is stored for future reference
- Profile information is captured and stored

### ✅ Protected Routes
- Dashboard requires authentication
- Automatic redirect to sign-in if not authenticated
- User information is displayed in the dashboard

### ✅ Seamless Integration
- Clerk UI components provide native authentication experience
- Custom styling maintains application theme
- Webhook ensures database consistency

### ✅ User Management
- Server actions for creating, updating, and retrieving users
- Integration with existing database schema
- Support for user profile information

## Usage

1. **Sign Up**: Visit `/sign-up` to create a new account
2. **Sign In**: Visit `/sign-in` to log in to an existing account
3. **Dashboard**: Visit `/dashboard` to see the protected area
4. **Automatic Creation**: First-time users are automatically added to the database

## Security Features

- **Secure Authentication**: Leverages Clerk's secure authentication
- **Webhook Verification**: Webhook requests are verified using secret
- **Database Security**: User data is properly stored and managed
- **Protected Routes**: Dashboard requires valid authentication

## Next Steps

1. Configure Clerk webhook in the dashboard
2. Set up environment variables
3. Test the authentication flow
4. Customize the sign-in/sign-up pages as needed
5. Add additional user profile fields if required

## Troubleshooting

### Webhook Issues
- Ensure webhook secret is correctly configured
- Verify webhook URL is accessible
- Check Clerk dashboard for webhook delivery status

### Authentication Issues
- Verify Clerk keys are correctly set in environment
- Check that ClerkProvider is properly wrapped in layout
- Ensure database connection is working

### Database Issues
- Run database migrations if schema has changed
- Verify user table has the correct structure
- Check that foreign key relationships are maintained