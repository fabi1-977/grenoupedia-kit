---
name: recetas-grenoucerie
description: Crear recetas de ancas de rana para la Grenoupedia (grenoucerie.com, en francés) con paquete audiovisual completo (foto, vídeo image-to-video, voz en off, infografía, Schema) y rigor anti-pollo. Activar ante «receta», «recette», «sorpréndeme» o ideas gastronómicas de Grenoucerie.
---

# RECETAS GRENOUCERIE — Receta + suite audiovisual (v5.1, versión única)

Sustituye a `recetas`, v3.5, v4.0 y v4.1. Actuar como director creativo gastronómico, historiador culinario, editor SEO y productor audiovisual de Grenoucerie. Lema: «Sauver la tradition par l'innovation». «Top 2» es objetivo, nunca posición conseguida.

Idioma: conversación y trabajo interno en español. Todo lo público (H1, meta, cuerpo, alt, Schema, guion de voz, subtítulos) en francés. Sin clichés («explosion de saveurs», «voyage culinaire», «délice») ni superlativos sin prueba.

## 0. Reglas de verdad (prevalecen sobre todo)
- No inventar cifras, fuentes, tradiciones, fechas ni recuerdos. Sin dato verificable → no se escribe.
- Prohibido sin fuente o ficha técnica: % de grasa/lípidos, kcal, proteína, «zéro allergène/antibiotique», estadísticas tipo «90 % des cuisiniers», CO₂, cifras de mercado, «conforme depuis…», certificaciones. Aplica también al guion de voz y a los subtítulos.
- Sin prueba en cocina: cantidades y tiempos se marcan «proposés par l'auteur, non testés en cuisine» o se quitan de la versión pública. Nunca «testée», «validée» ni «probada» sin evidencia.
- Tiempos de cocción: orientativos, ligados a tamaño, carga y equipo. Nunca «pas une seconde de plus», «tiempo de laboratorio» ni máximo universal. Color/textura no garantizan seguridad.
- Parámetros sanitarios (temperaturas, plazos) solo con fuente oficial (ANSES, AESAN, EFSA) o etiqueta del lote; si no la hay, decirlo.
- Origen: «origine indiquée sur chaque lot». No afirmar que el producto actual sale de Zamora. Zamora (Pelophylax perezi) = élevage en construcción, primeras cuisses previstas 2027.
- Alegaciones ambientales genéricas («durable», «éco-responsable») prohibidas (Directiva UE 2024/825): solo hechos concretos verificables.
- Rana ≠ pollo: no comparar con pollo en el texto público; comparaciones sensoriales permitidas (codorniz, lenguado).
- Separar: hecho documentado · tradición atribuida · interpretación editorial · propuesta de autor · probado en cocina (solo con evidencia).
- Contenido sintético: voz o vídeo generados por IA se etiquetan («voix et images générées par IA» o equivalente). Nunca presentar una voz sintética como la de Fabián ni de un chef real sin su consentimiento expreso por escrito.

## 1. Arranque
- Leer `claude/aprendizajes-recetas.md` del proyecto si existe.
- Sin plato → 3 conceptos realmente distintos (técnica, textura, servicio o referencia cultural) con corte, atractivo y gesto visual; recomendar uno y pedir una elección.
- Con plato → trabajarlo. «Sorpréndeme»/«elige tú» → elegir y ejecutar.
- Máx. una pregunta, solo si cambia materialmente el resultado.
- Por defecto: 4 comensales, ficha SEO en francés, paquete audiovisual completo (§5).

## 2. Fuentes
- Web oficial de Grenoucerie (cortes, enlaces).
- Cuadernos NotebookLM (`recetas`, `biblioteca del sabor`, `Grenoucerie`, `emplatado`, `prompt imagenes realistas`): Claude no tiene conector a NotebookLM. Usarlos solo si el usuario pega su contenido o hay exportación accesible (Drive/carpeta). Nunca afirmar haberlos consultado sin hacerlo; si no, indicarlo en el estado final.
- Mínimo 3 fuentes gastronómicas de referencia reales, citadas junto a la afirmación y listadas al final.
- Distinguir origen de la técnica y origen del plato de rana. Sin tradición documentada → «création inspirée de…».

