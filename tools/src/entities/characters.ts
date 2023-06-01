import knex from "../lib/knex.js";
import slugify from "../lib/slugify.js";

export interface CharacterFrontmatter {
  title: string;
  slug?: string;
  extra: {
    mortality_status?: ['Alive', 'Dead', 'Unknown', 'Undead'];
    ddb?: string;
    cha: {
      [key: string]: any;
      age?: number | undefined;
      sex?: string;
      pronouns?: string;
      date_of_birth?: string;
      date_of_death?: string;
      married_to?: string;
      married_on?: string;
    }
  };
  taxonomies: {
    character_id: string[];
    family_id: string[];
    organization_type?: string[];
  };
}

export function create(title: string) {
  return {
    dir: 'characters',
    data: {
      title,
      extra: {
        age: undefined,
        sex: '',
        pronouns: '',
        date_of_birth: 'date#',
        date_of_death: 'date#',
        mortality_status: "Dead|Alive|Unknown|Undead",
        ddb: '',
        married_to: '',
        married_on: 'date#',
      }
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

    if (char.family_id) {
      frontmatter.taxonomies['family_id'] = [char.family_id.toString()];
    }

    return {
      frontmatter,
      html: char.entry ?? ''
    };
  });
}