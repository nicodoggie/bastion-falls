import knex from "../lib/knex.js";
import slugify from "../lib/slugify.js";

export interface CharacterFrontmatter {
  title: string;
  slug?: string;
  extra: {
    mortality_status?: 'Alive' | 'Dead' | 'Unknown' | 'Undead';
    ddb?: string;
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
  };
  taxonomies: {
    parents?: string[];
    children?: string[];
    siblings?: string[];
    organization_type?: string[];
  };
}

export function create(title: string): { dir: string, data: CharacterFrontmatter } {
  return {
    dir: 'characters',
    data: {
      title,
      extra: {
        cha: {
          age: '',
          sex: '',
          pronouns: '',
          date_of_birth: 'date#',
          date_of_death: 'date#',
          married_to: '',
          married_on: 'date#',
        },
        mortality_status: undefined,
        ddb: '',
      },
      taxonomies: {}
    }
  }
}


export default async () => {
  const chars = await knex('characters')
    .select('*');

  return chars.map((char) => {
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

    return {
      frontmatter,
      html: char.entry ?? ''
    };
  });
}