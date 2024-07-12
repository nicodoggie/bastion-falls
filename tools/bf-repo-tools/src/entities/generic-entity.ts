import { Knex } from "knex";

export interface Frontmatter {
  title: string;
  slug?: string;
  extra: {
    [key: string]: any;
  },
  taxonomies: {
    [key: string]: string[];
  }
}

export type ReturnMigratedEntity<FrontmatterType> = {
  frontmatter: FrontmatterType;
  html: string;
};

export abstract class Entity<FrontmatterType>{
  protected readonly _directory: string = '';
  abstract migrate(knex: Knex): Promise<ReturnMigratedEntity<FrontmatterType>[]>;

  public static create<T>(this: new (title: string) => T, title: string) {
    return new this(title);
  }
  get dir() {
    return this._directory;
  }
}

export default class GenericEntity<T> extends Entity<T> implements Frontmatter {
  _directory: string;

  title: string;
  slug?: string | undefined;
  extra: { [key: string]: any; };
  taxonomies: { [key: string]: string[]; };

  constructor(title: string, dir: string) {
    super();
    this._directory = dir;
    this.title = title;
    this.extra = {};
    this.taxonomies = {};
  }

  async migrate(knex: Knex<any, any[]>): Promise<ReturnMigratedEntity<T>[]> {
    throw Error('Generic Entity does not implement migators');
  }
}