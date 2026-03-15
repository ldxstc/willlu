#!/bin/bash
# Usage: ./scripts/publish-essay.sh <slug> <title> <readTime> <content-file>
# Creates MDX essay, commits, and pushes. Vercel auto-deploys.

set -e

SLUG="$1"
TITLE="$2"
READ_TIME="$3"
CONTENT_FILE="$4"
DATE=$(date +%Y-%m-%d)

if [ -z "$SLUG" ] || [ -z "$TITLE" ] || [ -z "$READ_TIME" ]; then
  echo "Usage: $0 <slug> <title> <readTime> [content-file]"
  echo "  slug: url-friendly name (e.g. vibe-coding-agent-builder)"
  echo "  title: full title in quotes"
  echo "  readTime: e.g. '4 min'"
  echo "  content-file: optional path to .md file with body content"
  exit 1
fi

REPO_DIR="$(cd "$(dirname "$0")/.." && pwd)"
ESSAY_PATH="$REPO_DIR/content/essays/$SLUG.mdx"

if [ -f "$ESSAY_PATH" ]; then
  echo "Essay already exists: $ESSAY_PATH"
  exit 1
fi

# Build the MDX file
{
  echo '---'
  echo "title: \"$TITLE\""
  echo "description: \"\"" 
  echo "date: $DATE"
  echo "readTime: \"$READ_TIME\""
  echo "linkedin: true"
  echo '---'
  echo ""
  if [ -n "$CONTENT_FILE" ] && [ -f "$CONTENT_FILE" ]; then
    cat "$CONTENT_FILE"
  else
    echo "$TITLE"
  fi
} > "$ESSAY_PATH"

echo "Created: $ESSAY_PATH"

# Commit and push
cd "$REPO_DIR"
git add "$ESSAY_PATH"
git commit -m "Essay: $TITLE"
git push origin main

echo "Published and deploying: willlu.com/essays/$SLUG"
