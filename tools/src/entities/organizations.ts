import { Knex } from "knex";
import slugify from "../lib/slugify.js";
import GenericEntity, { Entity, Frontmatter, ReturnMigratedEntity } from "./generic-entity.js";

type OrgExtra = {
  [key: string]: any;
  org: {
    date_established?: string;
    date_dissolved?: string;
  }
};

type OrgTaxonomies = {
  organization_id?: string[];
  leaders?: string[];
  organization_type?: string[];
};

export interface OrganizationFrontmatter extends Frontmatter {
  title: string;
  slug?: string;
  extra: OrgExtra;
  taxonomies: OrgTaxonomies;
}
export default class Organization extends GenericEntity<OrganizationFrontmatter> implements OrganizationFrontmatter {
  extra: OrgExtra;
  taxonomies: OrgTaxonomies;

  constructor(title: string) {
    super(title, "organizations");
    this.extra = { org: {} };
    this.taxonomies = {};
  }

  async migrate(knex: Knex<any, any[]>): Promise<ReturnMigratedEntity<OrganizationFrontmatter>[]> {
    const orgs = await knex('organisations')
      .select('*');

    return orgs.map((org): ReturnMigratedEntity<OrganizationFrontmatter> => {
      const frontmatter = <OrganizationFrontmatter>{
        title: org.name,
        slug: slugify(org.name),
        extra: {},
        taxonomies: {
          organization_id: [org.id.toString()],
        }
      };

      if (org.type) {
        frontmatter.taxonomies['organization_type'] = [org.type];
      }

      const html: string = org.entry ?? '';
      return { frontmatter, html }
    })
  }
}