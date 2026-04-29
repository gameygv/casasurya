---
type: architecture_design
project: "casasurya"
status: active
layers:
  - name: presentation
    description: "React SPA — pages, components, context, routing"
  - name: data
    description: "Supabase PostgreSQL — bookings, contact_messages"
  - name: serverless
    description: "Supabase Edge Functions — newsletter, booking, contact"
  - name: external
    description: "EmailJS, Mailchimp, Spotify, YouTube, WhatsApp"
---

# System Design: casasurya

> C4 Level 2 — Descomposición de componentes

## Architecture Overview

SPA (Single Page Application) construida con React 18 + TypeScript + Vite. Estilizado con Tailwind CSS. Enrutamiento client-side con React Router DOM v7. Internacionalización via React Context. Backend serverless con Supabase (PostgreSQL + Edge Functions). Email transaccional con EmailJS. Newsletter con Mailchimp via Edge Function.

## Components

| Component | Responsibility | Technology |
|-----------|---------------|------------|
| **App Router** | Enrutamiento SPA, layout principal | React Router DOM v7 |
| **LanguageContext** | Estado global de idioma (ES/EN), función de traducción `t()`, +400 claves | React Context + hook |
| **Pages (9)** | Vistas de cada ruta: Home, About, Services, ServiceDetail, Events, EventDetail, Podcast, Contact, HouseWarmingParty | React components |
| **Header** | Navegación sticky, menú mobile hamburger, toggle idioma, logo, links sociales | React + Tailwind |
| **Footer** | Info de contacto, links de navegación, newsletter signup, redes sociales | React + Tailwind |
| **HeroSlider** | Carrusel de imágenes hero con transiciones suaves | React state + CSS |
| **MasonryGallery** | Galería masonry responsiva con lightbox (zoom, prev/next, contador) | React + CSS Grid |
| **BookingModal** | Modal de reservación para servicios/eventos. Honeypot + rate limiting | React + EmailJS |
| **RecurringEventModal** | Modal para detalles de eventos recurrentes | React |
| **VideoCarousel / VideoGrid** | Reproducción de videos del proyecto | React + HTML5 Video |
| **WhatsAppButton** | Botón flotante de chat WhatsApp (esquina inferior derecha) | React + deeplink |
| **Toast** | Notificaciones de éxito/error para formularios | React |
| **TestimonialCard** | Tarjeta de testimonios con imagen y texto | React + Tailwind |
| **Supabase Client** | Conexión a Supabase Cloud para persistencia | @supabase/supabase-js |
| **Edge Function: newsletter-subscribe** | Valida email, llama Mailchimp API, maneja duplicados | Deno (Supabase Edge) |
| **Edge Function: submit-booking** | Valida datos, inserta en tabla `bookings` | Deno (Supabase Edge) |
| **Edge Function: submit-contact** | Valida datos, inserta en tabla `contact_messages` | Deno (Supabase Edge) |

## Data Model

### Tabla: bookings
| Campo | Tipo | Notas |
|-------|------|-------|
| id | UUID | PK, auto-generado |
| nombre | text | Nombre completo |
| email | text | Email del solicitante |
| telefono | text | Teléfono |
| servicio | text? | Servicio solicitado |
| evento | text? | Evento solicitado |
| asistentes | integer | Default: 1 |
| mensaje | text? | Mensaje adicional |
| estado | text | pending / confirmed / cancelled |
| created_at | timestamptz | Auto |

### Tabla: contact_messages
| Campo | Tipo | Notas |
|-------|------|-------|
| id | UUID | PK, auto-generado |
| nombre | text | Nombre |
| email | text | Email |
| telefono | text | Teléfono |
| asunto | text | Asunto del mensaje |
| mensaje | text | Cuerpo |
| estado | text | new / read / replied |
| created_at | timestamptz | Auto |

## Key Decisions

- **SPA vs SSR**: Se eligió SPA (Vite + React) sobre SSR (Next.js) — simplicidad de despliegue, contenido mayormente estático. Trade-off: SEO limitado a meta tags estáticos.
- **EmailJS + Supabase dual**: Formularios envían email via EmailJS (notificación inmediata al staff) Y persisten en Supabase (registro y futura gestión). Redundancia intencional.
- **Datos estáticos en código**: Servicios y eventos viven en `src/data/` como arrays TypeScript. Decisión de bolt.new para simplicidad. Migración a Supabase planificada en E3.
- **Tailwind sobre CSS custom**: Consistencia visual, prototipado rápido, responsive utilities. Solo `index.css` tiene estilos globales (fonts, base).
- **Sin autenticación actual**: No hay dashboard admin ni login. Gestión via Supabase Dashboard directo. Planificado en E6.
