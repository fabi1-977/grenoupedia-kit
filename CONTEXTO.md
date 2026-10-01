# Contexto Grenoupedia · estado a 01/10/2026

Soy Fabián (Grenoucerie). Seguimos con la producción de recetas para la Grenoupedia (grenoucerie.com). Responde en español, de forma concisa y visual. El contenido público va en francés con traducción al español, porque no hablo francés.

## Hecho
- **Skill única `recetas-grenoucerie` v5.0.** Recoge las reglas de verdad, la ficha FR de 14 bloques, el paquete audiovisual y el checklist. Está en el doc del proyecto `claude/skill-recetas-grenoucerie.md`.
- **Kit en GitHub `fabi1-977/grenoupedia-kit` (privado).** Contiene la skill, la plantilla base (Claude Design, sistema Porcelaine), el ejemplo de la receta 100 e `INSTALAR_PROMPT.md`.
- **Receta 100 (confirmada, fila 100 del CSV de NotebookLM).** *Cuisses de grenouille laquées hoisin et cinq-épices*, corte Grenouchup, 4 personas, grill en 3 tiempos. Incluye ficha FR+ES, JSON-LD y meta de 148 caracteres. Es una "création inspirée".
- **Carpetas limpias.** 70 versiones antiguas movidas a `Grenoucerie.fr/_archivo_versiones/`.
- **Plan de ejecución.** Artifact "Plan Grenoupedia Recettes", versión 3.

## Decisiones
- Modo mixto: la foto la genera Claude. El vídeo (Kling 3) y la voz los hago yo o se hacen con Higgsfield.
- Voz: de momento una voz genérica en francés. El clon de Fabián (consentimiento escrito ya dado) queda para cuando lo haga en ElevenLabs. Siempre con "voix générée par IA".
- No habrá prueba en cocina. Las cantidades y los tiempos se marcan como propuestos o no probados, o se quitan de la versión pública.
- WordPress: solo borradores, nunca publicar sin mi OK.
- La skill antigua "recetas" la borro yo.

## Bloqueos y próximos pasos
1. **Foto del plato.** Flux gratis (Pollinations) suspende la prueba: genera un "caramelo" en lugar de un anca y pide pago desde la segunda imagen. El texto solo no basta.
   - Siguiente paso: usar fotos reales de referencia (imagen a imagen) en Higgsfield, con Soul 2 y `gpt_image_2_5`, y elegir la mejor tras una revisión anatómica. No consta que ningún modelo esté entrenado con ancas.
   - Fotos: `C:\Users\PC\OneDrive\Desktop\Entrenar ia\FOTOS ENTRENAMIENTO` (adjuntar 5–10 o enlazar el PC).
2. **Higgsfield.** La app tiene créditos, pero la conexión MCP marcaba 0 créditos en el espacio privado y luego se desconectó. Hay que reconectarla.
3. **Vídeo.** Kling 3 en modo image-to-video, solo sobre la foto aprobada (5 s, sin sonido para la prueba).
4. **Logo.** Necesito SVG o PNG con fondo transparente. El que envié es un mockup dorado en 3D.
5. **Foto real de producto.** No hay. Se usará la foto generada con la etiqueta IA.
6. **Pendiente de decidir.** Versión pública de la receta 100: sin cantidades exactas o con aviso "non testée" visible.

## Reglas fijas
Nada inventado: ni cifras, ni % de grasa, ni kcal, ni "zéro allergène". El origen va "indiqué sur chaque lot". Zamora = élevage 2027. Nada de claims ambientales genéricos. La rana no se compara con el pollo en el texto público. Los prompts de imagen siguen la regla anti-pollo y anti-monstruo del proyecto.
