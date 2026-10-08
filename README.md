# AA Rent a Car | Redes oficiales

Landing page en español para abrir y escanear los perfiles oficiales de AA Rent a Car.

## Archivos

- `Index.html`: estructura semántica y metadatos.
- `css/style.css`: identidad visual, tarjetas QR y estilos responsive.
- `js/script.js`: enlaces oficiales y generación dinámica de tarjetas y códigos QR.
- `assets/`: recursos gráficos proporcionados para el proyecto.

## Ejecutar

Abre `Index.html` en un navegador. La generación de QR utiliza QRCode.js desde cdnjs, por lo que se requiere conexión a Internet para cargar esa librería. Los botones de cada tarjeta siguen abriendo los perfiles oficiales aunque no se cargue el QR.

## Agregar otro perfil

Agrega un objeto a `socialLinks` en `js/script.js` con `key`, `name`, `username` y `url`. Añade también su icono en `socialIcons` y los estilos de color correspondientes en `css/style.css`. Usa únicamente una cuenta oficial confirmada.