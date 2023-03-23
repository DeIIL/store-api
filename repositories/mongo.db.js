import mongodb from "mongodb";

function getClient() {
  const uri =
    "mongodb+srv://root:nodejs@cluster0.gvhwjik.mongodb.net/?retryWrites=true&w=majority";
  return new mongodb.MongoClient(uri);
}

export { getClient };