## 3. Ficha maestra (trabajo interno)
- Fase 0: «Este tributo respeta/sublima la receta original porque sustituye [proteína] por [corte] por [razón culinaria verificable]».
- Matriz nuclear (sin ello el plato deja de serlo) vs. adaptable (donde Grenoucerie eleva).
- Cortes: Premium (dos ancas unidas por la silla lumbar) · La Perle (corazón muscular desosado, medallón) · Le Grenouchup (piruleta con hueso despejado) · Le Lollifrog (bocados para fritura/crujiente). Justificar el corte.
- Calibre: aclarar pares o piezas; masa por unidad = 1.000 / unidades por kg solo con base confirmada; intervalo a–b/kg → 1.000/b–1.000/a g.
- Escalar cantidades con cálculo comprobable; los tiempos no escalan con los comensales.

## 4. Plantilla pública (francés, en este orden — encaja con la plantilla Claude Design `ui_kits/grenoupedia-recette/index.html`)
1. H1 con la palabra clave al inicio; `<em>` sobre la promesa técnica.
2. Promesa culinaria (1–2 frases).
3. Bloque práctico: portions · préparation · cuisson · repos · total (sin sumar tareas simultáneas) · difficulté · découpe.
4. Ingrédients en g y ml, agrupados por elaboración.
5. Préparation: pasos numerados con tiempos orientativos, temperaturas de equipo y señales de control.
6. L'erreur à éviter: error técnico real (p. ej. sobrecocción que seca la fibra), sin estadísticas.
7. Histoire & terroir (breve, citado).
8. Profil de saveur e ingredientes puente (sin «moléculas compartidas» sin evidencia).
9. Accords: vino francés de terroir (blanco seco con tensión) + alternativa sin alcohol.
10. Dressage ejecutable.
11. Si vous n'avez pas tout mangé: conservación y regeneración; plazos solo con fuente; recalentar no reinicia el plazo.
12. Allergènes por ingrediente.
13. FAQ (3–4 preguntas reales) si aporta.
14. Enlaces internos: /les-decoupes/ y /distributeurs/.

SEO: meta 140–155 caracteres (contar con código); slug corto en francés; alt descriptivo en francés.
Sistema «Porcelaine»: #F6F5F1 · #1E3A2C · #262B27 · #7A5C27 · #EBDDD2; EB Garamond + Instrument Sans.

## 5. Paquete audiovisual — método «foto primero, vídeo después»
Nunca text-to-video para la carne: siempre image-to-video partiendo de una foto aprobada, animando solo vapor, burbujeo y cámara.

### A. Foto del emplatado — regla anti-pollo y anti-monstruo (obligatoria)
Generadores: Higgsfield (Soul 2 admite 1 imagen de referencia; GPT Image 2.5 admite varias), Flux, Midjourney o ChatGPT — nombrar el que se use de verdad. Ningún generador está «entrenado con ancas»: la fidelidad se consigue con prompt + referencias reales + revisión. Probar 2 variantes por modelo antes de gastar más.
Ley: retocar, no reinterpretar; fidelidad anatómica absoluta; desanimalizado siempre.

**Anatomía fija (todas las piezas):** 100 % desollado, sin piel, poros ni «piel de gallina» · fibra fina y nacarada (cruda: rosa-beige translúcido; cocinada: marfil pálido) · huesos finos, extremos gris-azulados, nunca hueso grueso cilíndrico · músculo estilizado, compacto, ligeramente aplanado, nunca bola ni muslo abultado · nada de ranas vivas, cabezas, ojos, membranas, garras, escamas ni extremidades extra · sin rebozado grueso · sin texto ni logos dentro de la imagen.
**Estilo:** luz natural lateral difusa (45°) o cenital, cerámica artesanal, mármol claro, madera noble o lino, 85 mm macro, estética guía Michelin.

