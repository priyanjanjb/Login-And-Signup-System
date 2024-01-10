const { MongoClient } = require("mongodb");

async function main() {
  const uri =
    "mongodb+srv://priyanjanjb:v5eueYJfiBlVvU12@carelabel.gdkbswt.mongodb.net/";

  const carelabel = new MongoClient(uri);

  try {
    await carelabel.connect();
    console.log("connected to database");
    const list = await listDatabases(carelabel);
    console.log(list);
  } catch (e) {
    console.error(e);
  } finally {
    await carelabel.close();
    console.log("connection closed");
  }
}
