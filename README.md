# CivicProof AI

Production-grade MVP for AI-powered civic credibility verification (certificates, volunteer proofs, social impact).

## 1) Systematic Repository Structure

- `app/` UI routes + API endpoints (Next.js App Router)
- `components/` reusable product UI blocks
- `lib/ai` Gemini reasoning adapter
- `lib/services` fraud and trust score engines
- `lib/validation` Zod request validators
- `lib/db` Mongo connection lifecycle
- `models/` MongoDB collections (Mongoose)
- `types/` typed verification/scoring contracts

## 2) Core Product Modules

### Frontend
- Animated landing page (`Trust, Verified`)
- Auth pages (signup/login)
- Civic wallet dashboard with trust metrics and AI insights
- Upload area with drag-and-drop UX
- Admin panel foundation for flagged proofs and org analytics

### Backend APIs
- `POST /api/uploads` metadata validation + upload orchestration hook
- `POST /api/verification` multi-step verification + local fraud heuristics + Gemini reasoning + logs
- `POST /api/scoring` trust/authenticity/community scoring engine
- `GET /api/organizations` org search lookup
- `GET /api/dashboard` dashboard timeline/analytics feed
- `POST /api/auth/session` auth verification hook
- `GET /api/health` deployment health check

### AI + Fraud Workflow
1. Ingest extracted text + metadata
2. Run deterministic fraud heuristics
3. Run Gemini reasoning summary + confidence
4. Merge flags and persist verification log
5. Generate trust scoring breakdown

## 3) MongoDB Collections
- `users`
- `certificates`
- `organizations`
- `verificationLogs`
- `fraudReports`
- `badges`
- `trustScores`
- `contributions`

## 4) Local Setup

```bash
npm install
npm run dev
```

Create `.env` from `.env.example`.

## 5) Vercel Deployment (File to Upload)

Use **`VERCEL_ENV_TEMPLATE.json`** as your upload/import template for project environment variables in Vercel.

Also included:
- `vercel.json` deployment configuration
- `.env.example` local env reference

### Deployment steps
1. Push repository to GitHub.
2. Import project in Vercel.
3. In Vercel Project Settings → Environment Variables, paste values from `VERCEL_ENV_TEMPLATE.json`.
4. Deploy.
5. Validate `GET /api/health`.

## 6) Production Extensions
- Firebase Admin server-side session verification
- Signed URL uploads to GCS/S3
- OCR extraction microservice
- Image-forensics model checks
- Agent Builder tool orchestration
> Trust, Verified.

CivicProof AI is an AI-powered credibility verification platform that validates certificates, volunteer work, civic contributions, and achievement records using Gemini-powered agents and MongoDB-backed trust infrastructure.

Built for the Google Cloud “Building Agents for Real-World Challenges” Hackathon.

---

# Problem

In today’s digital ecosystem, fake certificates, manipulated achievements, and AI-generated documents are becoming increasingly common. Schools, NGOs, recruiters, and organizations struggle to verify authenticity at scale, while genuine contributors lose trust and recognition.

CivicProof AI solves this by creating an intelligent verification agent that investigates, validates, and builds trusted digital credibility profiles.

---

# Solution

CivicProof AI uses Gemini-powered reasoning agents to:

- Analyze uploaded documents
- Extract important information
- Detect inconsistencies and fraud indicators
- Generate trust and authenticity scores
- Build a verified Civic Wallet profile
- Store persistent verification memory using MongoDB

The platform transforms raw uploads into trusted proof of impact.

---

# Features

## AI Verification Agent
- Certificate verification
- Metadata analysis
- Organization extraction
- Contribution validation
- AI reasoning workflows

## Fraud Detection
- Duplicate certificate detection
- Manipulated file detection
- Suspicious metadata analysis
- AI-generated image suspicion
- Timestamp inconsistency detection

## Civic Wallet
- Verified contribution profile
- Achievement timeline
- Trust badges
- Public credibility wallet
- Community impact history

## Dashboard
- Trust Score
- Authenticity Score
- Community Impact Score
- Upload history
- Verification analytics
- AI-generated insights

## Authentication
- Firebase Authentication
- Secure user sessions
- Protected routes

## Admin Panel
- Review flagged uploads
- Organization management
- Verification analytics
- Fraud reports dashboard

---

# Tech Stack

## Frontend
- Next.js
- TypeScript
- Tailwind CSS
- Framer Motion
- shadcn/ui

## Backend
- Node.js / FastAPI
- REST APIs
- Gemini API
- Google Cloud Agent Builder

## Database
- MongoDB Atlas
- Mongoose

## Authentication
- Firebase Authentication

## Hosting
- Vercel

---

# Architecture

```text
User Upload
     ↓
Gemini AI Agent
     ↓
Information Extraction
     ↓
Fraud Detection Pipeline
     ↓
Trust Score Generation
     ↓
MongoDB Verification Memory
     ↓
Civic Wallet Dashboard
