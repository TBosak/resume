import * as mongodb from "mongodb";

export interface Post {
   name: string;
   relation: string;
   position: string;
   description: string;
   _id?: mongodb.ObjectId;
}
