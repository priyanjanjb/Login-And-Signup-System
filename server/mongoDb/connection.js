const { MongoClient } = require("mongodb");

async function main() {
  const uri =
    "mongodb+srv://priyanjanjb:v5eueYJfiBlVvU12@carelabel.gdkbswt.mongodb.net/";

  const carelabel = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    await carelabel.connect();
    console.log("connected to the database");
    const list = await listDatabases(carelabel);
    console.log(list);
  } catch (e) {
    console.error(e);
  } finally {
    await carelabel.close();
    console.log("connection closed");
  }
}

main().catch(console.error);

/**
 * Print the names of all available databases
 * @param {MongoClient} client A MongoClient that is connected to a cluster
 */
async function listDatabases(client) {
  const databasesList = await client.db().admin().listDatabases();

  console.log("Databases:");
  databasesList.databases.forEach((db) => console.log(` - ${db.name}`));
}
