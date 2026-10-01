# Prompt para instalar el kit completo en otro PC

Copia y pega esto en Claude (Claude Code o Claude de escritorio) en el PC nuevo:

---
Instala el kit Grenoupedia de Grenoucerie desde el repositorio privado de GitHub `fabi1-977/grenoupedia-kit` (o desde el zip `grenoupedia-kit.zip` si te lo doy).

1. Clona el repo (`git clone https://github.com/fabi1-977/grenoupedia-kit.git`). Si pide acceso, usa mi sesión de GitHub; no inventes credenciales ni las escribas en ficheros.
2. Ejecuta `install.sh` (Mac/Linux). En Windows haz lo mismo a mano: copia `skill/recetas-grenoucerie` y `plantilla-base` (renombrada `grenoucerie-recettes-design`) a `%USERPROFILE%\.claude\skills\`, y copia `plantilla-base` e `instrucciones` a `%USERPROFILE%\Grenoupedia\`.
3. Lee entero `skill/recetas-grenoucerie/SKILL.md` y confirma que cargó la skill `recetas-grenoucerie` v5.1, con la regla anti-pollo de §5A. Si existe una skill antigua llamada `recetas`, avísame; no la borres tú.
4. Abre `Grenoupedia/plantilla-base/ui_kits/grenoupedia-recette/index.html` (con servidor local si hace falta) y comprueba las 4 pestañas: ficha, Instagram, Reel y LinkedIn, sin errores en consola.
5. Muéstrame el texto de `instrucciones/instrucciones-proyecto.md` para que lo pegue en las instrucciones del proyecto.
6. Dime en 5 líneas, en español, qué quedó instalado y qué falta.

Respeta siempre `instrucciones/reglas-fijas.md`: nada inventado, rana ≠ pollo en texto público, prompts y revisión anti-pollo en cada imagen, contenido IA etiquetado y publicación solo en borrador con mi OK.
---

## A mano en claude.ai (web o escritorio)
- Ajustes > Skills: subir `skills-zip/recetas-grenoucerie.zip` y `skills-zip/grenoucerie-recettes-design.zip`; borrar la skill antigua `recetas`.
- Proyecto: pegar `instrucciones/instrucciones-proyecto.md` en las instrucciones.
- Cuentas propias: Higgsfield (con créditos en la cuenta conectada), ElevenLabs, WordPress, Metricool.
