const { ApolloServer } = require("apollo-server");
const {createStore} = require("./src/utils");
require("dotenv").config({ path: "variables.env" });

const fs = require("fs");
const path = require("path");
const pathToTypeDefs = path.join(__dirname, "./src/typeDefs.gql");


const typeDefs = fs.readFileSync(pathToTypeDefs, "utf-8");
const resolvers = require("./src/resolvers");
const store = createStore();

const server = new ApolloServer({
    typeDefs,
    resolvers,
});
