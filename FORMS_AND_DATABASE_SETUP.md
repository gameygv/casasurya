# Sistema de Formularios y Base de Datos - Casa Surya Healings

## Estado: ✅ COMPLETAMENTE CONFIGURADO Y FUNCIONANDO

Todos los formularios del sitio web ahora están conectados a una base de datos Supabase segura. Los datos se guardan automáticamente y están protegidos.

---

## 🎯 ¿Qué se implementó?

### 1. **Newsletter (Boletín)**
- **Ubicación:** Footer de todas las páginas
- **Función:** Suscripción a newsletter vía Mailchimp
- **Tecnología:** Edge Function + Mailchimp API
- **URL:** `https://rsflxuraroduemodornk.supabase.co/functions/v1/newsletter-subscribe`

### 2. **Reservas (Bookings)**
- **Ubicación:** Modal de reserva en páginas de servicios y eventos
- **Función:** Guardar solicitudes de reserva en base de datos
- **Tecnología:** Edge Function + Supabase Database
- **Tabla:** `bookings`
- **URL:** `https://rsflxuraroduemodornk.supabase.co/functions/v1/submit-booking`

### 3. **Contacto**
- **Ubicación:** Página de Contacto (/contacto)
- **Función:** Guardar mensajes de contacto en base de datos
- **Tecnología:** Edge Function + Supabase Database
- **Tabla:** `contact_messages`
- **URL:** `https://rsflxuraroduemodornk.supabase.co/functions/v1/submit-contact`

---

## 📊 Base de Datos

### Tabla: `bookings`
Almacena todas las solicitudes de reserva de servicios y eventos.

**Campos:**
- `id` - Identificador único (UUID)
- `nombre` - Nombre completo del cliente
- `email` - Email del cliente
- `telefono` - Teléfono / WhatsApp
- `servicio` - Nombre del servicio (si aplica)
- `evento` - Nombre del evento (si aplica)
- `asistentes` - Número de personas (para eventos)
- `mensaje` - Mensaje opcional del cliente
- `estado` - Estado de la reserva (pending, confirmed, cancelled)
- `created_at` - Fecha y hora de creación

**Seguridad:**
- ✅ Row Level Security (RLS) activado
- ✅ Público puede crear reservas (INSERT)
- ✅ Solo usuarios autenticados pueden ver reservas (SELECT)
- ✅ Solo usuarios autenticados pueden actualizar reservas (UPDATE)

### Tabla: `contact_messages`
Almacena todos los mensajes del formulario de contacto.

**Campos:**
- `id` - Identificador único (UUID)
- `nombre` - Nombre completo
- `email` - Email
- `telefono` - Teléfono / WhatsApp
- `asunto` - Asunto del mensaje
- `mensaje` - Contenido del mensaje
- `estado` - Estado del mensaje (new, read, replied)
- `created_at` - Fecha y hora de creación

**Seguridad:**
- ✅ Row Level Security (RLS) activado
- ✅ Público puede enviar mensajes (INSERT)
- ✅ Solo usuarios autenticados pueden ver mensajes (SELECT)
- ✅ Solo usuarios autenticados pueden actualizar mensajes (UPDATE)

---

## 🔐 Seguridad Implementada

### 1. **Row Level Security (RLS)**
Todas las tablas tienen RLS activado, lo que significa que:
- Los visitantes del sitio pueden enviar información pero NO pueden ver datos de otros
- Solo administradores autenticados pueden ver y gestionar los datos
- Protección automática contra acceso no autorizado

### 2. **Edge Functions**
- Las funciones serverless procesan los formularios de forma segura
- Protección CORS implementada correctamente
- Validación de datos en el servidor
- Manejo de errores apropiado

### 3. **Protección Anti-Spam**
- Campos honeypot ocultos en todos los formularios
- Los bots que llenan estos campos son bloqueados automáticamente

---

## 📱 Cómo Acceder a los Datos

### Opción 1: Dashboard de Supabase (Recomendado)

1. **Acceder al Dashboard:**
   - URL: https://supabase.com/dashboard
   - Inicia sesión con tu cuenta de Supabase
   - Selecciona tu proyecto: `rsflxuraroduemodornk`

2. **Ver Reservas:**
   - En el menú lateral, click en "Table Editor"
   - Selecciona la tabla `bookings`
   - Verás todas las reservas con sus detalles
   - Puedes filtrar, ordenar y exportar datos

3. **Ver Mensajes de Contacto:**
   - En "Table Editor", selecciona `contact_messages`
   - Verás todos los mensajes recibidos
   - Puedes marcar como leídos o respondidos

4. **Actualizar Estado:**
   - Click en cualquier fila
   - Edita el campo `estado`
   - Para reservas: `pending`, `confirmed`, `cancelled`
   - Para mensajes: `new`, `read`, `replied`

### Opción 2: SQL Editor (Para Consultas Avanzadas)

En el Dashboard de Supabase, ve a "SQL Editor" y ejecuta consultas como:

**Ver todas las reservas pendientes:**
```sql
SELECT * FROM bookings
WHERE estado = 'pending'
ORDER BY created_at DESC;
```

**Ver mensajes nuevos:**
```sql
SELECT * FROM contact_messages
WHERE estado = 'new'
ORDER BY created_at DESC;
```

**Contar reservas por servicio:**
```sql
SELECT servicio, COUNT(*) as total
FROM bookings
WHERE servicio IS NOT NULL
GROUP BY servicio;
```

**Ver reservas de hoy:**
```sql
SELECT * FROM bookings
WHERE created_at::date = CURRENT_DATE
ORDER BY created_at DESC;
```

