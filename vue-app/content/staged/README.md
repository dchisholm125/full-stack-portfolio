# staged/ — not used anymore

This directory is intentionally empty and is **not** picked up by the site
(`lib/blog.ts` globs `content/blog/*.md` only).

The old `scripts/move-blog-posts.sh` auto-published from here on a cron. It was
retired 2026-07-30 for three reasons:

1. It pointed at `/home/dchisholm125/Desktop/repos-local/…`, a path that no
   longer exists — it had not worked in a long time.
2. It moved the *newest* file while claiming to move the oldest (`ls -t | tail -1`).
3. It published without a human ever looking. The one file staged here had no
   frontmatter and would have rendered titleless with a broken date.

Drafting and publishing now live in the private `vox-in-public` repo:

    ../vox-in-public/pipeline/publish.sh --list
    ../vox-in-public/pipeline/preview.sh <slug>
    ../vox-in-public/pipeline/publish.sh <slug>

Publishing is a deliberate command Derek runs. It is never automated.
