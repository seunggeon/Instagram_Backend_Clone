require('dotenv').config();
import express from "express";
import logger from "morgan";
import  {typeDefs, resolvers} from "./schema";
import {ApolloServer} from "apollo-server-express";
import { getUser, protectResolver } from "./src/users/users.util";
import { mergeTypeDefs } from "graphql-tools";


const apollo = new ApolloServer({
   typeDefs,
   resolvers,
   context: async({req}) =>{
      return{
         loggedInUser :await getUser(req.headers.token),
         protectResolver,
      };
   },
});

const PORT = process.env.PORT;

const app = express();
app.use(logger("tiny"));
server.applyMiddleware({app});

app.listen({port: PORT}, () => {
   console.log(`★ Server is running on http://localhost:${PORT}/graphql`);
});