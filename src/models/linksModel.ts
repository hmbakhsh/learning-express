import pg from 'pg'

const { Client } = pg;
const client = new Client();
await client.connect();

const res = await client.query('SELECT * FROM links');
console.log(res);
await client.end();