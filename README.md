# Portafolio — Juan Cruz Mare

Portafolio web personal. Sitio estático bilingüe (ES/EN), sin dependencias ni paso de build.

## Stack
- HTML, CSS y JavaScript puro (sin frameworks)
- Tema oscuro y minimalista
- Selector de idioma ES/EN (persistido en `localStorage`)
- Animaciones de scroll con `IntersectionObserver`
- 100% responsive

## Estructura
```
index.html      → contenido y estructura
styles.css      → estilos y tokens de diseño
script.js       → idioma, navegación y animaciones
CV_Mare(English).pdf → CV descargable enlazado desde el hero
```

## Ver en local
Cualquier servidor estático sirve. Por ejemplo:
```bash
python3 -m http.server 4321
# abrir http://localhost:4321
```

## Desplegar en GitHub Pages
1. Crear (o usar) el repo `juansa6201.github.io`.
2. Subir el contenido de esta carpeta a la rama `main`.
3. En **Settings → Pages**, elegir la rama `main` y carpeta `/root`.
4. El sitio quedará en `https://juansa6201.github.io`.

```bash
git init
git add .
git commit -m "Portfolio website"
git branch -M main
git remote add origin https://github.com/juansa6201/juansa6201.github.io.git
git push -u origin main
```

## Personalización
- **Textos:** editar atributos `data-es` / `data-en` en `index.html`.
- **Colores:** variables CSS en `:root` dentro de `styles.css` (acento principal: `--accent`).
- **Proyectos:** duplicar un bloque `<article class="card">` en la sección `#projects`.
