---
type: guardrails
version: "1.0.0"
---

# Guardrails: casasurya

> Convenciones de código y arquitectura detectadas del codebase existente (bolt.new v75)

---

## Guardrails Activos

### Code Quality

| ID | Level | Guardrail | Verification | Derived from |
|----|-------|-----------|--------------|--------------|
| GR-01 | must | TypeScript estricto en todo el código fuente | `npm run typecheck` pasa sin errores | tsconfig.app.json |
| GR-02 | must | ESLint sin errores | `npm run lint` pasa | eslint.config.js |
| GR-03 | must | Build de producción exitoso | `npm run build` genera dist/ sin errores | vite.config.ts |
| GR-04 | should | Componentes React como función con tipos explícitos | Revisión de código | Convención existente |

### Architecture

| ID | Level | Guardrail | Verification | Derived from |
|----|-------|-----------|--------------|--------------|
| GR-05 | must | Separación páginas vs componentes: pages/ para rutas, components/ para reutilizables | Estructura de directorios | Convención bolt.new |
| GR-06 | must | Datos estáticos en src/data/, no hardcodeados en componentes | Revisión de servicios/eventos | services.ts, events.ts |
| GR-07 | must | Variables de entorno con prefijo VITE_ para valores expuestos al cliente | grep VITE_ en .env | Convención Vite |
| GR-08 | must | Supabase Edge Functions para operaciones server-side (newsletter, bookings, contact) | Revisión de supabase/functions/ | Arquitectura existente |

### Security

| ID | Level | Guardrail | Verification | Derived from |
|----|-------|-----------|--------------|--------------|
| GR-09 | must | Honeypot field en todos los formularios públicos | Revisión de componentes con forms | Implementación existente |
| GR-10 | must | Rate limiting client-side en botones de submit (2s mínimo) | Revisión de handlers | Implementación existente |
| GR-11 | must | RLS habilitado en todas las tablas Supabase | Revisión de migraciones | Migraciones SQL |
| GR-12 | must | Secretos (API keys server-side) NUNCA en código fuente ni VITE_ vars | Revisión de .env y código | Política de seguridad |

### i18n

| ID | Level | Guardrail | Verification | Derived from |
|----|-------|-----------|--------------|--------------|
| GR-13 | must | Todo contenido visible al usuario debe tener traducción ES/EN | Verificar función t() en LanguageContext | LanguageContext.tsx |
| GR-14 | should | Nuevos componentes usan useLanguage() hook, no texto hardcodeado | Revisión de código | Convención existente |

### Styling

| ID | Level | Guardrail | Verification | Derived from |
|----|-------|-----------|--------------|--------------|
| GR-15 | must | Tailwind CSS para estilos, no CSS custom excepto index.css base | Revisión de componentes | Convención existente |
| GR-16 | should | Diseño mobile-first responsivo (sm → md → lg → xl) | Verificación visual | Convención Tailwind |
| GR-17 | should | Paleta de colores: amber-600 (primario), stone-700 (secundario), stone-900 (acento) | Consistencia visual | Diseño existente |
