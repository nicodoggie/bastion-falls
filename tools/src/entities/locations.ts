import { Knex } from "knex";
import migrate from "../commands/migrate.js";
import knex from "../lib/knex.js";
import slugify from "../lib/slugify.js";
import GenericEntity, { Frontmatter, ReturnMigratedEntity } from "./generic-entity.js";

type LocationExtra = {
  location: {
    [key: string]: any;
    population?: number | '';
  };
}

type LocationTaxonomies = {
  location_id?: string[];
  location_type?: string[];
  parent_location?: string[];
}

export interface LocationFrontmatter extends Frontmatter {
  title: string;
  slug?: string;
  extra: LocationExtra;
  taxonomies: LocationTaxonomies;
}

export default class Location extends GenericEntity<LocationFrontmatter> implements LocationFrontmatter {
  extra: LocationExtra;
  constructor(title: string) {
    super(title, 'locations');
    this.extra = {
      location: {
        details: {
          population: '',
        }
      }
    }
    this.taxonomies = {
      location_type: [],
      parent_location: [],
    }
  }

  async migrate(knex: Knex<any, any[]>): Promise<ReturnMigratedEntity<LocationFrontmatter>[]> {
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

      return {
        frontmatter,
        html: location.entry ?? ''
      };
    });
  }
}
