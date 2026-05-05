# InsightHub – Academic Project Repository Platform

## Live Demo
Backend Deployment (Render):  
https://insighthub-backend-k7hv.onrender.com
Frontend Deployment (Github Pages):
https://davidleeroy.github.io/InsightHub_frontend/

## GitHub Repositories
Backend:  
https://github.com/Davidleeroy/InsightHub_backend

Frontend:  
https://github.com/Davidleeroy/InsightHub_frontend

---

# Overview
InsightHub is a full-stack academic repository platform designed to help students submit, discover, and access research projects in a centralized system.

The platform supports project submission, admin moderation, project exploration, bookmarking, feedback, and controlled access to academic resources.

---

# Project Requirements Implemented

## 1. User Authentication
- User registration
- User login
- Password hashing with bcrypt
- User roles (student/admin)

---

## 2. Project Submission System
Users can submit projects containing:

- Project title
- Description
- Department
- Supervisor
- Year
- Technologies used
- PDF document link
- Video demonstration link

Submitted projects are stored with:

```text
Status = Pending
```

until reviewed.

---

## 3. Project Review and Approval Workflow
Admin users can:

- Review submitted projects
- Approve submissions
- Reject submissions
- Edit project content
- Remove projects

Only:

```text
Approved projects
```

are visible to public users.

---

## 4. Project Repository Search and Discovery
Users can:

- Browse approved projects
- Search projects by keyword
- Filter by:
  - Department
  - Year
  - Technology

---

## 5. Detailed Project Pages
Each project has a dedicated detail page displaying:

- Full project information
- Author/student name
- Supervisor
- Department
- Technologies used
- Documentation links
- Video links

---

## 6. User Engagement Features
Implemented engagement features include:

- Comments and feedback
- Save/bookmark projects
- Request access to projects
- Contact author support

---

## 7. Admin Content Management
Admin moderation routes support:

```http
GET /admin/pending
PUT /admin/approve/:id
PUT /admin/reject/:id
PUT /admin/edit/:id
DELETE /admin/delete/:id
```

---

# Tech Stack

## Frontend
- HTML
- CSS
- JavaScript

## Backend
- Node.js
- Express.js

## Database
- PostgreSQL

## Deployment
- Render
- GitHub

---

# Database Tables

## Users
```sql
users
- id
- name
- email
- password
- role
```

## Projects
```sql
projects
- id
- user_id
- title
- description
- department
- supervisor
- year
- technology
- pdf_url
- video_url
- status
```

## Bookmarks
```sql
bookmarks
```

## Comments
```sql
comments
```

## Access Requests
```sql
access_requests
```

---

# Project Structure

```bash
InsightHub_backend/
│
├── config/
│   └── db.js
│
├── frontend/
│   ├── index.html
│   └── details.html
│
├── server.js
├── package.json
└── README.md
```

---

# API Endpoints

## Authentication
```http
POST /register
POST /login
```

## Projects
```http
GET /projects
GET /projects/:id
POST /projects
PUT /projects/:id
```

## Bookmarks
```http
POST /bookmark
GET /bookmarks/:userId
```

## Comments
```http
POST /comments
GET /comments/:projectId
```

## Access Requests
```http
POST /request-access
```

---

# Installation

Clone backend:

```bash
git clone https://github.com/Davidleeroy/InsightHub_backend.git
cd InsightHub_backend
```

Install dependencies:

```bash
npm install
```

Run server:

```bash
node server.js
```

---

# Render Deployment
Configured with:

- Render Web Service
- Render PostgreSQL
- Environment Variables
- GitHub Continuous Deployment

Environment variable:

```env
DATABASE_URL=postgresql://insighthub_17yh_user:EkIaat9jZcqN9Waui1Z078N57AKzw08v@dpg-d7ojcpn7f7vs739e4c80-a.oregon-postgres.render.com/insighthub_17yh
PORT=5000
```

---

# Future Improvements
Planned enhancements:

- File uploads for project PDFs
- Notifications
- User profiles
- Project rating system
- Recommendation engine
- Full admin dashboard

---

# Author
David Akanni

---

## Academic Purpose
This project was developed as an academic research repository system to improve project archiving, moderation, and accessibility within educational institutions.