### Opción 3: Exportar Datos

1. En "Table Editor", selecciona la tabla
2. Click en el botón "Export" (arriba a la derecha)
3. Elige formato: CSV, JSON, etc.
4. Descarga el archivo

---

## 🧪 Probar los Formularios

### 1. Newsletter (Footer)
1. Ve a cualquier página del sitio
2. Baja al footer
3. Ingresa un email en "Suscríbete a nuestro boletín"
4. Click en "Suscribirse"
5. Verifica en Mailchimp que apareció el suscriptor

### 2. Reservas
1. Ve a la página de Servicios o Eventos
2. Click en "Reservar" en cualquier servicio/evento
3. Llena el formulario modal
4. Click en "Enviar reserva"
5. Verifica en Supabase (tabla `bookings`) que apareció la reserva

### 3. Contacto
1. Ve a la página de Contacto
2. Llena todos los campos del formulario
3. Click en "Enviar mensaje"
4. Verifica en Supabase (tabla `contact_messages`) que apareció el mensaje

---

## 📧 Configurar Notificaciones por Email (Opcional)

Puedes configurar notificaciones automáticas cuando lleguen nuevas reservas o mensajes:

### Opción A: Usando Supabase Database Webhooks

1. En Supabase Dashboard, ve a "Database" → "Webhooks"
2. Click en "Create a new webhook"
3. Configura:
   - **Table:** `bookings` (o `contact_messages`)
   - **Events:** `INSERT` (cuando se crea una nueva fila)
   - **Webhook URL:** URL de tu servicio de email (Zapier, Make, etc.)

### Opción B: Usando Supabase Edge Functions con Email Service

Puedo crear una Edge Function que envíe emails automáticamente cuando:
- Se recibe una nueva reserva
- Se recibe un nuevo mensaje de contacto

Solo necesitas indicarme a qué email quieres recibir las notificaciones.

---

## 📊 Estadísticas Útiles

Puedes ejecutar estas consultas en el SQL Editor para obtener estadísticas:

**Total de reservas por mes:**
```sql
SELECT
  DATE_TRUNC('month', created_at) as mes,
  COUNT(*) as total_reservas
FROM bookings
GROUP BY mes
ORDER BY mes DESC;
```

**Servicios más solicitados:**
```sql
SELECT
  servicio,
  COUNT(*) as veces_reservado
FROM bookings
WHERE servicio IS NOT NULL
GROUP BY servicio
ORDER BY veces_reservado DESC;
```

**Mensajes recibidos hoy:**
```sql
SELECT COUNT(*) as mensajes_hoy
FROM contact_messages
WHERE created_at::date = CURRENT_DATE;
```

---

## 🔧 Mantenimiento

### Limpiar datos antiguos (si es necesario)

**Borrar reservas canceladas de hace más de 6 meses:**
```sql
DELETE FROM bookings
WHERE estado = 'cancelled'
AND created_at < NOW() - INTERVAL '6 months';
```

**Archivar mensajes viejos respondidos:**
```sql
-- Primero exporta los datos si quieres guardarlos
-- Luego:
DELETE FROM contact_messages
WHERE estado = 'replied'
AND created_at < NOW() - INTERVAL '1 year';
```

### Hacer backup de los datos

1. Ve a "Database" → "Backups" en Supabase Dashboard
2. Supabase hace backups automáticos diarios
3. Puedes descargar un backup manual en cualquier momento

---

## ⚠️ Solución de Problemas

### Los formularios no se envían

1. **Verifica la consola del navegador:**
   - Presiona F12
   - Ve a la pestaña "Console"
   - Busca errores en rojo

2. **Verifica las variables de entorno:**
   - Las URLs de Supabase deben estar configuradas
   - Revisa el archivo `.env`

3. **Verifica que las Edge Functions estén desplegadas:**
   - Ve a Supabase Dashboard → Edge Functions
   - Deberías ver: `newsletter-subscribe`, `submit-booking`, `submit-contact`

### Los datos no aparecen en Supabase

1. **Verifica que estés autenticado:**
   - Solo usuarios autenticados pueden ver los datos
   - Los visitantes solo pueden crear registros

2. **Verifica las políticas RLS:**
   - Ve a "Authentication" → "Policies"
   - Verifica que las políticas estén activas

3. **Revisa los logs de las Edge Functions:**
   - Ve a "Edge Functions" → selecciona una función
   - Click en "Logs" para ver errores

---

## 🎯 Próximos Pasos Recomendados

1. ✅ **Configurar notificaciones por email** para nuevas reservas y mensajes
2. ✅ **Crear un dashboard de administración** para gestionar reservas
3. ✅ **Agregar confirmación automática** de reservas por email
4. ✅ **Implementar recordatorios** para eventos próximos
5. ✅ **Estadísticas y reportes** de servicios más populares

---

## 📚 Recursos

- **Supabase Dashboard:** https://supabase.com/dashboard
- **Documentación de Supabase:** https://supabase.com/docs
- **Mailchimp Dashboard:** https://mailchimp.com
- **Soporte:** casasuryahealing@gmail.com

---

## ✨ Resumen

Todo está configurado y funcionando:

✅ Newsletter conectado a Mailchimp
✅ Reservas guardándose en base de datos
✅ Mensajes de contacto guardándose en base de datos
✅ Seguridad RLS implementada
✅ Edge Functions desplegadas
✅ Protección anti-spam activa
✅ Dashboard disponible para administración

¡Tu sitio web ya está capturando y guardando información de manera segura! 🎉
