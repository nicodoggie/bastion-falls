import knex from "../lib/knex.js";
import slugify from "../lib/slugify.js";

type ParentLocation = {
  name: string;
  slug?: string;
  location_type?: string;
}

export interface LocationFrontmatter {
  title: string;
  slug?: string;
  extra: {
    loc: {
      [key: string]: any;
      population?: number | '';
      location_type?: ParentLocation[];
    };
  };
  taxonomies: {
    location_id?: string[];
    location_type?: string[];
    parent_location_id?: string[];
  };
}

export function create(title: string) {
  return {
    dir: "locations",
    data: <LocationFrontmatter>{
      title,
      extra: {
        loc: {
          population: '',
        },
      },
      taxonomies: {
        location_type: []
      },
    }
  };
}

export default async () => {
  const locations = await knex('locations')
    .select('*');
  return locations.map((location) => {
    const frontmatter = <LocationFrontmatter>{
      title: location.name,
      slug: slugify(location.name),
      taxonomies: {
        location_id: [location.id.toString()],
      }
    };

    if (location.type) {
      frontmatter.taxonomies['location_type'] = [location.type.toLowerCase()];
    }
    if (location.parent_location_id) {
      frontmatter.taxonomies['parent_location_id'] = [location.parent_location_id.toString()];
    }

    return {
      frontmatter,
      html: location.entry ?? ''
    };
  })
}