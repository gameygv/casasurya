# OpenGraph Configuration - Casa Surya Healings

## Estado: ✅ CONFIGURADO

Los meta tags de OpenGraph ya están completamente configurados en el sitio web. Cuando compartas el link en WhatsApp, Facebook, Twitter u otras redes sociales, debería aparecer:

- **Título:** Casa Surya Healings - Terapias Holísticas y Sanación Energética
- **Descripción:** Descubre terapias holísticas y sanación energética en Casa Surya. Reiki, masajes, temazcal, limpias energéticas, eventos comunitarios gratuitos y más.
- **Imagen:** Logo de Casa Surya (logocasasurya.png)
- **URL:** https://casasuryahealings.org/

---

## ¿No aparece la imagen al compartir el link?

Si al compartir el link en WhatsApp o Facebook no aparece la imagen del logo, es probable que haya un problema de **cache**. Las redes sociales guardan en cache la información de los sitios web durante varios días.

### Solución: Forzar la actualización del cache

#### Para Facebook y WhatsApp:

1. **Ve al Facebook Sharing Debugger:**
   - Abre: https://developers.facebook.com/tools/debug/

2. **Ingresa la URL de tu sitio:**
   - Escribe: `https://casasuryahealings.org/`
   - Haz clic en "Debug" o "Depurar"

3. **Actualiza el cache:**
   - Haz clic en el botón **"Scrape Again"** o **"Volver a extraer"**
   - Esto forzará a Facebook/WhatsApp a volver a leer los meta tags de tu sitio

4. **Verifica que aparezca correctamente:**
   - Deberías ver el título, descripción e imagen del logo de Casa Surya
   - Si aparece correctamente aquí, también aparecerá en WhatsApp

5. **Prueba en WhatsApp:**
   - Envía el link en un chat de WhatsApp
   - Ahora debería aparecer con la imagen del logo

#### Para Twitter:

1. **Ve al Twitter Card Validator:**
   - Abre: https://cards-dev.twitter.com/validator

2. **Ingresa la URL:**
   - Escribe: `https://casasuryahealings.org/`
   - Haz clic en "Preview card"

3. **Verifica la vista previa:**
   - Deberías ver cómo se verá el tweet con el logo

#### Para LinkedIn:

1. **Ve al LinkedIn Post Inspector:**
   - Abre: https://www.linkedin.com/post-inspector/

2. **Ingresa la URL:**
   - Escribe: `https://casasuryahealings.org/`
   - Haz clic en "Inspect"

3. **Actualiza el cache si es necesario**

---

## Verificar que la imagen del logo sea accesible

La imagen del logo debe estar disponible en:
- **URL:** https://casasuryahealings.org/media/logocasasurya.png
- **Ubicación local:** `/public/media/logocasasurya.png`

Si la imagen no carga, verifica que:
1. El archivo existe en la carpeta `/public/media/`
2. El nombre del archivo es exactamente: `logocasasurya.png` (minúsculas)
3. El archivo es una imagen PNG válida
4. El tamaño recomendado es **1200x630 píxeles** para mejor visualización en redes sociales

---

## Meta tags configurados

Los siguientes meta tags están configurados en `index.html`:

```html
<!-- Open Graph / Facebook -->
<meta property="og:type" content="website" />
<meta property="og:url" content="https://casasuryahealings.org/" />
<meta property="og:title" content="Casa Surya Healings - Terapias Holísticas y Sanación Energética" />
<meta property="og:description" content="Descubre terapias holísticas y sanación energética en Casa Surya. Reiki, masajes, temazcal, limpias energéticas, eventos comunitarios gratuitos y más." />
<meta property="og:image" content="https://casasuryahealings.org/media/logocasasurya.png" />
<meta property="og:image:secure_url" content="https://casasuryahealings.org/media/logocasasurya.png" />
<meta property="og:image:type" content="image/png" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:image:alt" content="Casa Surya Healings Logo" />
<meta property="og:site_name" content="Casa Surya Healings" />
<meta property="og:locale" content="es_MX" />
<meta property="og:locale:alternate" content="en_US" />

<!-- Twitter -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:url" content="https://casasuryahealings.org/" />
<meta name="twitter:title" content="Casa Surya Healings - Terapias Holísticas y Sanación Energética" />
<meta name="twitter:description" content="Descubre terapias holísticas y sanación energética en Casa Surya. Reiki, masajes, temazcal, limpias energéticas, eventos comunitarios gratuitos y más." />
<meta name="twitter:image" content="https://casasuryahealings.org/media/logocasasurya.png" />
```

---

## Solución de problemas

### La imagen sigue sin aparecer después de limpiar el cache

1. **Verifica que la imagen sea accesible:**
   - Abre directamente en el navegador: https://casasuryahealings.org/media/logocasasurya.png
   - Si no carga, hay un problema con el archivo o el servidor

2. **Verifica el tamaño de la imagen:**
   - Las redes sociales tienen límites de tamaño (generalmente 8MB máximo)
   - El tamaño recomendado es 1200x630 píxeles

3. **Verifica el formato de la imagen:**
   - Debe ser PNG, JPG o GIF
   - Asegúrate de que no esté corrupta

4. **Espera un poco:**
   - Después de actualizar el cache, puede tardar unos minutos en propagarse
   - Prueba compartir el link en 5-10 minutos

### La imagen aparece en Facebook Debugger pero no en WhatsApp

- WhatsApp comparte el mismo cache que Facebook
- Si actualizaste en Facebook Debugger, espera unos minutos y prueba de nuevo en WhatsApp
- Cierra y vuelve a abrir WhatsApp si es necesario

---

## Recursos adicionales

- **Facebook Sharing Debugger:** https://developers.facebook.com/tools/debug/
- **Twitter Card Validator:** https://cards-dev.twitter.com/validator
- **LinkedIn Post Inspector:** https://www.linkedin.com/post-inspector/
- **Guía de Open Graph:** https://ogp.me/
- **Guía de Twitter Cards:** https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards
