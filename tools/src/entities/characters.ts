import { Knex } from "knex";
import slugify from "../lib/slugify.js";
import GenericEntity, { Entity, Frontmatter, ReturnMigratedEntity } from "./generic-entity.js";

type CharacterExtra = {
  mortality_status?: 'Alive' | 'Dead' | 'Unknown' | 'Undead';
  ddb?: string;
  kingraph_key?: string;
  cha: {
    [key: string]: any;
    age?: number | '';
    sex?: string;
    pronouns?: string;
    date_of_birth?: string;
    date_of_death?: string;
    married_to?: string;
    married_on?: string;
  }
}

type CharacterTaxonomies = {
  families?: string[];
  parents?: string[];
  children?: string[];
  siblings?: string[];
  organizations?: string[];
  ethnicities?: string[];
  species?: string[];
};

export interface CharacterFrontmatter extends Frontmatter {
  title: string;
  slug?: string;
  extra: CharacterExtra;
  taxonomies: CharacterTaxonomies;
}

export default class Character extends GenericEntity<CharacterFrontmatter> implements CharacterFrontmatter {
  extra: CharacterExtra;
  taxonomies: CharacterTaxonomies;

  constructor(title: string) {
    super(title, "characters");
    this.extra = {
      cha: {
        age: '',
        sex: '',
        pronouns: '',
        date_of_birth: '',
        date_of_death: '',
        married_to: '',
        married_on: '',
      }
    };
    this.taxonomies = {
      families: [],
      parents: [],
      children: [],
      siblings: [],
      organizations: [],
      ethnicities: [],
      species: [],
    };
  }

  async migrate(knex: Knex<any, any[]>): Promise<ReturnMigratedEntity<CharacterFrontmatter>[]> {
  const chars = await knex('characters')
    .select('*');

    return chars.map((char): ReturnMigratedEntity<CharacterFrontmatter> => {
      const frontmatter = <CharacterFrontmatter>{
        title: char.name,
        slug: slugify(char.name),
        extra: {
          cha: {
            age: char.age || '',
            sex: char.sex || '',
            pronouns: char.pronouns || '',
          }
        },
        taxonomies: {
          character_id: [char.id.toString()],
        }
      };

      const html: string = char.entry ?? '';
      return { frontmatter, html };
    });
  }
}