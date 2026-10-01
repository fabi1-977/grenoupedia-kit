# ORDEN MAESTRA DE DISEÑO UI/UX — CLAUDE DESIGN
## Proyecto: Plantilla Maestra Reutilizable de Ficha de Receta para Grenoupedia (Grenoucerie.fr)
## Destino: Componente / Página HTML5 interactiva, responsive y lista para producción

---

### 1. ROL Y CONTEXTO ESTRATÉGICO
Actúa como Diseñador UI/UX Principal y Front-end Engineer Senior especializado en alta gastronomía francesa. Tu misión es construir la **PLANTILLA MAESTRA REUTILIZABLE (Template & Design System)** para todas las recetas de la enciclopedia gastronómica **Grenoupedia** de Grenoucerie.com.

Esta plantilla no es un artículo estático: es un **armazón modular basado en variables/slots de contenido** que se acoplará directamente a la skill de automatización culinaria de Grenoucerie. Cada nueva receta que se genere se inyectará en esta misma estructura garantizando un estándar Top 2 en Francia.

---

### 2. SISTEMA DE DISEÑO OFICIAL: «PORCELAINE» (grenoucerie.com v19)
Debes implementar de forma estricta los tokens visuales activos de la web en vivo:

* **Paleta de Colores (CSS Custom Properties)**:
  - `--porcelaine: #F6F5F1;` /* Fondo base limpio, cálido, estilo alta papelería */
  - `--blanc: #FFFFFF;` /* Fondo de tarjetas y cajas de contenido */
  - `--vert: #1E3A2C;` /* Verde botella oscuro institucional (titulares y autoridad) */
  - `--vert-2: #142A1F;` /* Verde profundo para contrastes */
  - `--bronze: #7A5C27;` /* Acento mostaza/bronce para cursivas <em>, enlaces y badges */
  - `--encre: #262B27;` /* Color de texto principal para lectura óptima */
  - `--encre-2: #4E5650;` /* Texto secundario y metadatos */
  - `--line: rgba(30, 58, 44, 0.14);` /* Bordes sutiles y reglas divisorias */
  - `--radius: 4px;` /* Bordes suavizados minimalistas, sin redondeos excesivos */

* **Tipografías Oficiales (Google Fonts CDN)**:
  - Títulos (`<h1>` a `<h4>`): `'EB Garamond', Georgia, serif;` (peso 500, con `em` siempre en cursiva y color `--bronze`).
  - Cuerpo y lectura (`.prose`): `'Instrument Sans', sans-serif;` (18px, interlineado generoso 1.72, máximo 68ch de ancho de lectura).
  - Datos técnicos, métricas y tiempos: `'JetBrains Mono', monospace;` (limpio, tabular y exacto).

---

### 3. ARQUITECTURA MODULAR DE LA PLANTILLA (Secciones Requeridas)

La plantilla debe maquetarse en un único archivo auto-contenido (HTML5 semántico + CSS puro incrustado + micro-interacciones JS) estructurado en dos columnas responsive (`240px` sidebar sticky + `1fr` área de lectura):

#### A. HEADER & HERO EDITORIAL (`.art-head`)
- **Breadcrumbs semánticos**: Accueil > Grenoupedia > Recettes > `{{CATEGORIA_PLATO}}`
- **Etiqueta / Badge de Corte Oficial**: Con selector visual de uno de los 4 cortes (*Premium*, *La Perle*, *Le Grenouchup*, *Le Lollifrog*).
- **H1 de Alto Impacto Gastronómico**: Título en `EB Garamond` que combina tradición y técnica, destacando la promesa en `<em>` (ej. *«Cuisses de grenouille en persillade : <em>la cuisson à la seconde près.</em>»*).
- **Barra de Metadatos Rápidos (`.art-byline`)**:
  - Tiempo de preparación (`{{TEMPS_PREP}}`)
  - Tiempo de cocción (`{{TEMPS_CUISSON}}` — alerta de no sobrepasar 90-120s)
  - Nivel de dificultad
  - Raciones métricas (4 personnes)
- **Marco de Imagen Principal (`.art-hero`)**: Aspect ratio 16:9 con marco sutil, pie de foto editorial y atribución al producto limpio y desanimalizado.

