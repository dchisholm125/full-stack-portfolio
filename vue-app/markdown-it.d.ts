declare module 'markdown-it' {
  type Options = {
    html?: boolean
    linkify?: boolean
    typographer?: boolean
  }

  export default class MarkdownIt {
    constructor(options?: Options)
    render(markdown: string): string
  }
}
