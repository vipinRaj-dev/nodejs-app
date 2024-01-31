import { MongoClient } from "mongodb";

// const password = encodeURIComponent(process.env.MONGO_PASSWORD.trim());
const connectionString = 'mongodb+srv://vipinraj19060057:Vipin9645@devcluster.uayvlsc.mongodb.net/?retryWrites=true&w=majority'
const client = new MongoClient(connectionString);
let conn;
try {
  conn = await client.connect();
  console.log("connection successful")
} catch(e) {
  console.error(e);
}
let db = conn.db("userdetails");
export default db;