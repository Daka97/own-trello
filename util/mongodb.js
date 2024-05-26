import { MongoClient } from 'mongodb';

// const {  MONGODB_DB } = process.env;
const MONGODB_URI = 'mongodb+srv://urdavlet:vywSnnwQyLw4tXCF@cluster0.obefa7r.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
const MONGODB_DB = 'trello-online'

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
}

if (!MONGODB_DB) {
  throw new Error('Please define the MONGODB_DB environment variable inside .env.local');
}

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */
// let cached = global.mongo;

// if (!cached) {
//   cached = global.mongo = { conn: null, promise: null };
// }

export async function connectToDatabase() {
  // if (cached.conn) {
  //   return cached.conn;
  // }

  // if (!cached.promise) {
    const opts = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000, // Adjust as necessary
      connectTimeoutMS: 10000, // Adjust as necessary
    };

    const mongoURL ='mongodb+srv://urdavlet:vywSnnwQyLw4tXCF@cluster0.obefa7r.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

      console.log(mongoURL, "MONGOURL")
    cached.promise = MongoClient.connect(mongoURL, opts).then((client) => {
      return {
        client,
        db: client.db(MONGODB_DB)
      };
    });
  // }
  cached.conn = await cached.promise;
  console.log(cached.conn, "CACHED")
  return cached.conn;
}
