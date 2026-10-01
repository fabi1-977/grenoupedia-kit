#!/usr/bin/env bash
# Instala la skill recetas-grenoucerie para Claude Code y copia la plantilla a ~/Grenoupedia
set -e
AQUI="$(cd "$(dirname "$0")" && pwd)"
mkdir -p "$HOME/.claude/skills" "$HOME/Grenoupedia"
rm -rf "$HOME/.claude/skills/recetas-grenoucerie"
cp -r "$AQUI/skill/recetas-grenoucerie" "$HOME/.claude/skills/"
cp -r "$AQUI/plantilla-base" "$HOME/Grenoupedia/"
cp -r "$AQUI/ejemplo-receta-100" "$HOME/Grenoupedia/"
echo "Skill -> ~/.claude/skills/recetas-grenoucerie"
echo "Plantilla y ejemplo -> ~/Grenoupedia"
