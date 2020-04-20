const { ApolloServer } = require("apollo-server");

require("dotenv").config({ path: "variables.env" });

const fs = require("fs");
const path = require("path");
const pathToTypeDefs = path.join(__dirname, "./src/typeDefs.gql");

const typeDefs = fs.readFileSync(pathToTypeDefs, "utf-8");
const resolvers = require("./src/resolvers");

const dataSources = require("./src/datasources");

const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources
});

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
    console.log(`Server is listening on ${url}`);
    console.log("--- node env ---", process.env.NODE_ENV);
});
