#!/usr/bin/env bash
# Instala las skills de Grenoucerie para Claude Code y copia la plantilla a ~/Grenoupedia
set -e
AQUI="$(cd "$(dirname "$0")" && pwd)"
mkdir -p "$HOME/.claude/skills" "$HOME/Grenoupedia"
rm -rf "$HOME/.claude/skills/recetas-grenoucerie" "$HOME/.claude/skills/grenoucerie-recettes-design"
cp -r "$AQUI/skill/recetas-grenoucerie" "$HOME/.claude/skills/"
cp -r "$AQUI/plantilla-base" "$HOME/.claude/skills/grenoucerie-recettes-design"
cp -r "$AQUI/plantilla-base" "$HOME/Grenoupedia/"
cp -r "$AQUI/instrucciones" "$HOME/Grenoupedia/"
echo "Skills -> ~/.claude/skills/{recetas-grenoucerie,grenoucerie-recettes-design}"
echo "Plantilla e instrucciones -> ~/Grenoupedia"