#### B. SIDEBAR STICKY TÉCNICA (`.toc` & `.art-fiche`)
Se mantiene anclada al hacer scroll:
- **Índice interactivo de navegación rápida** con scroll suave a los títulos H2.
- **Ficha Técnica del Corte**:
  - Badge del corte Grenoucerie y calibre recomendado.
  - Indicador de 0,3% de materia grasa y Nutriscore A.
- **Acuerdo Mets & Vins**:
  - Opción Terroir (vino blanco de Borgoña/Loira, ej. Chablis o Meursault).
  - Opción Gastronómica Sin Alcohol (infusión fría de té blanco y cítricos).
- **Caja de Acción B2B / Chef**: Botón sutil «Dossier Technique & Découpes 2026 →».

#### C. CUERPO DE LA RECETA DIDÁCTICA (`.prose`)
- **1. «L'Erreur Fatale du Cuisinier» (El Gancho Didáctico)**: Caja destacada que explica por qué la rana no es pollo y por qué cocerla más de 2 minutos destruye su textura sedosa.
- **2. «La Fiche Ingrédients»**: Lista estructurada y limpia con cantidades en gramos y mililitros exactos para 4 comensales.
- **3. «L'Infographie Visuelle de Cuisson (RSI Gráfico)»**:
  - Una barra de tiempo visual en SVG/CSS con selector de puntos críticos:
    - *0-75 segundos*: Salteado en mantequilla clarificada sin mover la pieza.
    - *75-135 segundos*: Vuelta, adición del ajo confitado.
    - *Últimos 15 segundos*: Fuera del fuego, emulsión con perejil y gotas de limón.
- **4. «La Recette Pas à Pas»**: Pasos numerados con badges de control térmico.
- **5. Cita Editorial (`blockquote`)**: En tipografía serif itálica con barra lateral en color bronce.
- **6. «Conservation & Régénération»**: Cómo conservar y cómo regenerar al baño maría o calor suave sin deshidratar.

#### D. MÓDULO SOCIAL MULTICANAL (Pestañas Interactivas RRSS)
En la parte inferior, un componente de pestañas (Tabs) interactivo para visualizar los formatos derivados:
- **Tab 1: Carrusel Instagram (4:5)**: Wireframe visual de las 5 diapositivas.
- **Tab 2: Micro-guion Reel/TikTok (9:16 - 30s)**: Estructura de gancho, nudo y CTA.
- **Tab 3: Ficha B2B LinkedIn (1:1)**: Argumentario de confort para la brigada y cero merma.

#### E. SCHEMA.ORG RECIPE (Rich Snippets JSON-LD para Google)
Incluir en el `<head>` un bloque `<script type="application/ld+json">` completo y validado para Schema.org/Recipe con todos los campos preparados (`prepTime`, `cookTime`, `nutrition`, `recipeIngredient`, `recipeInstructions`).

---

### 4. REGLAS TÉCNICAS DE ENTREGA
1. **Un solo archivo autocontenido**: Todo el CSS debe estar en la etiqueta `<style>` y el JS necesario en `<script>`.
2. **Placeholders identificables**: Usa variables en mayúsculas tipo `{{TITRE_RECETTE}}`, `{{CORTE_GRENOUCERIE}}`, `{{INGREDIENTS_LIST}}`, etc., para que el código sea inmediatamente reconocible como plantilla de automatización.
3. **Responsividad Total**: En pantallas de móvil (< 960px), la sidebar se recoloca naturalmente como una tarjeta superior colapsable.
4. **Acabado Visual Ultra-Premium**: Diseño digno de una estrella Michelin francesa o de un medio como *Le Figaro Cuisine* o *Vogue Gastronomie*.

Genera el código completo, limpio y listo para renderizar en pantalla.

---

### 5. NOTAS DE IMPLEMENTACIÓN (Ficha Receta Grenoupedia.dc.html)
- Sistema visual: tokens «Porcelaine» de esta orden (prevalecen sobre el sistema Organic adjunto al proyecto).
- Modo «gabarit» (tweak): muestra cada slot como {{CLAVE}}; modo «exemple»: receta de muestra en persillade.
- Reglas de verdad de la skill recetas-grenoucerie aplicadas: sin comparación con pollo en texto público; % de grasa y Nutri-Score marcados «à valider — fiche technique du lot»; nutrition del JSON-LD siempre como slot; plazos de conservación remiten a la etiqueta del lote; cita editorial = lema de marca.
