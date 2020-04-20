const { createStore } = require("../utils");
const store = createStore();

const Quote = require("./quote");
const Message = require("./message");
const Newsletter = require("./newsletter");
const Project = require("./project");
const TeamMember = require("./teamMember");
const AdminAPI = require("./admin");
const BlogAPI = require("./blog");

const dataSources = () => ({
    quoteAPI: new Quote({store}),
    messageAPI: new Message({store}),
    newsletterAPI: new Newsletter({store}),
    projectAPI: new Project({store}),
    teamMemberAPI: new TeamMember({store}),
    adminAPI: new AdminAPI({store}),
    blogAPI: new BlogAPI({store})
});
module.exports = dataSources;