import { Knex } from "knex";
import knex from "../lib/knex.js";
import slugify from "../lib/slugify.js";
import GenericEntity, { Entity, Frontmatter, ReturnMigratedEntity } from "./generic-entity.js";

type JournalExtra = {
  journal: {
    date?: string;
    ingame_date?: string;
  }
}

type JournalTaxonomies = {
  journal_type: string[];
  journal_id: string[];
  character_id?: string[];
  location_id?: string[];
}

export interface JournalFrontmatter extends Frontmatter {
  title: string;
  slug?: string;
  extra: JournalExtra,
  taxonomies: JournalTaxonomies;
}

export default class Journal extends GenericEntity<JournalFrontmatter> implements JournalFrontmatter {
  readonly _directory: string = "misc";
  extra: JournalExtra;
  taxonomies: JournalTaxonomies;

  constructor(title: string) {
    super(title, "misc");
    this.extra = {
      journal: {
        date: '',
        ingame_date: '',
      }
    }
    this.taxonomies = {
      journal_type: [""],
      journal_id: [""],
      character_id: [""],
      location_id: [""],
    }
  }

  async migrate(knex: Knex<any, any[]>): Promise<ReturnMigratedEntity<JournalFrontmatter>[]> {
    const journals = await knex('journals')
      .select('*');

    return journals.map((journal) => {
      const frontmatter = <JournalFrontmatter>{
        title: journal.name,
        slug: slugify(journal.name),
        extra: {
          journal: {}
        },
        taxonomies: {
          journal_id: [journal.id.toString()],
        }
      };

      if (journal.calendar_year && journal.calendar_month && journal.calendar_day) {
        frontmatter.extra.journal.ingame_date = `${journal.calendar_year}-${journal.calendar_month}-${journal.calendar_day}`;
      } else {
        frontmatter.extra.journal.ingame_date = '';
      }

      if (journal.type) {
        frontmatter.taxonomies['journal_type'] = [journal.type.toLowerCase()];
      }
      if (journal.character_id) {
        frontmatter.taxonomies['character_id'] = [journal.character_id.toString()];
      }
      if (journal.location_id) {
        frontmatter.taxonomies['location_id'] = [journal.location_id.toString()];
      }

      return {
        frontmatter,
        html: journal.entry ?? ''
      };
    })
  }
}