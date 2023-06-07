import knex from "../lib/knex.js";
import slugify from "../lib/slugify.js";

export interface EthnicityFrontmatter {
  title: string;
  slug?: string;
  taxonomies: {
    ethnic_locations: string[];
    parent_ethnicities: string[];
  };
}
export function create(title: string) {
  return {
    dir: 'ethnicities',
    data: <EthnicityFrontmatter>{
      title,
      taxonomies: {
        ethnic_locations: [],
        parent_ethnicities: [],
      }
    }
  }
}