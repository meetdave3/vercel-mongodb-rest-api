import { Db, MongoClient } from 'mongodb';
import * as url from 'url';

const uri: string = process.env.MONGODB_URI;

let conn: Db = null;

export default async (): Promise<Db> => {

  if (conn) return conn;

  try {
    const client: MongoClient = await MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    const db: Db = await client.db(url.parse(uri).pathname.substr(1));

    conn = db;
    return db;
  } catch(e) {
    throw new Error(e);
  }
}