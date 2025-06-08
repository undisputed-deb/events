# EventFlow: Discover & Host Vibrant Events
## Overview

EventFlow is a modern, colorful, and highly interactive web application designed to provide a seamless experience for discovering and managing events. Inspired by platforms like Eventbrite, it offers a visually rich interface with dynamic animations, vibrant gradients, and responsive layouts. The app showcases a **cohesive and unique theme** focused on community, celebration, and diverse interests, evident from its vibrant branding and event categorizations.

*Interactive Homepage Experience:**
    * **Dynamic Hero Section:** Features a full-width banner with an animating text overlay and a call-to-action to a special event page.
    * **Live Demo (GIF):**
        ![EventFlow Homepage Live Demo](src/assets/Events.gif)
        *Witness the smooth animations, scroll-triggered effects, and interactive elements in action.*
        *(**IMPORTANT:** Ensure your `Events.gif` file is located in `src/assets/`.)*
    * **Category Exploration:** Users can browse events by category through an animated section featuring colorful icons.
    * **Platform Benefits Showcase:** A dedicated section highlights EventFlow's core advantages with engaging 3D animated feature boxes.
    * **Intelligent Event Filtering & Shuffling:** Events are dynamically filtered and **shuffled based on the user's selected location** (e.g., from the header search bar), providing a personalized and randomized discovery experience while still displaying all relevant cards.
    * **Global Search Functionality:** A prominent header search bar allows users to search events by keywords and filter by location.

## Key Features

This project demonstrates a robust implementation of key web application functionalities and design principles:

* **Cohesive Theme & Branding:**
    * The application maintains a vibrant and cohesive theme, centered around community events and celebrations, notably highlighted by sections like "PAINT THE TOWN RAINBOW" and integrated visual elements.
    * A clear and attractive **header/title describing the theme (`EventFlow`) is prominently displayed** across all pages, maintaining brand consistency.

* **Comprehensive Event Display:**
    * The homepage effectively displays **at least 15 unique events** (or more, depending on data available for the selected location).
    * All events are presented in a highly **responsive card format**, ensuring optimal viewing across various devices.
    * **The cards are displayed in an organized grid format**, providing a clean and easily navigable layout for users to browse events.
    * **Each card includes essential information** about the event, such as title, date, time, location, pricing, follower count, and a status badge ("Almost full", "Just added").

* **Interactive Homepage Experience:**
    * **Dynamic Hero Section:** Features a full-width banner with an animating text overlay and a call-to-action to a special event page.
    * **Category Exploration:** Users can browse events by category through an animated section featuring colorful icons.
    * **Platform Benefits Showcase:** A dedicated section highlights EventFlow's core advantages with engaging 3D animated feature boxes.
    * **Intelligent Event Filtering & Shuffling:** Events are dynamically filtered and **shuffled based on the user's selected location** (e.g., from the header search bar), providing a personalized and randomized discovery experience while still displaying all relevant cards.
    * **Global Search Functionality:** A prominent header search bar allows users to search events by keywords and filter by location.

* **Advanced Event Detail Page:**
    * Each event card links to a dedicated detail page, featuring a large hero image of the event.
    * Details are **elaborated with unique sections** for agenda, speakers, FAQs, and event-specific features (e.g., "Why You Should Attend"), all dynamically rendered.
    * Includes a clear "Get Tickets" call-to-action and customizable social sharing options (Facebook, Twitter, Instagram, TikTok, Email logos only).


* **Immersive User Interface & Animations:**
    * **Scroll-Triggered Animations (AOS):** Elements and sections across the homepage and detail pages animate into view as the user scrolls, creating a highly dynamic and engaging experience.
    * **Smooth Gradient Transitions:** Strategic use of linear and radial gradients provides a modern, vibrant aesthetic, enhanced by hover effects and subtle animations.
    * **3D Hover Effects:** Interactive elements like category icons and feature boxes incorporate subtle 3D transforms on hover for added depth.
    * **Conceptual Advanced Effects:** Includes the groundwork for potential background video, parallax scrolling, and subtle floating elements to enhance visual depth.

* **Full Responsiveness:**
    * Designed with a mobile-first approach, ensuring optimal viewing and interaction across desktops, tablets, and mobile devices.

## Technologies Used

* **React:** A JavaScript library for building user interfaces.
* **Vite:** A fast and efficient build tool for modern web projects.
* **React Router DOM:** For seamless client-side routing.
* **AOS (Animate On Scroll):** A lightweight library for easy-to-implement scroll animations.
* **React Icons:** Provides a wide range of customizable vector icons as React components.
* **CSS3:** Utilized for all styling, including advanced features like gradients, transitions, keyframe animations, and 3D transforms.

## Getting Started

Follow these steps to set up and run the project locally.

### Prerequisites

* Node.js (LTS version recommended)
* npm or Yarn

### Installation

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/undisputed-deb/events.git](https://github.com/undisputed-deb/events.git) library-events-board
    cd library-events-board
    ```

2.  **Install project dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Prepare Image Assets:**
    **Crucial:** Ensure all required image files (e.g., `firstpic.png`, `digitalmark.png`, `food.png`, `music.png`, `yoga.png`, `sound.png`, `indie-party.png`, `artgala.png`, `austin.png`, `dallas.png`, `fashion.png`, `film.png` [remember to rename `flim.png` to `film.png` if it exists], `innovationweb.png`, `seattle.png`, `mountain.png`, `web.png`, `pride_hero.png`) are located in the `src/assets/` directory with their **exact filenames (case-sensitive)**.

4.  **Create New Page Files:**
    You must manually create the following files in your `src/pages/` directory and populate them with the code provided in the project:
    * `src/pages/createevent.jsx`
    * `src/pages/createevent.css`
    * `src/pages/login.jsx`
    * `src/pages/login.css`

### Running the Development Server

To start the local development server:

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