# Sri Mahalakshmi Yathra Service Website

This is a static website for Sri Mahalakshmi Yathra Service - a pilgrimage and travel service provider in South India.

## Project Structure

- `index.html` - Main homepage
- `aboutUs.html` - About us page
- `programs.html` - Programs/tours page
- `BookNow.html` - Booking form page
- `gallery.html` - Photo gallery
- `style.css`, `style_about.css`, `style_bookNow.css`, `programs_style.css` - Stylesheets
- `script.js`, `script_aboutUs.js`, `script_programs.js`, `booknow.js` - JavaScript files
- Various image files for the gallery and content

## Setup Instructions

### Option 1: Using Python HTTP Server (Recommended)

1. Navigate to the project directory:
   ```bash
   cd Smlys
   ```

2. Start a local server:
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Python 2
   python -m SimpleHTTPServer 8000
   ```

3. Open your browser and visit:
   ```
   http://localhost:8000
   ```

### Option 2: Using Node.js http-server

1. Install http-server globally (if not already installed):
   ```bash
   npm install -g http-server
   ```

2. Navigate to the project directory and run:
   ```bash
   cd Smlys
   http-server -p 8000
   ```

3. Open your browser and visit:
   ```
   http://localhost:8000
   ```

### Option 3: Using VS Code Live Server

1. Install the "Live Server" extension in VS Code
2. Right-click on `index.html` and select "Open with Live Server"

### Option 4: Direct File Opening

Simply open `index.html` in your web browser (note: some features may not work due to CORS restrictions when opening files directly).

## Features

- **Homepage**: Landing page with service overview
- **Programs**: List of available pilgrimage tours
- **Book Now**: Contact form for booking (uses Formspree)
- **About Us**: Information about the organization
- **Photo Gallery**: Slideshow of pilgrimage photos

## Technologies Used

- HTML5
- CSS3
- JavaScript (Vanilla JS & jQuery)
- Bulma CSS Framework (via CDN)
- Font Awesome Icons (via CDN)
- Formspree (for form submissions)

## Notes

- The website uses external CDN resources, so an internet connection is required for full functionality
- Form submissions are handled by Formspree service
- Firebase integration exists in `firebase.js` but appears to be unused in the current implementation

## Website

Live website: [mahalakshmiyathra.com](https://mahalakshmiyathra.com)
