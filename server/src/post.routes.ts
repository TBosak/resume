import * as express from "express";
import * as mongodb from "mongodb";
import { collections } from "./database";

export const postRouter = express.Router();
postRouter.use(express.json());

postRouter.get("/", async (_req, res) => {
   try {
       const posts = await collections.posts.find({}).toArray();
       res.status(200).send(posts);
   } catch (error) {
       res.status(500).send(error.message);
   }
});

postRouter.post("/", async (req, res) => {
  try {
      const post = req.body;
      const result = await collections.posts.insertOne(post);

      if (result.acknowledged) {
          res.status(201).send(`Created a new employee: ID ${result.insertedId}.`);
      } else {
          res.status(500).send("Failed to create a new employee.");
      }
  } catch (error) {
      console.error(error);
      res.status(400).send(error.message);
  }
});