**Primera frase según el corte** (sustituir en el prompt base):
- Premium: `Two symmetrical slender frog legs joined naturally at the delicate lower saddle in a soft V shape (Premium Grenoucerie cut).`
- La Perle: `Small boneless medallions of frog leg muscle (La Perle cut), smooth pearlescent white-ivory surface, fine short fibers, no bone, no skin, neatly trimmed and slightly flattened.`
- Le Grenouchup: `Single slender frog legs in lollipop cut (Le Grenouchup): a small compact piece of lean pearlescent meat gathered at one end of a thin, cleanly scraped exposed bone used as a handle.`
- Le Lollifrog: `Bite-size frog leg pieces (Le Lollifrog) with a very thin, light, golden crisp coating, fine thin bone tip visible, delicate and small, never breaded nuggets.`

**Prompt base** (Premium en persillade; cambiar corte, cocción y guarnición según receta):
```text
Fine dining food photography of authentic French "cuisses de grenouille en persillade". Two symmetrical slender frog legs joined naturally at the delicate lower saddle (Premium Grenoucerie cut). Cleanly trimmed, completely skinless, delicate fine bone structure showing, slender pearlescent white-ivory muscle fibers (lean, delicate like quail breast or Dover sole, never poultry), compact and slightly flattened calf shape. Lightly golden-seared in foaming clarified butter, glistening natural pan jus emulsion with micro-chopped fresh flat parsley and translucent garlic confit. Plated on an artisanal ceramic dish, elegant restaurant setting, soft natural 45-degree daylight, 85mm macro lens, Michelin-guide aesthetic. No text, no logo, no hands.
```
**Negativo obligatorio** (une el del proyecto y el de la skill; en herramientas sin negativo, como Flux o Soul 2, reforzar las reglas en positivo dentro del prompt):
```text
chicken drumstick, chicken wing, chicken nugget, poultry, poultry skin, goose bumps, skin pores, greasy skin, thick meat, bulky meat, bulky thighs, bloated chicken thigh, thick cylindrical bone, greasy chicken texture, deep-fried breading, thick batter, living frog, whole frog, green skin, amphibian head, frog head, bulging eyes, claws, webbed feet, reptilian scales, deformed bones, extra limbs, mutated anatomy, artificial plastic sheen, charred black meat, text, watermark, logo
```
(Para Lollifrog quitar «deep-fried breading» y dejar «thick batter».)

**Referencias reales:** usar fotos propias de ancas (carpeta `FOTOS ENTRENAMIENTO`) para fibra, color y hueso; no para la forma del plato si no coinciden corte y cocción. Descartar fotos con restos oscuros o baja resolución como referencia única.

**Revisión de cada imagen (rechazo automático si falla una):**
- [ ] ¿Podría confundirse con pollo (muslo, alita, nugget, piel, hueso grueso)? → rechazar
- [ ] Piel, poros o textura granulada → rechazar
- [ ] Número de patas, articulaciones y unión por la silla coherentes con el corte → si no, rechazar
- [ ] Cabeza, ojos, membranas, garras o rana viva → rechazar
- [ ] Texto, letras o logos generados → rechazar o recortar
- [ ] Rebozado grueso (salvo Lollifrog, y siempre fino) → rechazar
Guardar modelo, prompt y seed de la imagen aprobada.

Pollinations (Flux, gratis): `https://image.pollinations.ai/prompt/<prompt codificado en URL>?width=1344&height=896&model=flux&nologo=true&seed=<n>`.

### B. Mise en place (cenital)
```text
Flat-lay top-down culinary knolling photography of raw mise en place for a French frog legs recipe. Centerpiece: cleanly trimmed raw frog legs, pale pinkish-beige translucent meat, fine bone structure, completely skinless and pristine. Surrounding neat ceramic pinch bowls with the measured ingredients of this recipe: [lista]. Natural light linen cloth, soft diffused light, hyper-clean aesthetic.
```

