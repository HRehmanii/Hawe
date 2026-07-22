# Hawe Palani – Psykolog & Coach

A professional website for Hawe Palani, a psychologist and coach offering therapy, coaching, and nature-based conversations in Oslo.

## 📋 Overview

This is a modern, responsive website built with HTML, CSS, and vanilla JavaScript. It showcases Hawe's services including individual therapy, nature-based coaching, digital sessions, and phone consultations.

**Website Purpose:**
- Present qualifications and services
- Enable potential clients to book free initial consultations
- Share philosophy around nature-based therapy
- Build trust through professional design and clear communication

## 🏗️ Project Structure

```
.
├── hovedside.html       # Main landing page (homepage)
├── ommeg.html          # About page
├── tjenester.html      # Services page
├── samtaler.html       # Nature conversations page
├── style.css           # Global styles and design system
├── javascript.js       # Interactive functionality
└── README.md          # This file
```

## 📄 Pages

### hovedside.html (Landing Page)
- Hero section with welcome message and portrait
- "Om meg" (About) section with qualifications
- Services overview grid
- Nature therapy benefits section
- Contact section with form
- Footer

### ommeg.html (About Page)
- Extended biography
- Professional philosophy
- Nature-based approach explanation
- Trust-building narrative

### tjenester.html (Services Page)
- Service offerings with pricing
- Free initial consultation details
- Call-to-action for booking

### samtaler.html (Nature Conversations)
- Benefits of outdoor therapy
- Who this service is for
- Pacing and philosophy

## 🎨 Design System

### Color Palette
- **Forest Deep**: `#2F5B3C` – Primary dark green
- **Forest Mid**: `#4B7A56` – Secondary green
- **Forest Light**: `#7A9B78` – Tertiary green
- **Gold**: `#C7A178` – Accent color
- **Cream/Surface**: `#F9F1E7` – Light background
- **Text**: `#F5EBDD` – Light text on dark backgrounds

### Typography
- **Display Font**: Playfair Display (serif) – Headlines and branding
- **Body Font**: Inter (sans-serif) – Body text and UI

### Spacing & Sizing
Consistent spacing scale using CSS custom properties for responsive layouts.

## ⚙️ Key Features

### Responsive Design
- Mobile-first approach
- Breakpoints: 900px, 680px
- Burger menu for mobile navigation
- Fluid typography using `clamp()`

### Interactive Elements
- **Mobile Navigation**: Hamburger menu with smooth animations
- **Scroll Animations**: Fade-up effects as sections come into view
- **Form Validation**: Contact form with email validation
- **Active Nav Highlighting**: Smooth navigation highlight based on scroll position
- **Scroll State**: Navigation bar styling changes on scroll

### Accessibility
- Semantic HTML structure
- ARIA labels for interactive elements
- `prefers-reduced-motion` support
- Proper heading hierarchy

## 🚀 Getting Started

### Installation
No build process required. Simply open `hovedside.html` in a browser or deploy to a web server.

### Local Development
```bash
# Navigate to project directory
cd Hawe

# Open in browser (macOS)
open hovedside.html

# Or use a local server
python -m http.server 8000
# Visit http://localhost:8000
```

## 📝 JavaScript Features

### Navigation
- Fixed navigation with scroll state detection
- Mobile burger menu with animated icon
- Active section highlighting
- Smooth scrolling (native HTML)

### Animations
- Intersection Observer for fade-in effects
- Staggered card animations
- Smooth transitions throughout

### Form Handling
- Contact form validation
- Email format verification
- User feedback messages
- Form reset after submission (simulated)

## 🔧 Form Submission

Currently, the contact form is a client-side simulation. To enable actual email submissions, integrate with:
- A backend service (Node.js, Python, etc.)
- Email API (SendGrid, Mailgun, etc.)
- Form service (Formspree, Basin, etc.)

Replace the timeout simulation in `javascript.js` with your chosen solution.

## 🎯 Performance Considerations

- Optimized images (consider WebP format)
- Minimal CSS (no frameworks)
- No external dependencies
- Lazy loading ready for future images
- SVG decorative elements for scalability

## 📱 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🌐 Deployment

### Static Hosting Options
- Vercel
- Netlify
- GitHub Pages
- Traditional web hosting

### Pre-deployment Checklist
- [ ] Update contact form endpoint
- [ ] Test on multiple devices
- [ ] Verify all links work
- [ ] Check image paths
- [ ] Test form validation
- [ ] Optimize images

## 📧 Contact Integration

The current form setup is a placeholder. To make it functional:

1. Choose a backend/email service
2. Update the form submission handler in `javascript.js`
3. Add server-side validation
4. Configure email templates

## 🔒 Privacy & Compliance

- Client information is confidential (as noted on form)
- Ensure GDPR compliance if serving EU clients
- Consider HIPAA compliance for health-related information
- Add privacy policy page if needed

## 📄 License

© 2026 Hawe Palani. All rights reserved.

## 🤝 Support

For questions or issues, please contact:
- **Email**: kontakt@hawzhinpalani.no
- **Phone**: +47 999 99 999
- **Location**: Oslo og omegn

---

**Last Updated**: 2026
