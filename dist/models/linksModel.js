import pg from 'pg';
import 'dotenv/config';
import { drizzle } from 'drizzle-orm/node-postgres';
import * as schema from '../db/schema.js';
const { Client } = pg;
const client = new Client();
const db = drizzle(client, { schema });
// Using Drizzle to interact with the Databse
export const getLinksDB = async () => {
    await client.connect();
    const res = await db.select().from(schema.links);
    await client.end();
    return res;
};
export const postLinksDB = async (newLink) => {
    try {
        await client.connect();
        const res = await db.insert(schema.links).values(newLink).returning({ insertedId: schema.links.id });
        await client.end();
        return res;
    }
    catch (err) {
        await client.end();
        throw new Error('Unable to insert data into the Database. Try again.');
    }
};
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
//# sourceMappingURL=linksModel.js.map