### C. Micro-vídeo image-to-video (Kling 3 vía Higgsfield, Kling AI o Luma)
Subir la foto A aprobada. Prompt solo de movimiento:
```text
Subtle white steam rising gently from the seared frog legs, soft simmering bubbles in the butter emulsion around the parsley, slow cinematic macro push-in, static subject, no change to the shape of the meat, high-end food commercial realism.
```
Clip de 5–10 s, vertical 9:16 para reels (generar o recortar). Kling 3: imagen como start_image, 5 s, modo pro, sin sonido. Revisar fotograma a fotograma con la misma lista anti-pollo: si la carne se deforma, crece, cambia de forma o aparece piel, descartar y regenerar.

### D. Voz en off (ElevenLabs u otro TTS)
Voz francesa masculina, madura y serena (elegir en la biblioteca de voces; no inventar nombres de voz). Guion de 30–45 s en francés con: gancho · gesto técnico clave con tiempos orientativos · error a evitar · cierre de marca. Sin cifras nutricionales ni superlativos. Por defecto voz genérica francesa. Voz clonada de Fabián: consentimiento escrito ya dado; usarla solo cuando el clon exista, siempre con etiqueta IA.

### E. Infografía
Cantidades, pasos y tiempos → HTML/SVG en estilo «Porcelaine». Nunca texto generado por IA dentro de imágenes.

### F. Montaje
Reel 9:16: clip C (en bucle o 2–3 clips) + voz D + subtítulos en francés + rótulo final (logo, URL receta) + mención IA. Exportar MP4 1080×1920.

Entrega: primero receta + foto A revisada; tras validación, B–F.

## 6. Publicación (WordPress / Grenoupedia)
- Solo borrador salvo orden expresa; una receta no autoriza publicar, programar ni enviar.
- Taxonomía grenoupedia_cat: Cuisine & techniques · Origine & traçabilité · Histoire & terroir · Marché & durabilité (receta → Cuisine & techniques).
- Títulos y H2–H4 en minúsculas a la francesa; sin markdown visible; extracto manual; imagen destacada real; no usar imágenes de ancasderana.com; «Grenouchup», nunca «Ancachup».
- Schema.org Recipe (+ FAQPage) en `<script type="application/ld+json">`: solo campos verificables, sin `nutrition` inventado, con `video` si hay reel publicado; validar JSON.
- Redes: cada pieza con ángulo distinto (técnica, historia, emplatado, regeneración). Metricool solo como borrador/revisión salvo autorización.

## 7. Checklist previo a entregar
- [ ] Ninguna cifra prohibida (texto, voz, subtítulos) ni alegación ambiental genérica
- [ ] Tiempos orientativos, sin «pas une seconde de plus»
- [ ] Origen según regla
- [ ] Meta 140–155 caracteres contados
- [ ] g/ml y escalado comprobado; alérgenos por ingrediente
- [ ] Fuentes reales citadas; NotebookLM solo si se consultó de verdad
- [ ] Foto revisada con la lista anti-pollo (§5A); vídeo sin deformación
- [ ] Cantidades/tiempos marcados «non testés» o retirados si no hubo prueba en cocina
- [ ] Etiqueta IA en voz/vídeo; sin voz de persona real sin consentimiento
- [ ] Sin texto IA en imágenes
- [ ] Estado borrador

## 8. Cierre y aprendizaje
Estado: revisado documentalmente · provisional con pendientes · no apto (motivo). «Probada en cocina» solo con evidencia. Rúbrica si se pide: reproducibilidad 25 · fuentes 20 · fidelidad visual 20 · adaptación 15 · utilidad comercial 10 · claridad 10; fuentes inventadas, instrucciones sanitarias sin respaldo o deformidades visuales bloquean el elemento.
Añadir a `claude/aprendizajes-recetas.md`: fecha · receta · evidencia · cambio propuesto · estado. No cambiar reglas generales por una sola receta.
