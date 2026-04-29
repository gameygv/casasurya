# Casa Surya Healings - Official Website

Complete multi-page website for Casa Surya Healings, a non-profit organization providing holistic and ancestral healing practices to the Latino community in Washington state.

## ✅ PROYECTO COMPLETADO - PARTE 1 Y 2

### Features Implemented

**✅ Part 1 - Base Structure (COMPLETED)**
- Multi-page architecture (6 main pages)
- Spanish/English internationalization
- Responsive design with Tailwind CSS
- Header with sticky navigation
- Footer with social links
- Component library (Hero, Gallery, Video Grid, Testimonials, etc.)

**✅ Part 2 - Advanced Features (COMPLETED)**

#### 1. EmailJS Integration 📧
- **Contact Form** - Full integration with EmailJS
- **Newsletter Form** (Home + Footer) - Subscription with validation
- **Booking Modal** - For services and events
- **Anti-spam measures**: Honeypot field + rate limiting
- **User feedback**: Toast notifications for success/error states

#### 2. Services System 🌿
- **8 Complete Services** with detailed data:
  - Reiki (3 gallery images)
  - Quantum Balance (7 gallery images)
  - Barras de Access (1 gallery image)
  - Masaje Terapéutico (4 gallery images)
  - Integración y Liberación Emocional (4 gallery images)
  - Limpias Energéticas (7 gallery images)
  - Curación de Susto y Espanto
  - Temazcal (10 gallery images)

- **Service Detail Pages** (`/servicios/[slug]`):
  - Hero image + description
  - Benefits list
  - "What to expect" section
  - Image gallery with lightbox
  - Booking modal integration
  - Responsive design

#### 3. Events System 📅
- **Real Data Model** with 4 events:
  - Cantos Medicina (Featured, Free)
  - Círculo de Palabra (Featured, Free)
  - Ceremonia de Temazcal (Paid - $40)
  - Meditación Comunitaria (Free)

- **Events Page Features**:
  - Tab navigation (Upcoming / Calendar)
  - Category filters (All / Free / Paid)
  - Calendar month view with event indicators
  - Event cards with all details
  - Featured event badges

- **Event Detail Pages** (`/eventos/[slug]`):
  - Full event information
  - Date, time, location display
  - Pricing (if applicable)
  - Booking integration
  - Responsive layout

#### 4. Podcast Page 🎙️
- **Spotify Integration**:
  - Embedded Spotify player
  - Direct link to podcast

- **YouTube Integration**:
  - Embedded video player/playlist
  - Link to full channel
  - Professional presentation

#### 5. Enhanced Home Page 🏠
- Featured events from real data
- Newsletter form with EmailJS
- All components with proper state management
- Smooth scroll to donations section

## Tech Stack

- **Framework:** React 18 with TypeScript
- **Routing:** React Router DOM v7
- **Styling:** Tailwind CSS
- **Email:** EmailJS (@emailjs/browser)
- **Icons:** Lucide React
- **Build Tool:** Vite
- **Fonts:** Cormorant (serif) + Inter (sans-serif)

## Environment Variables

Required in `.env` file:

```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID_CONTACT=your_contact_template_id
VITE_EMAILJS_TEMPLATE_ID_NEWSLETTER=your_newsletter_template_id
VITE_EMAILJS_TEMPLATE_ID_BOOKING=your_booking_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

## File Structure

```
src/
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx (with EmailJS)
│   ├── HeroSlider.tsx
│   ├── MasonryGallery.tsx
│   ├── VideoGrid.tsx
│   ├── TestimonialCard.tsx
│   ├── PageHero.tsx
│   ├── BookingModal.tsx (EmailJS integrated)
│   └── Toast.tsx
├── context/
│   └── LanguageContext.tsx
├── data/
│   ├── services.ts (8 services with full details)
│   └── events.ts (4 events with all information)
├── pages/
│   ├── Home.tsx (with featured events + EmailJS)
│   ├── About.tsx
│   ├── Services.tsx (with booking modal)
│   ├── ServiceDetail.tsx (dynamic pages)
│   ├── Events.tsx (with calendar)
│   ├── EventDetail.tsx (dynamic pages)
│   ├── Podcast.tsx (with Spotify + YouTube embeds)
│   └── Contact.tsx (with EmailJS)
└── App.tsx
```

## Routes

- `/` - Home with featured events
- `/nosotros` - About page
- `/servicios` - Services listing
- `/servicios/:slug` - Service detail (8 dynamic pages)
- `/eventos` - Events with calendar
- `/eventos/:slug` - Event detail (4 dynamic pages)
- `/podcast` - Podcast with embeds
- `/contacto` - Contact form

## Key Features

### Forms with EmailJS
- All forms include honeypot anti-spam protection
- 2-second rate limiting on submit buttons
- Success/error toast notifications
- Form validation (required fields, email format)
- Responsive design

### Data Management
- Centralized data files for services and events
- Bilingual content (ES/EN)
- Type-safe TypeScript interfaces
- Easy to add/modify services and events

### User Experience
- Smooth page transitions
- Loading states on form submissions
- Error handling with user-friendly messages
- Accessible navigation and focus states
- Mobile-optimized design

### Design System
- **Colors**: Gold/Amber primary, Stone/Charcoal secondary, Sage/Olive accents
- **Typography**: Cormorant for headings, Inter for body text
- **Animations**: Subtle fade-ins, hover effects, smooth transitions
- **Layout**: Consistent spacing (8px system), responsive breakpoints

## Social Media

- Facebook: https://www.facebook.com/casaSuryahealing
- Instagram: https://www.instagram.com/casasuryahealing/
- Spotify: https://open.spotify.com/show/06GeMnY1Ar8APRWmrrNhwu
- YouTube: https://www.youtube.com/@casasuryahealingsofficial

## Contact Information

- **Address:** 614 SW 136th St Burien 98166, Washington USA
- **Phone/WhatsApp:** +1 206 393 2804
- **Email:** casasuryahealing@gmail.com

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## EmailJS Setup Instructions

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Create a service (Gmail, Outlook, etc.)
3. Create 3 email templates:
   - Contact form template
   - Newsletter subscription template
   - Booking request template
4. Copy your Service ID, Template IDs, and Public Key
5. Add them to your `.env` file
6. Test forms to ensure emails are sending

## Production Ready

✅ All features implemented and tested
✅ Build compiles successfully
✅ Responsive design across devices
✅ SEO-friendly structure
✅ Accessible navigation
✅ Performance optimized
✅ Type-safe codebase

## Project Status

**Part 1:** ✅ COMPLETED
**Part 2:** ✅ COMPLETED

All features requested in both parts have been successfully implemented:
- EmailJS integration in all forms
- Complete services system with detail pages
- Full events system with calendar and real data
- Podcast page with Spotify and YouTube embeds
- Enhanced UI/UX with toasts and modals
- Professional design maintained throughout

The website is production-ready and fully functional!
