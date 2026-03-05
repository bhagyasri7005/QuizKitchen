# QuizKitchen - Setup Instructions

## Prerequisites
- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas account)
- Git
- Google Cloud Account (for Gemini API key)

## Step 1: Clone and Setup Project
```bash
# Clone the repository
git clone <repository-url>
cd QuizKitchen
```

## Step 2: Backend Setup
```bash
# Navigate to server directory
cd server

# Install dependencies
npm install

# Create .env file
touch .env   # or manually create .env file
```

Add the following to `.env`:
```env
MONGODB_URI=mongodb://localhost:27017/quizkitchen
JWT_SECRET=your_secret_key_here
GEMINI_API_KEY=your_gemini_api_key_here
PORT=5000
```

To get the Gemini API key:
1. Go to Google AI Studio (https://makersuite.google.com/app/apikey)
2. Create or select a project
3. Generate an API key

## Step 3: Frontend Setup
```bash
# Navigate to client directory
cd ../client

# Install dependencies
npm install

# Install UI component dependencies
npx shadcn@latest init
```

When prompted during shadcn-ui initialization, choose:
- No for TypeScript
- Default for style
- Slate for base color
- src/index.css for global CSS
- Yes for CSS variables
- tailwind.config.js for Tailwind config location
- @/components for components import alias
- @/lib/utils for utils import alias

Then install required UI components:
```bash
npx shadcn@latest add card
npx shadcn@latest add button
npx shadcn@latest add input
npx shadcn@latest add label
npx shadcn@latest add tabs
npx shadcn@latest add radio-group
npx shadcn@latest add alert
npx shadcn@latest add badge
```

## Step 4: Start MongoDB
If using local MongoDB:
```bash
# Start MongoDB service
mongod
```

If using MongoDB Atlas:
1. Create a cluster
2. Get your connection string
3. Update MONGODB_URI in server/.env

## Step 5: Run the Application

### Start Backend Server
```bash
# In the server directory
cd server
npm start
```
Backend will run on http://localhost:5000

### Start Frontend Development Server
```bash
# In a new terminal, navigate to client directory
cd client
npm run dev
```
Frontend will run on http://localhost:5173

## Step 6: Access the Application
Open your browser and navigate to:
- http://localhost:5173

## Default Login Credentials
Create a new account using the registration feature.

## Project Structure
```
QuizKitchen/
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── pages/        # Page components
│   │   ├── services/     # API services
│   │   ├── App.jsx       # Main app component
│   │   └── main.jsx      # Entry point
│   └── package.json
│
└── server/                # Backend Node.js application
    ├── middleware/       # Authentication middleware
    ├── models/          # MongoDB models
    ├── routes/          # API routes
    ├── services/        # Business logic
    ├── index.js         # Server entry point
    └── package.json
```

## Common Issues and Solutions

1. **MongoDB Connection Error**
```bash
# Check if MongoDB is running
mongod --version
# Start MongoDB if not running
mongod
```

2. **Port Already in Use**
```bash
# Kill process using port 5000 (Windows)
netstat -ano | findstr :5000
taskkill /PID <PID> /F

# Kill process using port 5000 (Linux/Mac)
lsof -i :5000
kill -9 <PID>
```

3. **Node Module Issues**
```bash
# In either client or server directory
rm -rf node_modules
npm install
```

4. **CORS Issues**
- Ensure backend is running on port 5000
- Check frontend API base URL in `client/src/services/api.js`

## Additional Notes

- The application uses Gemini API for generating quiz questions from PDF content
- MongoDB is used for storing users, quizzes, and results
- Frontend is built with React and Tailwind CSS
- Backend uses Express.js and MongoDB

## Development Commands

```bash
# Start backend in development mode (if nodemon is installed)
cd server
npm run dev

# Start frontend in development mode
cd client
npm run dev

# Build frontend for production
cd client
npm run build
```

For any issues or questions, please refer to the project's issue tracker or documentation.