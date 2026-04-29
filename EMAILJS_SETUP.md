# Configuración de EmailJS para Casa Surya Healings

## Estado: ✅ CONFIGURADO

EmailJS ya está completamente configurado y funcionando en el sitio web. Los formularios de contacto y reservas están enviando correos electrónicos correctamente.

### Configuración Actual:
- **Service ID:** service_z0qeibu (Gmail)
- **Template Booking:** template_2nwib0o (Casa Surya - Booking)
- **Template Contact:** template_epodgll (Casa Surya - Contact)
- **Public Key:** jmzQeg2B0BZZgHV4v

---

## Referencia: Instrucciones de configuración original

Este documento proporciona las instrucciones paso a paso para configurar EmailJS y activar el envío de correos electrónicos desde los formularios de la página web.

## Paso 1: Crear una cuenta en EmailJS

1. Ve a [https://www.emailjs.com/](https://www.emailjs.com/)
2. Haz clic en "Sign Up" para crear una cuenta gratuita
3. Completa el registro con tu correo electrónico

## Paso 2: Conectar tu servicio de correo

1. Una vez que hayas iniciado sesión, ve a la sección **"Email Services"** en el panel izquierdo
2. Haz clic en **"Add New Service"**
3. Selecciona tu proveedor de correo (Gmail, Outlook, Yahoo, etc.)
4. Sigue las instrucciones para conectar tu cuenta de correo
5. **Guarda el Service ID** que se genera (lo necesitarás más adelante)

### Ejemplo con Gmail:
- Selecciona "Gmail"
- Haz clic en "Connect Account"
- Autoriza el acceso a tu cuenta de Gmail
- Configura el nombre del servicio (por ejemplo: "Casa Surya Gmail")
- Copia el **Service ID** (ejemplo: `service_xxxxxxx`)

## Paso 3: Crear las plantillas de correo

Necesitas crear **2 plantillas** diferentes: una para reservas y otra para contacto.

### Plantilla 1: Reservas (Bookings)

1. Ve a la sección **"Email Templates"** en el panel izquierdo
2. Haz clic en **"Create New Template"**
3. Configura la plantilla con estos parámetros:

**Nombre de la plantilla:** `Casa Surya - Booking`

**Asunto del correo:**
```
Nueva reserva de {{from_name}}
```

**Contenido del correo:**
```
Nueva solicitud de reserva recibida:

Nombre: {{from_name}}
Email: {{from_email}}
Teléfono: {{phone}}
Servicio/Evento: {{service_or_event}}
Asistentes: {{attendees}}

Mensaje:
{{message}}

---
Este correo fue enviado desde el formulario de reservas de Casa Surya Healing
```

4. Haz clic en **"Save"**
5. **Copia el Template ID** (ejemplo: `template_xxxxxxx`)

### Plantilla 2: Contacto (Contact)

1. Crea otra plantilla haciendo clic en **"Create New Template"**
2. Configura la plantilla con estos parámetros:

**Nombre de la plantilla:** `Casa Surya - Contact`

**Asunto del correo:**
```
Nuevo mensaje de contacto: {{subject}}
```

**Contenido del correo:**
```
Nuevo mensaje de contacto recibido:

Nombre: {{from_name}}
Email: {{from_email}}
Teléfono: {{phone}}
Asunto: {{subject}}

Mensaje:
{{message}}

---
Este correo fue enviado desde el formulario de contacto de Casa Surya Healing
```

3. Haz clic en **"Save"**
4. **Copia el Template ID** (ejemplo: `template_yyyyyyy`)

## Paso 4: Obtener tu Public Key

1. Ve a la sección **"Account"** en el panel izquierdo
2. Busca la sección **"API Keys"**
3. **Copia tu Public Key** (ejemplo: `xxxxxxxxxxxxxx`)

## Paso 5: Configurar las variables de entorno

Ahora necesitas agregar las credenciales a tu archivo `.env` en el proyecto:

1. Abre el archivo `.env` en la raíz del proyecto
2. Agrega estas líneas con tus valores reales:

```env
VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
VITE_EMAILJS_TEMPLATE_ID_BOOKING=template_xxxxxxx
VITE_EMAILJS_TEMPLATE_ID_CONTACT=template_yyyyyyy
VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxx
```

**Reemplaza:**
- `service_xxxxxxx` con tu Service ID del Paso 2
- `template_xxxxxxx` con tu Template ID de Bookings del Paso 3
- `template_yyyyyyy` con tu Template ID de Contact del Paso 3
- `xxxxxxxxxxxxxx` con tu Public Key del Paso 4

## Paso 6: Reiniciar el servidor de desarrollo

Para que las nuevas variables de entorno surtan efecto:

1. Detén el servidor si está corriendo (Ctrl+C)
2. Vuelve a iniciar el servidor con `npm run dev`

## Paso 7: Probar los formularios

Ahora puedes probar los formularios en tu sitio web:

1. **Formulario de Reservas**: Ve a la página de "Servicios y Terapias" y llena el formulario de reserva
2. **Formulario de Contacto**: Ve a la página de "Contacto" y envía un mensaje de prueba

Deberías recibir los correos en la dirección de email que configuraste en el Paso 2.

## Formularios activos en el sitio

Los siguientes formularios están configurados para enviar correos a través de EmailJS:

1. **Formulario de Reservas** (`/servicios`)
   - Permite reservar cualquier servicio o terapia
   - Usa el template de Bookings

2. **Formulario de Contacto** (`/contacto`)
   - Para mensajes generales
   - Usa el template de Contact

3. **Modal de Reservas** (se abre desde varios lugares del sitio)
   - Se usa para reservar servicios específicos o eventos
   - Usa el template de Bookings

## Solución de problemas

### Los correos no llegan

1. Verifica que las variables de entorno estén correctamente escritas en el archivo `.env`
2. Asegúrate de haber reiniciado el servidor después de agregar las variables
3. Revisa la consola del navegador (F12) para ver si hay errores
4. Verifica que tu servicio de correo esté correctamente conectado en EmailJS

### Error de autenticación

1. Ve a EmailJS y verifica que tu servicio de correo siga conectado
2. Es posible que necesites reconectar tu cuenta de correo
3. Verifica que tu Public Key sea correcta

### Los correos van a spam

1. En EmailJS, configura un correo de "Reply-To" para que las respuestas vayan directamente a tu email
2. Considera agregar el dominio de EmailJS a tu lista de remitentes seguros

## Límites del plan gratuito de EmailJS

El plan gratuito incluye:
- **200 correos por mes**
- Todos los servicios de correo principales
- Todas las características básicas

Si necesitas enviar más correos, considera actualizar a un plan de pago.

## Soporte

Si tienes problemas con la configuración, puedes:
- Consultar la documentación oficial: [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
- Contactar al soporte de EmailJS
- Revisar los logs en la consola del navegador para identificar errores específicos
