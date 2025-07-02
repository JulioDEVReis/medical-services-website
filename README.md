# Responsive Medical Clinic Website – React + Vite + TypeScript - Translation (PT | EN)

This project is a modern, fully responsive medical clinic website built with React, Vite, and TypeScript. It features a sleek navigation menu, an interactive image gallery, an informative About Us section, and full internationalization support. The design is inspired by contemporary UI/UX standards, ensuring a seamless experience across all devices and languages (Portuguese / English).

## Project Structure

```python
.
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── public
│   ├── locales
│   │   ├── en
│   │   │   └── translation.json
│   │   └── pt
│   │       └── translation.json
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
│   ├── i18n.ts
│   ├── index.css
│   ├── main.tsx
│   └── vite-env.d.ts
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

## Key Features

    •	Responsive Navbar: Modern navigation bar with hamburger menu for screens smaller than 768px. Includes interactive language switcher (PT/EN) with instant translation capabilities and smooth color transitions on hover.
    •	Interactive Image Gallery: Clickable gallery grid with modal pop-up for each medical specialty, showing an enlarged image and localized detailed descriptions that adapt to the selected language.
    •	About Us Section: Stylish, semi-transparent section with clinic image and descriptive text, fully responsive and visually integrated with the rest of the site.
    •	Internationalization (i18n): Complete multilingual support powered by react-i18next, enabling seamless switching between English and Portuguese with persistent language preferences.
    •	Mobile-First Design: All components are fully responsive, adapting gracefully to desktop, tablet, and mobile screens while maintaining translation functionality across all breakpoints.
    •	Smooth Transitions: Visual feedback on navigation and gallery items for a polished user experience, with active language indicators.

## Internationalization Features

The application implements comprehensive internationalization using the react-i18next library, providing:
• Dynamic Language Switching: Users can instantly switch between English and Portuguese using the navbar language selector
• Complete Content Translation: All interface elements, navigation menus, gallery descriptions, and content sections are fully translatable
• Fallback Language Support: English serves as the default fallback language to ensure content is always available

## Desktop Navigation Design

The navigation bar features a fixed, semi-transparent header with backdrop blur, ensuring persistent access to navigation elements. The “Clínica Vida” logo is interactive and returns users to the home page. Navigation links and the language switcher are positioned for optimal usability and accessibility.
Mobile Navigation Implementation

## Mobile Navigation Implementation

On screens below 768px, the navigation transforms into a hamburger menu, providing a touch-friendly, collapsible menu with smooth slide-down animation and backdrop blur. The language switcher remains fully functional in mobile view, maintaining the same translation capabilities across all device sizes.

## Responsive Image Gallery

The gallery displays 20 medical specialties using a CSS Grid layout:
• Desktop: 4 columns
• Tablet: 2 columns
• Mobile: 1 column
Each gallery item is clickable, opening a modal with an enlarged image and specialty description that automatically adapts to the selected language. All medical specialty titles and descriptions are professionally translated to provide accurate medical terminology in both English and Portuguese.

## About Us Section

The About Us component introduces the clinic with a modern, semi-transparent background. The section is split into two parts: a clinic image on the left and descriptive text on the right that seamlessly translates between languages (stacked vertically on smaller screens), maintaining a consistent look and feel with the rest of the site.

## Technologies Used

    •	React (with Vite)
    •	TypeScript
    •	react-i18next (internationalization framework)
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
You can switch languages using the PT/EN toggle in the navigation bar.

## License

MIT License
