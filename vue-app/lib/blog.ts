import fm from 'front-matter'
import MarkdownIt from 'markdown-it'

export type BlogPost = {
  slug: string
  title: string
  description: string
  date: string
  tags: string[]
  body: string
  bodyHtml: string
}

type BlogFrontmatter = {
  title?: string
  description?: string
  date?: string
  tags?: string[]
}

const markdown = new MarkdownIt({
  html: false,
  linkify: true,
  typographer: true,
})

const blogMarkdownModules = import.meta.glob('../content/blog/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>

function mapEntryToPost(filePath: string, source: string): BlogPost {
  const parsed = fm<BlogFrontmatter>(source)
  const fileName = filePath.split('/').pop() ?? ''
  const slug = fileName.replace(/\.md$/i, '')

  return {
    slug,
    title: parsed.attributes.title ?? slug,
    description: parsed.attributes.description ?? '',
    date: parsed.attributes.date ?? '',
    tags: parsed.attributes.tags ?? [],
    body: parsed.body.trim(),
    bodyHtml: markdown.render(parsed.body),
  }
}

export function getBlogPosts(): BlogPost[] {
  return Object.entries(blogMarkdownModules)
    .map(([path, source]) => mapEntryToPost(path, source))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getBlogPostBySlug(slug: string): BlogPost | null {
  const post = getBlogPosts().find((entry) => entry.slug === slug)
  return post ?? null
}

export function getAllTags(): { name: string, count: number }[] {
  const posts = getBlogPosts()
  const tagCounts: Record<string, number> = {}
  
  posts.forEach(post => {
    post.tags.forEach(tag => {
      tagCounts[tag] = (tagCounts[tag] || 0) + 1
    })
  })
  
  return Object.entries(tagCounts)
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count || a.name.localeCompare(b.name))
}

export function getBlogPostsByTag(tag: string): BlogPost[] {
  return getBlogPosts().filter(post => post.tags.includes(tag))
}
