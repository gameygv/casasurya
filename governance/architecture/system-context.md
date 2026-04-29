---
type: architecture_context
project: "casasurya"
status: active
tech_stack:
  frontend: "React 18 + TypeScript + Vite 5"
  styling: "Tailwind CSS 3.4"
  database: "Supabase (PostgreSQL)"
  serverless: "Supabase Edge Functions (Deno)"
  email: "EmailJS + Mailchimp"
  hosting: "Vercel (target)"
external_dependencies:
  - supabase
  - emailjs
  - mailchimp
  - spotify
  - youtube
users:
  - comunidad latina Washington
  - administradores Casa Surya
governed_by:
  - guardrails.md
  - prd.md
---

# System Context: casasurya

> C4 Level 1 — Contexto del sistema Casa Surya Healings

## Overview

Sitio web público de Casa Surya Healings, organización sin fines de lucro de terapias holísticas para la comunidad latina en Washington. El sistema permite explorar servicios, reservar citas, inscribirse a eventos, suscribirse al newsletter y contactar a la organización. Es una SPA (Single Page Application) con backend serverless.

## Context Diagram

```
┌─────────────────┐       ┌───────────────────┐       ┌─────────────────┐
│   Visitantes    │──────►│   Casa Surya Web  │◄──────│   Supabase      │
│   (ES/EN)       │  HTTP │   (React SPA)     │ REST  │   (PostgreSQL + │
│                 │       │                   │       │    Edge Funcs)  │
└─────────────────┘       └───────┬───┬───┬───┘       └─────────────────┘
                                  │   │   │
                          ┌───────┘   │   └───────┐
                          ▼           ▼           ▼
                   ┌──────────┐ ┌──────────┐ ┌──────────┐
                   │ EmailJS  │ │ Mailchimp│ │ Spotify/ │
                   │ (email)  │ │ (news-   │ │ YouTube  │
                   │          │ │  letter) │ │ (podcast)│
                   └──────────┘ └──────────┘ └──────────┘
```

## External Interfaces

| System | Direction | Protocol | Description |
|--------|-----------|----------|-------------|
| Supabase Cloud | Bidirectional | REST/HTTPS | Base de datos PostgreSQL para bookings y mensajes de contacto. Edge Functions para newsletter y persistencia. Proyecto: `rsflxuraroduemodornk` |
| EmailJS | Outbound | HTTPS | Envío de emails transaccionales para formularios de contacto y reservación. Templates: booking (`template_2nwib0o`), contacto (`template_epodgll`) |
| Mailchimp | Outbound | HTTPS | Gestión de lista de newsletter. Invocado desde Supabase Edge Function. Audiencia: `b91b387919`, servidor: `us16` |
| Spotify | Embed | HTTPS | Reproductor embebido del podcast de Casa Surya |
| YouTube | Embed | HTTPS | Canal de videos embebidos. Canal: `@casasuryahealingsofficial` |
| WhatsApp | Outbound | deeplink | Botón flotante de chat directo. Número: +1 206 393 2804 |
| Google Maps | Outbound | deeplink | Enlace a ubicación física: 614 SW 136th St Burien 98166, WA |
| Facebook | Outbound | HTTPS | Página: `casaSuryahealing` |
| Instagram | Outbound | HTTPS | Perfil: `casasuryahealing` |

## Users

| Actor | Description | Interaction |
|-------|-------------|-------------|
| Visitante (público) | Persona interesada en servicios holísticos, principalmente comunidad latina en Washington | Navega servicios, eventos, podcast. Reserva citas. Envía mensajes de contacto. Se suscribe a newsletter |
| Administrador | Personal de Casa Surya Healings | Acceso a BD Supabase para ver reservaciones y mensajes (sin dashboard actual) |
