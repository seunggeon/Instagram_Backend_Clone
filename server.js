require("dotenv").config();
import http, { Server } from "http";
import express from "express";
import logger from "morgan";
import { ApolloServer } from "apollo-server-express";
import { typeDefs, resolvers } from "./schema";
import { getUser } from "./users/users.utils";

const PORT = process.env.PORT;
const apollo = new ApolloServer(
    {
        resolvers,
        typeDefs,
        context: async (ctx) =>{
            if(ctx.req) {
                return {
                    loggedInUser: await getUser(ctx.req.headers.token),
                };
            }   else {
                const {
                    connection: {context},
                } = stx;
            }   return {
                loggedInUser: context.loggedInUser,
            };
        }
    }
);

server.listen().then(() => console.log("Server is running on http://localhost:4000/"));