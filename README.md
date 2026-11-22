# FitLog – Workout Library

FitLog is a dark, no-nonsense gym companion built with Next.js. Browse a library of
workouts, open detailed instructions, lock lifts into today's plan, save others for
later, and track minutes and calories as you complete them.

🔗 **Live Site:** https://YOUR-APP.vercel.app
💻 **GitHub:** https://github.com/YOUR_USERNAME/fitlog

## Technologies Used
- Next.js (App Router) & React
- JavaScript
- Tailwind CSS
- React Context API
- React Toastify
- Lucide React
- LocalStorage
- Vercel

## Key Features
1. **Dynamic workout library** fetched from the FitLog API in a responsive 3/2/1-column grid.
2. **Search and sort** workouts by name or muscle group, and by duration, calories or rating.
3. **Workout details page** with specs table and step-by-step instructions (dynamic routes).
4. **Today's Plan** with a 5-lift daily cap, duplicate prevention and live Navbar counters.
5. **Save for Later** list kept separate from the daily plan.
6. **My Plan dashboard** with live Exercises / Minutes / Calories stats, Mark as Done and Remove.
7. **LocalStorage persistence** so plan, saved items and completion survive reloads.
8. **Loading states, toasts, error handling and a custom 404 page.**

## API
- All workouts: `https://api.abcz.workers.dev/api/fitlog`
- Single workout: `https://api.abcz.workers.dev/api/fitlog/:id`
- Fallback: `https://api.api-store.workers.dev/api/fitlog`

## Installation & Local Development
```bash
git clone https://github.com/YOUR_USERNAME/fitlog.git
cd fitlog
npm install
npm run dev
```
Open http://localhost:3000.

## Build for Production
```bash
npm run build
npm start
```