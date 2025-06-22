# Responsive Medical Clinic Website – React + Vite + TypeScript
This project is a modern, fully responsive medical clinic website built with React, Vite, and TypeScript. It features a sleek navigation menu, an interactive image gallery, and an informative About Us section. The design is inspired by contemporary UI/UX standards, ensuring a seamless experience across all devices.

## Project Structure
```python
.
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── public
│   └── vite.svg
├── README.md
├── src
│   ├── App.tsx
│   ├── assets
│   │   ├── images
│   │   │   ├── background.jpg
│   │   │   ├── clinic-building.jpg
│   │   │   └── gallery
│   │   └── react.svg
│   ├── components
│   │   ├── AboutUs
│   │   │   ├── AboutUs.css
│   │   │   └── AboutUs.tsx
│   │   ├── Footer
│   │   │   ├── Footer.css
│   │   │   └── Footer.tsx
│   │   ├── Gallery
│   │   │   ├── Gallery.css
│   │   │   └── Gallery.tsx
│   │   └── Navbar
│   │       ├── Navbar.css
│   │       └── Navbar.tsx
│   ├── index.css
│   ├── main.tsx
│   └── vite-env.d.ts
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

## Key Features
	•	Responsive Navbar: Modern navigation bar with hamburger menu for screens smaller than 768px. Includes language switcher (PT/EN) and smooth color transitions on hover.
	•	Interactive Image Gallery: Clickable gallery grid with modal pop-up for each medical specialty, showing an enlarged image and a detailed description.
	•	About Us Section: Stylish, semi-transparent section with clinic image and descriptive text, fully responsive and visually integrated with the rest of the site.
	•	Mobile-First Design: All components are fully responsive, adapting gracefully to desktop, tablet, and mobile screens.
	•	Smooth Transitions: Visual feedback on navigation and gallery items for a polished user experience.

## Desktop Navigation Design
The navigation bar features a fixed, semi-transparent header with backdrop blur, ensuring persistent access to navigation elements. The “Clínica Vida” logo is interactive and returns users to the home page. Navigation links and the language switcher are positioned for optimal usability and accessibility.
Mobile Navigation Implementation
On screens below 768px, the navigation transforms into a hamburger menu, providing a touch-friendly, collapsible menu with smooth slide-down animation and backdrop blur.

## Responsive Image Gallery
The gallery displays 20 medical specialties using a CSS Grid layout:
	•	Desktop: 4 columns
	•	Tablet: 2 columns
	•	Mobile: 1 column
Each gallery item is clickable, opening a modal with an enlarged image and a specialty description.

## About Us Section
A new About Us component introduces the clinic with a modern, semi-transparent background. The section is split into two parts: a clinic image on the left and descriptive text on the right (stacked vertically on smaller screens), maintaining a consistent look and feel with the rest of the site.

## Technologies Used
	•	React (with Vite)
	•	TypeScript
	•	HTML5 & CSS3
	•	Flexbox (for navigation alignment)
	•	CSS Grid (for image gallery)
	•	Media Queries for responsive design

## Getting Started
	1.	Clone the repository:
```javascript
git clone <repository-url>
cd <project-folder>
```

	2.	Install dependencies:
```javascript
npm install
```

	3.	Run the development server:
```javascript
npm run dev
```

	4.	Open your browser and visit:
http://localhost:5173


## License
MIT License

