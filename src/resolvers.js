module.exports = {
    Query: {
        getProjects: async (_,args, {dataSources}) => {
            return await dataSources.projectAPI.getProjects();
        },
        getProject: async(_,{id}, {dataSources}) => {
            return await dataSources.projectAPI.getProject({id});
        },


        getTeamMembers: async (_,args, {dataSources}) => {
            return await dataSources.teamMemberAPI.getTeamMembers();
        },
        getTeamMember: async(_,{id}, {dataSources}) => {
            return await dataSources.teamMemberAPI.getTeamMember({id});
        },


        getAdmins: async (_,args, {dataSources}) => {
            return await dataSources.adminAPI.getAdmins();
        },
        getAdmin: async(_,{id}, {dataSources}) => {
            return await dataSources.adminAPI.getAdmin({id});
        },


        getBlogPosts: async (_,args, {dataSources}) => {
            return await dataSources.blogAPI.getBlogPosts();
        },
        getBlogPost: async(_,{id}, {dataSources}) => {
            return await dataSources.blogAPI.getBlogPost({id});
        }
    },
    Mutation: {
        requestQuote: async (_,{quoteInput}, {dataSources}) => {
            return await dataSources.quoteAPI.requestQuote({quoteInput});
        },


        sendContactUsMessage: async (_, {messageInput}, {dataSources}) => {
            return await dataSources.messageAPI.sendContactUsMessage({messageInput});
        },


        unsubscribeFromNewsletter: async (_, {email}, {dataSources}) => {
            return await dataSources.newsletterAPI.unsubscribeFromNewsletter({email});
        },
        addToNewsletterList: async (_, {email}, {dataSources}) => {
            return await dataSources.newsletterAPI.addToNewsletterList({email});
        },


        deleteProject: async (_, {id}, {dataSources}) => {
            return await dataSources.projectAPI.deleteProject({id});
        },
        updateProject: async (_, {updateProjectInput}, {dataSources}) => {
            return await dataSources.projectAPI.updateProject({updateProjectInput});
        },
        createProject: async (_, {projectInput}, {dataSources}) => {
            return await dataSources.projectAPI.createProject({projectInput});
        },


        deleteTeamMember: async (_, {id}, {dataSources}) => {
            return await dataSources.teamMemberAPI.deleteTeamMember({id});
        },
        updateTeamMember: async (_, {updateTeamMemberInput}, {dataSources}) => {
            return await dataSources.teamMemberAPI.updateTeamMember({updateTeamMemberInput});
        },
        createTeamMember: async (_, {teamMemberInput}, {dataSources}) => {
            return await dataSources.teamMemberAPI.createTeamMember({teamMemberInput});
        },


        deleteAdmin: async (_, {id}, {dataSources}) => {
            return await dataSources.adminAPI.deleteAdmin({id});
        },
        updateAdmin: async (_, {updateAdminInput}, {dataSources}) => {
            return await dataSources.adminAPI.updateAdmin({updateAdminInput});
        },
        createAdmin: async (_, {adminInput}, {dataSources}) => {
            return await dataSources.adminAPI.createAdmin({adminInput});
        },


        deleteBlogPost: async (_, {id}, {dataSources}) => {
            return dataSources.blogAPI.deleteBlogPost({id});
        },
        updateBlogPost: async (_, {blogPostUpdateInput}, dataSources) => {
            return await dataSources.blogAPI.updateBlogPost({blogPostUpdateInput});
        },
        createBlog: async (_, { blogPostInput }, { dataSources }) => {
            const blogPost = await dataSources.blogAPI.createBlogPost({blogPostInput});
            return blogPost;
        }
    }
};