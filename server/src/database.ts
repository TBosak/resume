import * as mongodb from "mongodb";
import { Post } from "./post";

export const collections: {
   posts?: mongodb.Collection<Post>;
} = {};

export async function connectToDatabase(uri: string) {
   const client = new mongodb.MongoClient(uri);
   await client.connect();

   const db = client.db("bulletin");
   await applySchemaValidation(db);

   const postsCollection = db.collection<Post>("posts");
   collections.posts = postsCollection;
}

// Update our existing collection with JSON schema validation so we know our documents will always match the shape of our post model, even if added elsewhere.
// For more information about schema validation, see this blog series: https://www.mongodb.com/blog/post/json-schema-validation--locking-down-your-model-the-smart-way
async function applySchemaValidation(db: mongodb.Db) {
   const jsonSchema = {
       $jsonSchema: {
           bsonType: "object",
           required: ["name", "relation", "position", "description"],
           additionalProperties: false,
           properties: {
               _id: {},
               name: {
                   bsonType: "string",
                   description: "'name' is required and is a string",
               },
               relation: {
                bsonType: "string",
                description: "'relation' is required and is a string",
                },
                position: {
                  bsonType: "string",
                  description: "'position' is required and is a string",
                },
               description: {
                   bsonType: "string",
                   description: "'description' is required and is a string",
                   minLength: 5
               }
           },
       },
   };

   // Try applying the modification to the collection, if the collection doesn't exist, create it
  await db.command({
       collMod: "posts",
       validator: jsonSchema
   }).catch(async (error: mongodb.MongoServerError) => {
       if (error.codeName === 'NamespaceNotFound') {
           await db.createCollection("posts", {validator: jsonSchema});
       }
   });
}
