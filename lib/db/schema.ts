import { relations, sql } from "drizzle-orm";
import { pgTable, serial, text, integer, timestamp, boolean, jsonb, varchar } from "drizzle-orm/pg-core";

// Users table
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  clerkUserId: varchar("clerk_user_id", { length: 255 }).unique(),
  email: varchar("email", { length: 255 }).notNull().unique(),
  name: varchar("name", { length: 255 }),
  company: varchar("company", { length: 255 }),
  role: varchar("role", { length: 50 }).default('user'),
  imageUrl: varchar("image_url", { length: 500 }),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

// Candidates table
export const candidates = pgTable("candidates", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  email: varchar("email", { length: 255 }),
  phone: varchar("phone", { length: 20 }),
  resumeUrl: text("resume_url"),
  linkedinUrl: text("linkedin_url"),
  experience: integer("experience"),
  skills: jsonb("skills"),
  location: varchar("location", { length: 255 }),
  status: varchar("status", { length: 50 }).default('pending'),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

// Interviews table
export const interviews = pgTable("interviews", {
  id: serial("id").primaryKey(),
  candidateId: integer("candidate_id").references(() => candidates.id),
  userId: integer("user_id").references(() => users.id),
  jobTitle: varchar("job_title", { length: 255 }),
  department: varchar("department", { length: 100 }),
  status: varchar("status", { length: 50 }).default('pending'),
  scheduledAt: timestamp("scheduled_at"),
  completedAt: timestamp("completed_at"),
  totalScore: integer("total_score"),
  aiAnalysis: jsonb("ai_analysis"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

// Questions table
export const questions = pgTable("questions", {
  id: serial("id").primaryKey(),
  text: text("text").notNull(),
  category: varchar("category", { length: 100 }),
  difficulty: varchar("difficulty", { length: 20 }),
  type: varchar("type", { length: 50 }).default('general'),
  isCustom: boolean("is_custom").default(false),
  createdAt: timestamp("created_at").defaultNow(),
});

// Responses table
export const responses = pgTable("responses", {
  id: serial("id").primaryKey(),
  interviewId: integer("interview_id").references(() => interviews.id),
  questionId: integer("question_id").references(() => questions.id),
  answer: text("answer"),
  score: integer("score"),
  feedback: text("feedback"),
  analysis: jsonb("analysis"),
  createdAt: timestamp("created_at").defaultNow(),
});

// Analytics table
export const analytics = pgTable("analytics", {
  id: serial("id").primaryKey(),
  interviewId: integer("interview_id").references(() => interviews.id),
  metric: varchar("metric", { length: 100 }),
  value: jsonb("value"),
  createdAt: timestamp("created_at").defaultNow(),
});

// Relations
export const usersRelations = relations(users, ({ many }) => ({
  interviews: many(interviews),
}));

export const candidatesRelations = relations(candidates, ({ many }) => ({
  interviews: many(interviews),
}));

export const interviewsRelations = relations(interviews, ({ one, many }) => ({
  user: one(users, {
    fields: [interviews.userId],
    references: [users.id],
  }),
  candidate: one(candidates, {
    fields: [interviews.candidateId],
    references: [candidates.id],
  }),
  responses: many(responses),
}));

export const responsesRelations = relations(responses, ({ one }) => ({
  interview: one(interviews, {
    fields: [responses.interviewId],
    references: [interviews.id],
  }),
  question: one(questions, {
    fields: [responses.questionId],
    references: [questions.id],
  }),
}));