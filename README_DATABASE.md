# NeonDB + Drizzle ORM Setup Guide

This guide explains how to set up and use NeonDB with Drizzle ORM for the AI Recruiter application.

## Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- NeonDB account (sign up at [neon.tech](https://neon.tech))

## Installation

The following packages are already installed in your project:

```bash
npm install @neondatabase/serverless drizzle-orm
npm install -D drizzle-kit
```

## Setup Steps

### 1. Create NeonDB Account

1. Go to [neon.tech](https://neon.tech) and sign up for a free account
2. Create a new project
3. Note down your connection string from the project dashboard

### 2. Environment Configuration

1. Copy `.env.local.example` to `.env.local`:
   ```bash
   cp .env.local.example .env.local
   ```

2. Update `.env.local` with your NeonDB connection string:
   ```env
   DATABASE_URL="postgresql://your_username:your_password@ep-your_endpoint.us-east-1.aws.neon.tech/your_database?sslmode=require"
   ```

### 3. Generate and Push Database Schema

Run the following commands to set up your database:

```bash
# Generate migration files
npm run db:generate

# Push schema to database
npm run db:push
```

### 4. Run Migrations (for future schema changes)

```bash
npm run db:migrate
```

## Database Schema

The application uses the following tables:

### Users Table
- `id`: Primary key
- `email`: User email (unique)
- `name`: User's full name
- `company`: Company name
- `role`: User role (default: 'user')
- `createdAt`, `updatedAt`: Timestamps

### Candidates Table
- `id`: Primary key
- `name`: Candidate's full name
- `email`, `phone`: Contact information
- `resumeUrl`, `linkedinUrl`: Profile links
- `experience`: Years of experience
- `skills`: JSON array of skills
- `location`: Candidate location
- `status`: Application status
- `createdAt`, `updatedAt`: Timestamps

### Interviews Table
- `id`: Primary key
- `candidateId`: Foreign key to candidates
- `userId`: Foreign key to users
- `jobTitle`, `department`: Job details
- `status`: Interview status
- `scheduledAt`, `completedAt`: Interview timing
- `totalScore`: Overall score
- `aiAnalysis`: JSON with AI analysis
- `createdAt`, `updatedAt`: Timestamps

### Questions Table
- `id`: Primary key
- `text`: Question text
- `category`, `difficulty`, `type`: Question metadata
- `isCustom`: Whether it's a custom question
- `createdAt`: Timestamp

### Responses Table
- `id`: Primary key
- `interviewId`: Foreign key to interviews
- `questionId`: Foreign key to questions
- `answer`: Candidate's response
- `score`: Response score
- `feedback`: AI feedback
- `analysis`: JSON with detailed analysis
- `createdAt`: Timestamp

### Analytics Table
- `id`: Primary key
- `interviewId`: Foreign key to interviews
- `metric`: Metric name
- `value`: Metric value (JSON)
- `createdAt`: Timestamp

## Usage Examples

### API Routes

#### Candidates API
```typescript
// GET /api/candidates - Get all candidates
// POST /api/candidates - Create new candidate
```

#### Interviews API
```typescript
// GET /api/interviews - Get all interviews with candidates and responses
// POST /api/interviews - Create new interview
```

### Server Actions

#### Candidate Actions
```typescript
import { createCandidate, updateCandidate, deleteCandidate } from '@/lib/actions/candidate-actions';

// Create a new candidate
const newCandidate = await createCandidate({
  name: "John Doe",
  email: "john@example.com",
  skills: ["JavaScript", "React", "Node.js"]
});

// Update candidate
await updateCandidate(1, { status: "interview_scheduled" });

// Delete candidate
await deleteCandidate(1);
```

#### Interview Actions
```typescript
import { createInterview, getInterviewsWithResponses } from '@/lib/actions/interview-actions';

// Create new interview
const interview = await createInterview({
  candidateId: 1,
  userId: 1,
  jobTitle: "Frontend Developer",
  department: "Engineering"
});

// Get interviews with detailed responses
const interviews = await getInterviewsWithResponses();
```

### Database Queries

#### Basic Queries
```typescript
import { db } from '@/lib/db';
import { candidates, interviews } from '@/lib/db/schema';
import { eq, and, or } from 'drizzle-orm';

// Get all candidates
const allCandidates = await db.select().from(candidates);

// Get candidate by ID
const candidate = await db.select().from(candidates).where(eq(candidates.id, 1));

// Get interviews for a specific candidate
const candidateInterviews = await db.select()
  .from(interviews)
  .where(eq(interviews.candidateId, 1));
```

#### Advanced Queries with Relations
```typescript
// Get interviews with candidate and responses
const interviewsWithDetails = await db.query.interviews.findMany({
  with: {
    candidate: true,
    responses: {
      with: {
        question: true,
      },
    },
  },
});

// Filter candidates by skills
const skilledCandidates = await db.select()
  .from(candidates)
  .where(
    sql`${candidates.skills} @> ${JSON.stringify(['React', 'JavaScript'])}`
  );
```

## Development Workflow

### Adding New Tables

1. Add table definition to `lib/db/schema.ts`
2. Run `npm run db:generate` to create migration
3. Run `npm run db:push` to apply to database

### Modifying Existing Tables

1. Update table definition in `lib/db/schema.ts`
2. Run `npm run db:generate` to create migration
3. Run `npm run db:migrate` to apply changes

### Seeding Data

Create a seed file in `lib/db/seed.ts`:

```typescript
import { db } from './index';
import { candidates } from './schema';

export async function seed() {
  await db.insert(candidates).values([
    {
      name: "Jane Smith",
      email: "jane@example.com",
      skills: ["Python", "Django", "PostgreSQL"]
    }
  ]);
}
```

## Security Considerations

- Never commit `.env.local` to version control
- Use environment variables for all sensitive configuration
- Drizzle ORM automatically handles SQL injection protection
- Implement proper input validation in API routes
- Add authentication middleware for protected routes

## Troubleshooting

### Common Issues

1. **Connection Errors**: Check your DATABASE_URL in `.env.local`
2. **Migration Failures**: Ensure your schema is valid and run `npm run db:generate` first
3. **TypeScript Errors**: Run `npm run db:generate` to update types

### Debug Commands

```bash
# Check database connection
node -e "import { db } from './lib/db'; console.log(await db.select().from('candidates').limit(1))"

# Reset database (development only)
npm run db:push -- --force
```

## Performance Tips

- Use `findMany` with `with` for eager loading to avoid N+1 queries
- Add indexes for frequently queried fields
- Use pagination for large datasets
- Cache frequently accessed data

## Next Steps

1. Set up authentication system
2. Add validation middleware
3. Implement rate limiting for API routes
4. Add logging and monitoring
5. Set up production database backups