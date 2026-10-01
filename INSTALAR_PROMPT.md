# Prompt para instalar el kit completo en otro PC

Copia y pega esto en Claude (Claude Code o Claude de escritorio) en el PC nuevo:

---
Instala el kit Grenoupedia de Grenoucerie desde el repositorio privado de GitHub `fabi1-977/grenoupedia-kit`.

1. Clona el repo (`git clone https://github.com/fabi1-977/grenoupedia-kit.git`). Si pide acceso, usa mi sesión de GitHub; no te inventes credenciales ni las escribas en ficheros.
2. Ejecuta `install.sh` (Mac/Linux). En Windows haz lo mismo a mano: copia `skill/recetas-grenoucerie` a `%USERPROFILE%\.claude\skills\` y copia `plantilla-base` y `ejemplo-receta-100` a `%USERPROFILE%\Grenoupedia\`.
3. Lee `skill/recetas-grenoucerie/SKILL.md` entero y confirma que cargó la skill `recetas-grenoucerie` v5.0. Si existe una skill antigua llamada `recetas`, avísame para que la borre yo; no la borres tú.
4. Abre `Grenoupedia/ejemplo-receta-100/ui_kits/grenoupedia-recette/index.html` (con un servidor local si hace falta) y comprueba que se ven las 4 pestañas: ficha, Instagram, Reel y LinkedIn, sin errores en consola.
5. Dime en 5 líneas, en español, qué quedó instalado y qué falta.

Reglas que debes respetar siempre (están en la skill):
- Contenido público en francés con traducción al español; interno en español.
- Nada de cifras, fuentes ni afirmaciones inventadas (sin % de grasa, sin kcal, sin "zéro allergène").
- La rana no se compara con el pollo en texto público.
- Publicar solo en borrador y con mi autorización.
- Voz clonada de Fabián solo con su consentimiento por escrito; contenido con "voix et images générées par IA".
---

## Qué hay que hacer a mano en el PC nuevo
- Claude.ai web/escritorio: subir `skill/recetas-grenoucerie` en Ajustes > Skills (comprimida en zip) y borrar la skill antigua `recetas`.
- Cuentas propias: ElevenLabs (voz), Kling o Luma (vídeo), Higgsfield (créditos), WordPress/Metricool (acceso).
