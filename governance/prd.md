# PRD: casasurya

> Product Requirements Document — sitio web de Casa Surya Healings

---

## Problem

La comunidad latina en Washington necesita acceso a servicios de sanación holística y ancestral en su idioma, con una plataforma digital que permita descubrir servicios, reservar citas, inscribirse a eventos y mantenerse informada. Actualmente no existe una presencia web profesional bilingüe que unifique estos canales.

## Goals

- Ofrecer información completa de 8 servicios terapéuticos con galerías visuales y descripciones detalladas
- Permitir reservaciones en línea para servicios y eventos
- Mantener un calendario de eventos comunitarios recurrentes y especiales
- Facilitar la comunicación directa (formularios, WhatsApp, email)
- Soportar español e inglés de forma nativa
- Integrar newsletter para mantener a la comunidad informada

---

## Requirements

### RF-01: Catálogo de Servicios

Presentar 8 servicios terapéuticos con página de detalle individual que incluya: descripción bilingüe, galería de imágenes con lightbox, beneficios, qué esperar, y CTA de reservación. Servicios: Reiki, Quantum Balance, Barras de Access, Masaje Terapéutico, Integración y Liberación Emocional, Limpias Energéticas, Curación de Susto y Espanto, Temazcal.

### RF-02: Sistema de Reservaciones

Modal de reservación accesible desde servicios y eventos. Campos: nombre, email, teléfono, servicio/evento, número de asistentes, mensaje. Envío dual: EmailJS (notificación inmediata) + Supabase (persistencia en BD). Protección anti-spam con honeypot y rate limiting.

### RF-03: Gestión de Eventos

Página de eventos con tres categorías: eventos especiales (fechas únicas), eventos recurrentes (calendario mensual), y eventos destacados. Cada evento con página de detalle, imagen, descripción bilingüe, ubicación, precio (si aplica) y registro.

### RF-04: Soporte Bilingüe (ES/EN)

Sistema de internacionalización completo con LanguageContext de React. Toggle de idioma en header. Más de 400 claves de traducción cubriendo: navegación, contenido de páginas, formularios, mensajes de validación, notificaciones toast.

### RF-05: Newsletter y Comunicación

Formulario de suscripción a newsletter integrado en footer (todas las páginas). Pipeline: frontend → Supabase Edge Function → Mailchimp API. Manejo de duplicados. Mensajes de confirmación bilingües.

### RF-06: Página de Contacto

Formulario de contacto con campos: nombre, email, teléfono, asunto, mensaje. Integración EmailJS para notificación. Persistencia en Supabase (tabla contact_messages). Enlace a Google Maps, teléfono directo, WhatsApp.

### RF-07: Contenido Multimedia

Galerías de imágenes con layout masonry y lightbox (navegación prev/next, contador). Carruseles de video. Integración de podcast con reproductor Spotify embebido y canal YouTube.

### RF-08: SEO y Presencia Social

Meta tags OpenGraph configurados para compartir en redes sociales. Tags de Twitter Card. Favicon personalizado. Links a Facebook, Instagram, Spotify, YouTube.
