# Full Stack Chat Application

Welcome to the Full Stack Chat Application! This project provides a simple yet powerful messaging system with backend and frontend components.

## Features

- Create conversations between users
- Send and receive messages in real-time
- Delete conversations and messages

## Technologies Used

- **Backend:**

  - Node.js
  - Express.js
  - Prisma ORM
  - PostgreSQL
  - Socket.io (for real-time messaging)

- **Frontend:**
  - React.js
  - Tailwind CSS
  - Daisy UI
  - Socket.io (for real-time updates)

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js installed
- PostgreSQL database set up
- Prisma CLI installed globally (`npm install -g prisma`)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/full-stack-chat-app.git
   ```

## Insatallation

1. cd full-stack-chat-app

2. `cd backend`
   `npm install`\
   `cd frontend`
   `npm install`

3. Set up your environment variables:

Create a .env file in the backend directory with the following content:
DATABASE_URL="your_postgresql_database_url_here"

Replace "your_postgresql_database_url_here" with the actual URL of your PostgreSQL database.

4. Migrate and seed the database:
   `cd backend`
   `npx prisma migrate dev --name init`
   `npx prisma db seed --preview-feature`

## Usage

1. `cd backend`
   `npm start`

2. `cd frontend`
   `npm start`

## Contributing

If you would like to contribute to the project, follow these steps:

1. Fork the repository.
2. Create a new branch for your feature: git checkout -b `feature-name`.
3. Commit your changes: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin feature-name`.
5. Submit a `pull request`.
