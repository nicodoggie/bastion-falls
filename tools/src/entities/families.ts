import { Knex } from "knex";
import slugify from "../lib/slugify.js";
import GenericEntity, { Frontmatter, ReturnMigratedEntity } from "./generic-entity.js";

type FamilyExtra = {
  [key: string]: any;
  image?: string;
  family: {
    [key: string]: any;
  }
}

export interface FamilyFrontmatter extends Frontmatter {
  title: string;
  slug?: string;
  extra: {};
  taxonomies: {
    family_id?: string[];
    family_location_id?: string[];
    parent_family_id?: string[];
  };
}

export default class Family extends GenericEntity<FamilyFrontmatter> implements FamilyFrontmatter {
  extra: FamilyExtra;
  constructor(title: string) {
    super(title, 'families');
    this.extra = {
      image: '',
      family: {}
    };
  }

  async migrate(knex: Knex<any, any[]>): Promise<ReturnMigratedEntity<FamilyFrontmatter>[]> {
    const families = await knex('families')
      .select('*');

    return families.map((family) => {
      const frontmatter = <FamilyFrontmatter>{
        title: family.name,
        slug: slugify(family.name),
        taxonomies: {
          family_id: [family.id.toString()],
        }
      };

      if (family.location_id) {
        frontmatter.taxonomies['family_location_id'] = [family.location_id.toString()];
      }

      if (family.family_id) {
        frontmatter.taxonomies['parent_family_id'] = [family.family_id];
      }

      return {
        frontmatter,
        html: family.entry ?? ''
      };
    });
  }
}
