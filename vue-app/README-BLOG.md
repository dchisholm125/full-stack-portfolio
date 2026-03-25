# Blog Tagging System Documentation

The "Lab Log" now supports a symbolic tagging system for better organization and discoverability.

## 1. Adding Tags to New Posts
When creating a new markdown file in `content/blog/`, include a `tags` array in the frontmatter:

```yaml
---
title: "Your New Post"
description: "Brief summary."
date: 2026-03-25
tags: ["Research", "AI", "SRM"]
---
```

## 2. Global Tag Registry
The system automatically extracts all unique tags from the markdown files and displays them in the filter bar on the `/blog` page. The tags are sorted by frequency (most used first).

## 3. Filtering Logic
- **URL Support**: You can deep-link to a specific tag using `?tag=TagName` (e.g., `/blog?tag=Research`).
- **Card UI**: Each blog card displays its tags. Clicking a post card navigates to the blog entry, while the filter bar on the main page allows narrowing down the list.

## 4. Technical Details
- **Library**: `lib/blog.ts` handles the extraction and filtering logic.
- **Frontend**: `pages/blog/index.vue` uses reactive state and query synchronization to manage the selected tag.

---
*Built for scale: This system can handle 100+ posts without performance degradation, as all processing is done at build/client-time.*
