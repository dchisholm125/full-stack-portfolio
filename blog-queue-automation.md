# Blog Queue Automation System for Full-Stack Portfolio

This system automates the movement of blog posts from `staged` to `blog` directories on a schedule, enabling consistent content publishing without manual intervention.

## Purpose
Move completed blog drafts from the staging area to the live blog directory according to a schedule, ensuring:
- Consistent publishing frequency (e.g., every 3 days)
- No publishing when there's no new content (staged directory empty)
- Automatic deployment readiness (files appear in blog/ directory)
- Preservation of existing blog post formatting and metadata

## How It Works

### Directory Structure
```
/full-stack-portfolio/
├── vue-app/
│   ├── content/
│   │   ├── staged/          ← Add your new blog posts here (markdown files)
│   │   └── blog/            ← Published posts appear here (auto-published by your site)
```

### Process Flow
1. You write your blog post as a markdown file with proper frontmatter
2. Save it to `vue-app/content/staged/`
3. The automation script runs on schedule (via cron or manual trigger)
4. If staged directory has files:
   - Moves the oldest file from `staged/` to `blog/`
   - Preserves all content and frontmatter exactly
   - Logs the action
5. If staged directory is empty:
   - Does nothing (no error, no action)
   - Waits for next scheduled run
6. Your Vue/Nuxt site automatically picks up the new post from `blog/` directory
7. Deploy or rebuild your site to make the new post live

## Installation

### 1. Save the Automation Script
Save this as `scripts/move-blog-posts.sh` in your portfolio root:
```bash
#!/bin/bash
"""
Blog Queue Automation - Moves posts from staged to blog on schedule
"""

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
```

### 2. Make It Executable
```bash
chmod +x scripts/move-blog-posts.sh
```

### 3. Test It Manually
```bash
# First, create a test post in staged directory
cat > vue-app/content/staged/test-post.md << 'EOF'
---
title: "Test Post from Automation"
description: "This is a test post to verify the blog queue automation works."
date: 2026-03-25
tags: ["Test", "Automation"]
---

This is the content of our test post. If you're seeing this, the automation worked correctly!
EOF

# Run the automation
./scripts/move-blog-posts.sh

# Check the log
cat scripts/blog-queue-log.txt

# Verify the file moved
ls -la vue-app/content/staged/
ls -la vue-app/content/blog/
```

### 4. Set Up Automatic Execution (Cron Job)
To run this every 3 days at 9:00 AM:

```bash
# Edit your crontab
crontab -e

# Add this line to run every Monday, Thursday, and Sunday at 9 AM (every 3 days)
0 9 * * 1,4,7 /home/dchisholm125/Desktop/repos-local/full-stack-portfolio/scripts/move-blog-posts.sh

# Alternative: Run every 3 days regardless of day of week
# 0 9 */3 * * /home/dchisholm125/Desktop/repos-local/full-stack-portfolio/scripts/move-blog-posts.sh

# Alternative: Run daily but only process if there's content (more precise timing)
# 0 9 * * * /home/dchisholm125/Desktop/repos-local/full-stack-portfolio/scripts/move-blog-posts.sh
```

## Usage Guide

### Creating Blog Posts
1. Write your blog post in your preferred editor
2. Ensure it has the correct frontmatter format:
   ```yaml
   ---
   title: "Your Post Title"
   description: "Brief description for SEO and preview"
   date: YYYY-MM-DD
   tags: ["Tag1", "Tag2", "Tag3"]
   ---
   
   Your blog post content here...
   ```
3. Save the file as `.md` in `vue-app/content/staged/`
4. The automation will move it to `vue-app/content/blog/` on the next scheduled run

### What Gets Moved
- Only `.md` files are processed
- Files are moved in order of modification time (oldest first)
- Original file is moved (not copied) - staged directory stays clean
- All content and frontmatter is preserved exactly
- No processing or modification of your content

### Integration with Your Site
Your existing Vue/Nuxt blog system at `/blog` will:
- Automatically detect new markdown files in `vue-app/content/blog/`
- Extract frontmatter for title, description, date, and tags
- Display posts in your blog listing
- Support your existing tag filtering system
- Require no changes to your existing blog functionality

## Benefits for Your Portfolio

