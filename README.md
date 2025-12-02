# Wanderlust Travel App

A responsive React application for a travel agency, demonstrating modern frontend practices using React, TypeScript, and Tailwind CSS.

## Features

- **5 Distinct Pages**: 
  - **Home**: Immersive Hero section and featured destinations.
  - **Destinations**: Catalog view with client-side Search and Filter logic.
  - **Destination Details**: Dynamic routing (`/destinations/:id`) displaying detailed info from local JSON data.
  - **Travel Tips**: Accordion-style UI for travel advice.
  - **Contact**: Functional form with validation states.
- **Data Handling**: Simulates a database using a local `data.json` file.
- **Responsive Design**: Mobile-first approach using Tailwind CSS.
- **Icons**: Uses `lucide-react` for consistent iconography.

## Folder Structure

```
/
├── index.html          # Entry HTML
├── index.tsx           # React Entry
├── App.tsx             # Routing & Layout
├── data.json           # Mock Database
├── types.ts            # TypeScript Interfaces
├── components/         # Reusable UI components
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   └── DestinationCard.tsx
└── pages/              # Page views
    ├── Home.tsx
    ├── Destinations.tsx
    ├── DestinationDetails.tsx
    ├── TravelTips.tsx
    └── Contact.tsx
```

## How to Run

1. Ensure you have Node.js installed.
2. Install dependencies: `npm install react react-dom react-router-dom lucide-react` and dev dependencies for Vite/TypeScript.
3. Start the development server (e.g., `npm run dev` in a Vite environment).
4. Navigate to the local host URL.

*Note: No backend is required. Data is loaded locally.*
