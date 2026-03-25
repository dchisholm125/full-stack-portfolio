#!/bin/bash
# Blog Queue Automation - Moves posts from staged to blog on schedule

# Configuration
STAGED_DIR="vue-app/content/staged"
BLOG_DIR="vue-app/content/blog"
LOG_FILE="scripts/blog-queue-log.txt"

# Create directories if they don't exist
mkdir -p "$STAGED_DIR" "$BLOG_DIR" "$(dirname "$LOG_FILE")"

# Log function
log_action() {
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] $1" | tee -a "$LOG_FILE"
}

# Check if staged directory has any markdown files
if [ -z "$(ls -A "$STAGED_DIR"/*.md 2>/dev/null)" ]; then
    log_action "Staged directory is empty - no posts to publish"
    exit 0
fi

# Get the oldest markdown file in staged directory
OLDEST_POST=$(ls -t "$STAGED_DIR"/*.md | tail -1)

if [ -n "$OLDEST_POST" ]; then
    # Extract just the filename
    FILENAME=$(basename "$OLDEST_POST")
    
    # Move the file
    mv "$OLDEST_POST" "$BLOG_DIR/$FILENAME"
    
    log_action "Published blog post: $FILENAME"
    log_action "Moved from: $STAGED_DIR/$FILENAME"
    log_action "Moved to: $BLOG_DIR/$FILENAME"
else
    log_action "No markdown files found in staged directory"
fi