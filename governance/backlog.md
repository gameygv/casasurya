# Backlog: casasurya

> **Status**: Active

## Epics

| ID | Epic | Status | Scope | Priority |
|----|------|--------|-------|----------|
| E1 | Migración a Vercel y CI/CD | planned | Desplegar en Vercel, configurar dominio, CI/CD con GitHub | high |
| E2 | Panel de Administración | planned | Dashboard para gestionar reservaciones, mensajes de contacto y eventos | high |
| E3 | Sistema de Eventos Dinámico | planned | Migrar eventos hardcodeados a Supabase, CRUD desde admin | medium |
| E4 | Optimización de Rendimiento | planned | Lazy loading de imágenes/videos, code splitting, CDN para media | medium |
| E5 | Donaciones en Línea | planned | Integrar pasarela de pago para donaciones (Stripe/PayPal) | medium |
| E6 | Autenticación y Roles | planned | Supabase Auth para admin, proteger rutas de administración | high |
| E7 | Mejoras de Accesibilidad y SEO | planned | ARIA labels, alt texts, sitemap, structured data, meta tags dinámicos | low |

## Notas

- E1 es prerequisito para desarrollo continuo (actualmente desplegado desde bolt.new)
- E6 es prerequisito para E2 y E3
- E5 depende de decisión organizacional sobre pasarela de pago
