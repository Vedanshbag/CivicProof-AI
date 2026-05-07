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
