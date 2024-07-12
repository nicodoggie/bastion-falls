import { Knex } from "knex";
import knex from "../lib/knex.js";
import slugify from "../lib/slugify.js";
import GenericEntity, { Frontmatter, ReturnMigratedEntity } from "./generic-entity.js";

type EventExtra = {
  evt: {
    [key: string]: any;
    date_started?: string;
    date_ended?: string;
  }
}
type EventTaxonomies = {
  event_id?: string[];
  event_type?: string[];
  parent_event_id?: string[];
}

export interface EventFrontmatter extends Frontmatter {
  title: string;
  slug?: string;
  extra: EventExtra;
  taxonomies: EventTaxonomies;
}

export default class Event extends GenericEntity<EventFrontmatter> implements EventFrontmatter {
  extra: EventExtra;
  constructor(title: string) {
    super(title, 'events');
    this.extra = {
      evt: {
        date_started: '',
        date_ended: '',
      },
    }
  }
  async migrate(knex: Knex<any, any[]>): Promise<ReturnMigratedEntity<EventFrontmatter>[]> {
    const events = await knex('events')
      .select('*');

    return events.map((event) => {
      const frontmatter = <EventFrontmatter>{
        title: event.name,
        slug: slugify(event.name),
        extra: {
          evt: {
            date_started: event.date ?? '',
          }
        },
        taxonomies: {
          event_id: [event.id.toString()]
        }
      };

      if (event.type) {
        frontmatter.taxonomies['event_type'] = [event.type];
      }

      if (event.event_id) {
        frontmatter.taxonomies['parent_event_id'] = [event.type];
      }

      return {
        frontmatter,
        html: event.entry ?? ''
      };
    })
  }
}