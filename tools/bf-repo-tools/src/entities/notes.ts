import { Knex } from "knex";
import knex from "../lib/knex.js";
import slugify from "../lib/slugify.js";
import GenericEntity, { Frontmatter, ReturnMigratedEntity } from "./generic-entity.js";

type NoteExtra = {
  note: {
    date?: string;
    ingame_date?: string;
  }
};

export interface NoteFrontmatter extends Frontmatter {
  title: string;
  slug?: string;
  extra: NoteExtra;
  taxonomies: {
    note_type?: string[]
    note_id?: string[];
  }

}

export default class Note extends GenericEntity<NoteFrontmatter> implements NoteFrontmatter {
  extra: NoteExtra;

  constructor(title: string) {
    super(title, 'notes');
    this.extra = {
      note: {
        date: '',
        ingame_date: ''
      }
    }
  }
  async migrate(knex: Knex<any, any[]>): Promise<ReturnMigratedEntity<NoteFrontmatter>[]> {
    const notes = await knex('notes')
      .select('*');

    return notes.map((note) => {
      const frontmatter = <NoteFrontmatter>{
        title: note.name,
        slug: slugify(note.name),
      };

      return {
        frontmatter,
        html: note.entry ?? ''
      };
    })
  }
}