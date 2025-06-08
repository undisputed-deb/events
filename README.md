# EventFlow: Modern & Animated Event Discovery Web App

![EventFlow Hero Screenshot Placeholder](https://via.placeholder.com/1200x600/8140ff/FFFFFF?text=EventFlow+Homepage)
*(Placeholder image. Replace with a real screenshot of your app's homepage.)*

## Overview

EventFlow is a modern, colorful, and fully responsive web application built with React and Vite, designed to mimic the visually engaging experience of platforms like Eventbrite. It features a dynamic homepage with animated event cards, a detailed event page, and a sleek, sticky header with navigation. The application emphasizes smooth animations, vibrant gradients, and interactive hover effects to create a delightful user experience.

## Features

### Homepage
* **Dynamic Hero Section:** A prominent, full-width banner with an eye-catching background image and animated text overlay.
* **Animated Category Icons:** A section displaying various event categories with subtly animated and interactive circular icons.
* **Platform Highlights:** A dedicated section showcasing key benefits of using the platform with 3D animated feature boxes and smooth transitions.
* **Event Showcase Grid:** Displays a grid of vibrant event cards, populated from a local data source.
* **Scroll-Triggered Animations (AOS):** Elements and sections animate into view as the user scrolls, enhancing engagement.
* **Conceptual Background Effects:** Includes placeholders and styling for potential background video, parallax effects, or floating elements to add depth.

### Event Detail Page
* **Event-Specific Hero:** A large banner displaying the image relevant to the selected event.
* **Animated Content Reveal:** Event details, such as description, agenda, speakers, and FAQs, animate dynamically as they come into view.
* **Dynamic Features Section:** Highlights unique selling points for each event, with interactive and animated feature boxes.
* **Prominent Call-to-Action:** A bold "Get Tickets" button.
* **Social Sharing Icons:** Stylized icons for sharing the event on platforms like Facebook, Twitter, Instagram, TikTok, and Email (visuals only, no active sharing logic implemented).

### Event Cards
* **Vibrant & Animated:** Event cards feature colorful gradient borders and subtle hover zoom effects.
* **Numbered Display:** Each card is numbered for easy identification within a list.
* **Status Badges:** Clearly displays event status like "Almost full" or "Just added" with distinct styling.

### Responsive Design
* Built with a mobile-first approach, ensuring a seamless and optimized experience across various screen sizes (desktops, tablets, and mobile phones).

## Technologies Used

* **React:** A JavaScript library for building user interfaces.
* **Vite:** A fast build tool for modern web projects.
* **React Router DOM:** For declarative routing in React applications.
* **AOS (Animate On Scroll):** A lightweight library for easily adding scroll animations.
* **React Icons:** A collection of popular icon sets (Font Awesome, etc.) as React components.
* **CSS3:** For all styling, including gradients, transitions, keyframe animations, and 3D transforms.

## Getting Started

Follow these steps to set up and run the project locally.

### Prerequisites

* Node.js (LTS version recommended)
* npm or Yarn

### Installation

1.  **Clone the repository:**
    ```bash
    git clone <your-repo-url> library-events-board
    cd library-events-board
    ```
    *(Replace `<your-repo-url>` with the actual URL of your Git repository.)*

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Prepare Image Assets:**
    Ensure all required image files are placed in the `src/assets/` directory. The project expects specific filenames for local assets (e.g., `firstpic.png`, `yoga.png`, `digitalmark.png`, `food.png`, `music.png`, `sound.png`, `indie-party.png`, `artgala.png`, `austin.png`, `dallas.png`, `fashion.png`, `film.png` (rename `flim.png` to `film.png` if it exists), `innovationweb.png`, `seattle.png`, `mountain.png`, `web.png`, `pride_hero.png`).

### Running the Development Server

Start the development server:

```bash
npm run dev
# or
yarn dev

src/
├── App.jsx                 # Main application component and routing setup
├── main.jsx                # React app entry point
├── index.css               # Global CSS styles and variables
├── data/
│   └── events.js           # Holds an array of event objects (dummy data)
├── pages/
│   ├── home.jsx            # Renders the main event grid and homepage sections
│   ├── home.css            # Styling for the homepage
│   ├── eventdetail.jsx     # Displays detailed information for a single event
│   ├── eventdetail.css     # Styling for the event detail page
│   ├── pridecelebrations.jsx # Dedicated detailed page for a specific Pride event
│   └── pridecelebrations.css # Styling for the Pride event page
│   ├── createevent.jsx     # (NEW FILE) Form for creating events
│   ├── createevent.css     # (NEW FILE) Styling for create event form
│   ├── login.jsx           # (NEW FILE) Login/Sign Up forms
│   └── login.css           # (NEW FILE) Styling for login/signup forms
├── components/
│   ├── card.jsx            # Reusable component for a single event card
│   ├── card.css            # Styling for event cards (animations, gradients, badges)
│   ├── header.jsx          # Top navigation bar
│   └── header.css          # Styling for the header (sticky, search, nav)
└── assets/                 # Local image assets
    ├── firstpic.png
    └── ... (other event-specific images)

    Styling & Animation Notes
CSS Variables: A consistent color palette and spacing are defined using CSS variables in index.css.
Gradients: Extensive use of linear-gradient and radial-gradient for modern, vibrant aesthetics.
Transitions & Keyframes: Smooth transition properties and @keyframes animations are used for hover effects, element reveals, and subtle background movements.
3D Transforms: transform-style: preserve-3d and translateZ() are applied to create subtle 3D depth and hover animations for features and icons.
AOS (Animate On Scroll): data-aos="..." attributes are directly applied in JSX components for scroll-triggered animations. AOS.init() is called in useEffect hooks.
Responsiveness: Media queries (@media) are used to ensure the layout adapts gracefully to different screen sizes.
Known Issues / Future Enhancements
Image Optimization: For production, local image assets should be optimized (compressed, served in modern formats like WebP).
Dynamic Content: Current event data is static (events.js). In a production application, this would be fetched from an API.
Full Form Functionality: The "Create Event" and "Login/Sign Up" forms are currently front-end simulations. Backend integration for actual data submission and authentication is required.
Complex Animations: For more advanced parallax, custom background video controls, or intricate 3D graphics, dedicated libraries (e.g., react-parallax, react-three-fiber) might be explored.
Accessibility: Further improvements in ARIA attributes and keyboard navigation.
State Management: For larger applications, a more robust state management solution (e.g., Redux Toolkit, Zustand) might be considered.