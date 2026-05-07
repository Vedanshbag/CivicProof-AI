# CivicProof AI

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