### Consistency Without Effort
- Write when inspiration strikes
- Publish on predictable schedule
- No guilt when busy - system waits for content
- Audience knows when to expect new insights

### SEO Advantages
- Regular content updates signal site activity to search engines
- Each post targets additional keywords related to your expertise
- Internal linking opportunities between portfolio projects and blog posts
- Fresh content improves search ranking over time

### Professional Development
- Demonstrates ongoing learning and growth
- Shows communication skills alongside technical abilities
- Provides evidence of problem-solving and reflection
- Creates shareable content for LinkedIn, Twitter, etc.

### Technical Simplicity
- No changes to your existing blog system required
- Uses standard bash scripting (available on all systems)
- No external dependencies or complex setup
- Easy to modify, disable, or uninstall
- Transparent logging for troubleshooting

## Customization Options

### Changing Frequency
Adjust the cron schedule:
- Daily: `0 9 * * *`
- Every other day: `0 9 */2 * *`
- Weekly: `0 9 * * 0` (Sundays)
- Weekdays only: `0 9 * * 1-5`
- Custom: `0 9 1,10,20 * *` (1st, 10th, 20th of each month)

### Time of Day
Change the hour in the cron expression:
- `0 9 * * *` = 9:00 AM
- `0 14 * * *` = 2:00 PM
- `0 20 * * *` = 8:00 PM

### Multiple Posts Per Run
To move more than one post per execution, modify the script to process multiple files.

## Troubleshooting

### "Nothing happens when I run the script"
1. Check if there are `.md` files in `vue-app/content/staged/`
2. Verify the script has execute permissions: `ls -la scripts/`
3. Check the log file for error messages: `cat scripts/blog-queue-log.txt`
4. Ensure you're running from the portfolio root directory

### "Posts aren't appearing on my blog"
1. Verify files are actually moving to `vue-app/content/blog/`
2. Check that your Vue/Nuxt site is rebuilding/picking up new content
3. Ensure your blog route (`/blog`) is working correctly
4. Check browser cache - sometimes you need to hard refresh (Ctrl+F5)

### "Getting permission errors"
1. Make sure you own all the directories and files
2. On Linux/Mac: `chmod +x scripts/move-blog-posts.sh`
3. Verify you have write access to both staged and blog directories

## Maintenance

### Weekly Check-In
1. Review the log file: `tail -n 20 scripts/blog-queue-log.txt`
2. Check staged directory for pending posts: `ls -la vue-app/content/staged/`
3. Verify published posts are appearing correctly on your site
4. Clean up old log files if they get too large

### Content Planning
- Keep 2-3 posts in staged directory as your "buffer"
- Write when you have insights, not on a strict schedule
- Let the automation handle the publishing timing
- Focus on quality over quantity

## Files Created
- `scripts/move-blog-posts.sh` - The automation script (make executable)
- `scripts/blog-queue-log.txt` - Automatic logging of all actions
- Instructions in this file (`blog-queue-automation.md`)

## Example Workflow

**Monday Morning:**
- Idea strikes while debugging: "Fixing the mobile menu breakpoint issue"
- Write post and save as: `vue-app/content/staged/fixing-mobile-menu.md`
- Automation not scheduled to run yet - file waits in staged

**Wednesday 9:00 AM:**
- Automation runs
- Finds `fixing-mobile-menu.md` in staged
- Moves it to: `vue-app/content/blog/fixing-mobile-menu.md`
- Logs the action
- Your site now has a new blog post waiting to be deployed

**Wednesday Afternoon:**
- You rebuild and deploy your site
- New blog post is now live at `/blog/fixing-mobile-menu-md`
- Share on LinkedIn: "Just published how I solved the responsive menu bug in my portfolio..."

**Friday:**
- Another idea: "Why I chose Vue 3 for my portfolio rewrite"
- Write and save to: `vue-app/content/staged/vue3-choice-reason.md`
- Waits for next automation run

**Next Scheduled Run (Saturday or Monday depending on your cron):**
- Post moves from staged to blog
- Ready for your next deploy

This system gives you the best of both worlds: 
- **Creative freedom** to write when inspired
- **Professional consistency** for your audience
- **Zero manual effort** for the publishing process
- **Complete control** over what gets published and when