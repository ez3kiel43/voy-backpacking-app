# 🏕️ Voy Backpacking

**Explore New Horizons** with Voy – a lightweight backpacking planner built as a responsive web app. Voy helps users register, log in, and add new gear to their virtual backpack. While it's not yet connected to a backend, the app includes interactive forms with robust client-side validation.

## 🚀 Features

-    ✍️ **User Registration & Login**  
     Clean, interactive forms with real-time feedback and validation using [Zod](https://zod.dev/).

-    🎒 **Add New Gear Form**  
     Input gear items with validation to simulate building out your backpacking kit.

-    📄 **Prebuilt Layouts & Dummy Data**  
     Placeholder pages for trips, gear lists, and account settings using static content and mock layouts.

-    🖥️ **Responsive Design**  
     Optimized for mobile and desktop viewing.

## 🧪 Tech Stack

-    **React** with **Vite**
-    **Zod** for schema validation
-    **React Hook Form** for form handling
-    **React Router** for client-side routing
-    **Tailwind CSS** for styling

## 🛠️ Getting Started

### Prerequisites

-    Node.js (v18+ recommended)
-    npm or yarn

### Installation

```bash
git clone https://github.com/yourusername/voy-backpacking.git
cd voy-backpacking
npm install
npm run dev
The app should now be running at http://localhost:5173.

🧭 Project Structure
bash
Copy
Edit
src/
├── components/      # Reusable UI components
├── pages/           # Page-level components
├── forms/           # Form components with Zod validation
├── hooks/           # Custom React hooks
├── utils/           # Utility functions and validation schemas
└── App.tsx          # Main app layout and routing
✅ Validation
Forms are validated using Zod schemas. Errors are displayed in real-time and prevent submission if fields are invalid or missing.

📌 Notes
Currently no backend integration – all data is local and does not persist between sessions.

Layouts and components are subject to change as features are added.

🧱 Future Plans
🔗 Connect to a real backend (likely PostgreSQL + Express or Supabase)

📦 Add gear weight tracking and backpack capacity

🌄 Trip planning and itinerary tools

📱 PWA support for offline access

📃 License
MIT License © 2025 [Your Name]

This is a learning and portfolio project. Contributions or suggestions welcome!
```
