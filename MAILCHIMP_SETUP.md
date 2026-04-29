# Configuración de Mailchimp para Casa Surya Healings

## Estado: ✅ CONFIGURADO Y FUNCIONANDO

La integración con Mailchimp está completamente configurada. El formulario de suscripción al boletín en el footer del sitio web ya está enviando suscriptores directamente a tu lista de Mailchimp.

---

## Configuración Actual

### Credenciales de Mailchimp:
- **API Key:** <MAILCHIMP_API_KEY>
- **Audience ID:** b91b387919
- **Server Prefix:** us16

### Edge Function:
- **Nombre:** newsletter-subscribe
- **URL:** https://rsflxuraroduemodornk.supabase.co/functions/v1/newsletter-subscribe
- **Estado:** Desplegada y funcionando

---

## ¿Cómo funciona?

Cuando un usuario ingresa su email en el formulario de "Suscríbete a nuestro boletín" en el footer:

1. **El formulario envía el email** a una Edge Function segura en Supabase
2. **La Edge Function se conecta a Mailchimp** usando tu API key (que está protegida en el servidor)
3. **El suscriptor se agrega a tu lista** de Mailchimp automáticamente
4. **El usuario recibe confirmación** de que se suscribió correctamente

### Ventajas de esta implementación:

✅ **Seguridad:** Tu API key de Mailchimp nunca se expone en el navegador
✅ **Automático:** No requiere intervención manual
✅ **Detección de duplicados:** Si el email ya está suscrito, informa al usuario amablemente
✅ **Bilingüe:** Mensajes en español e inglés según el idioma seleccionado

---

## Probar la suscripción

1. **Ve al sitio web:** https://casasuryahealings.org
2. **Baja al footer** de cualquier página
3. **Busca la sección "Suscríbete a nuestro boletín"**
4. **Ingresa un email** de prueba
5. **Click en "Suscribirse"**
6. **Verifica en Mailchimp:**
   - Inicia sesión en https://mailchimp.com
   - Ve a "Audience" → "All contacts"
   - Deberías ver el nuevo suscriptor

---

## Gestionar tus suscriptores en Mailchimp

### Ver todos tus suscriptores:

1. Inicia sesión en https://mailchimp.com
2. Click en "Audience" en el menú superior
3. Selecciona "All contacts"
4. Aquí verás todos los emails suscritos

### Crear una campaña de email:

1. Click en "Campaigns" en el menú superior
2. Click en "Create Campaign"
3. Selecciona "Email"
4. Sigue el asistente para diseñar tu email
5. Selecciona tu audiencia (Audience ID: b91b387919)
6. Envía tu campaña

### Segmentar tu audiencia:

Mailchimp permite crear segmentos basados en:
- Fecha de suscripción
- Comportamiento (clicks, aperturas)
- Ubicación geográfica
- Campos personalizados

### Automatizaciones:

Puedes crear emails automáticos:
- **Email de bienvenida:** Se envía automáticamente cuando alguien se suscribe
- **Serie de emails:** Secuencia de emails espaciados en el tiempo
- **Emails de cumpleaños:** Si recopilas fechas de nacimiento
- **Emails basados en comportamiento**

---

## Límites del plan gratuito de Mailchimp

El plan gratuito de Mailchimp incluye:
- **500 contactos** máximo
- **1,000 envíos por mes** (puedes enviar a máximo 500 contactos)
- **1 audiencia**
- Todas las funciones básicas de email marketing
- Automatizaciones básicas
- Plantillas de email

Si necesitas más, considera actualizar a un plan de pago.

---

## Personalizar el email de bienvenida

Te recomiendo configurar un email de bienvenida automático:

1. **Ve a Mailchimp** → Audience → Signup forms → Form builder
2. **Configura el email de confirmación** (opcional)
3. **O crea una automatización:**
   - Click en "Automations"
   - "Create Automation"
   - Selecciona "Welcome new subscribers"
   - Diseña tu email de bienvenida
   - Activa la automatización

---

## Añadir más campos al formulario

Si deseas recopilar más información (nombre, teléfono, etc.), puedo modificar el formulario para incluir:

- Nombre
- Apellido
- Teléfono
- Ciudad
- Cualquier otro campo personalizado

Solo dime qué campos necesitas y los agrego.

---

## Solución de problemas

### Los suscriptores no aparecen en Mailchimp

1. **Verifica tu API key:**
   - Inicia sesión en Mailchimp
   - Ve a Account → Extras → API keys
   - Verifica que la key esté activa

2. **Verifica el Audience ID:**
   - Ve a Audience → Settings → Audience name and defaults
   - Confirma que el ID es `b91b387919`

3. **Revisa la consola del navegador:**
   - Presiona F12 en tu navegador
   - Ve a la pestaña "Console"
   - Intenta suscribirte
   - Busca errores en rojo

### Error: "Failed to subscribe"

- Verifica que tu cuenta de Mailchimp esté activa
- Confirma que no has alcanzado el límite de contactos (500 en plan gratuito)
- Revisa que tu API key no haya expirado

### Email ya suscrito

Si alguien intenta suscribirse con un email que ya está en la lista:
- Recibirá un mensaje amable: "Ya estás suscrito a nuestro boletín"
- No se creará un duplicado
- Esto es comportamiento normal y correcto

---

## Seguridad y privacidad

### Protección de datos:
- ✅ Tu API key está protegida en el servidor (Supabase Edge Functions)
- ✅ No se expone en el código del navegador
- ✅ La comunicación es encriptada (HTTPS)
- ✅ Incluye protección anti-spam (honeypot)

### Cumplimiento GDPR/CCPA:
- Los usuarios se suscriben voluntariamente
- Puedes agregar un link de "Política de Privacidad" si lo deseas
- Mailchimp incluye automáticamente un link de "Unsubscribe" en todos los emails

---

## Estadísticas y reportes

En Mailchimp puedes ver:
- **Tasa de apertura:** % de personas que abrieron tu email
- **Tasa de clicks:** % de personas que hicieron click en tus links
- **Mejor hora para enviar:** Basado en el comportamiento de tu audiencia
- **Crecimiento de tu lista:** Nuevos suscriptores por día/semana/mes
- **Ubicación geográfica:** De dónde son tus suscriptores

---

## Recursos adicionales

- **Centro de ayuda de Mailchimp:** https://mailchimp.com/help/
- **Guías de email marketing:** https://mailchimp.com/resources/
- **Plantillas de email gratuitas:** Disponibles en el editor de Mailchimp
- **Academia de Mailchimp:** Cursos gratis sobre email marketing

---

## Soporte

Si tienes problemas o preguntas:
1. Revisa esta documentación
2. Consulta el centro de ayuda de Mailchimp
3. Verifica la consola del navegador para errores técnicos
4. Contacta al soporte de Mailchimp si es un problema de su plataforma

---

## Próximos pasos recomendados

1. ✅ **Configura un email de bienvenida** en Mailchimp
2. ✅ **Crea tu primera campaña** para tus suscriptores actuales
3. ✅ **Diseña plantillas personalizadas** con los colores de Casa Surya
4. ✅ **Programa emails regulares** (semanal/mensual)
5. ✅ **Comparte noticias, eventos y promociones** con tu comunidad

¡Tu sistema de newsletter está listo para usar! 🎉
