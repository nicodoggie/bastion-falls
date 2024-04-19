import GenericEntity, { Frontmatter } from "./generic-entity.js";

export interface BlogFrontmatter extends Frontmatter {
  title: string;
  date: string;
  updated?: string;
}

export default class Blog extends GenericEntity<BlogFrontmatter> implements BlogFrontmatter {
  date: string;
  constructor(title: string) {
    const date = new Date(Date.now());
    super(title, 'blog');

    this.date = date.toISOString();
  }
}