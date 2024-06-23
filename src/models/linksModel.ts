import pg from 'pg'
import 'dotenv/config'
import { drizzle } from 'drizzle-orm/node-postgres';
import * as schema from '../db/schema.js'

const { Client } = pg;

interface InboundLink {
  url: string,
  tags: string,
}

export class LinkModel {
  static getLink = async () => {
    const client = new Client();
    const db = drizzle(client, { schema });
    await client.connect();
    const res = await db.select().from(schema.links)
    await client.end()
    return res;
  }

  // prepareData

  // postLink = async(newLink: InboundLink) => {

  // }
}


// Using Drizzle to interact with the Databse
export const getLinksDB = async () => {
  const client = new Client();
  const db = drizzle(client, { schema });
  await client.connect();
  const res = await db.select().from(schema.links)
  await client.end()
  return res;
}

export const postLinksDB = async (newLink: InboundLink) => {
  const client = new Client();
  const db = drizzle(client, { schema });
  try {
    await client.connect()
    const res = await db.insert(schema.links).values(newLink).returning({ insertedId: schema.links.id });
    await client.end()
    return res;
  } catch (err: any) {
    await client.end()
    throw new Error(err);
  }
}


// TO-DO LIST
// ! Need to convert to connection pooling


// PREVIOUS DATABASE CONNECTION IMPLEMENTATIONS
// Interacting with DB directly through node-postgres ('pg')

// export const getLinksDBOld = async () => {
//   await client.connect();
//   const res = await client.query('SELECT * FROM links');
//   await client.end();
//   return res.rows;
// }


// export const postLinksDBOld = async (linkData: Link) => {
//   const text = 'INSERT INTO links(link, tags) VALUES($1, $2) RETURNING *'
//   const values = [linkData.url, linkData.tags]
//   await client.connect();

//   try {
//     await client.query(text, values);
//   } catch (err) {
//     throw new Error('Failed to post to DB');
//   }
// }