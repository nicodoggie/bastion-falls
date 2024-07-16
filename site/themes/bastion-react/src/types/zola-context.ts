export namespace Zola {
  export type Taxonomy = {
    name: string
    slug: string
    paginate_by: number | null
    paginate_path: string | null
    render: boolean
    feed: boolean
  }

  export type Extra = {
    [key: string]: any
  }

  export type Config = {
    base_url: string
    mode: string
    title: string
    description: string | null
    languages: object
    default_language: string
    generate_feed: boolean
    feed_filename: string
    taxonomies: Array<Taxonomy>
    author: string | null
    build_search_index: boolean
    extra: Extra
  }
  export type Section = {}
  export type Page = {
    title: string
    slug: string
    description: string | null
    draft: boolean
    lang: string

    summary: string | null
    ancestors: Array<string>
    components: Array<string>
    toc: Array<string>
    assets: Array<string>
    word_count: number
    reading_time: number
    path: string
    relative_path: string
    colocated_path: string | null
    permalink: string
    content: string
    date: string | null
    updated: string | null
    year: string | null
    month: string | null
    day: string | null
    taxonomies: Array<Taxonomy>
    authors: Array<string>
    extra: Extra
    lower: Page | null
    higher: Page | null
    translations: Array<Page>
    backlinks: Array<{
      permalink: string
      title: string
    }>
  }
  export type Context = {
    config: Config;
    current_path: string
    current_url: string
    lang: string
    section?: Section
    page?: Page
  }

}
