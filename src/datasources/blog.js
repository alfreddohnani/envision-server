const { DataSource } = require("apollo-datasource");

class BlogAPI extends DataSource {
    constructor({ store }) {
        super();
        this.store = store;
    }

    initialize(config) {
        this.context = config.context;
    }

    async createBlogPost({ blogPostInput }) {
        try {
            const { title, image, content } = blogPostInput;
            const blogPostExists = await this.store.Blog
                .exists({ title })
                .exec();

            if (blogPostExists)
                throw new Error("A blog post with this title already exists");
            const newBlogPost = await new this.store.Blog({
                title,
                image,
                content,
            }).save();

            return newBlogPost || {};
        } catch (error) {
            throw new Error(error);
        }
    }

    async getBlogPost({ id }) {
        try {
            const blogPost = await this.store.Blog
                .findById(id)
                .exec();

            if(!blogPost) throw new Error("This blog post does not exist");

            return this.store.Blog
                .populate(blogPost, [{path: "author", model: "Admin"}])
                  || {};
        } catch (error) {
            throw new Error(error);
        }
    }

    async getBlogPosts(){
        try {
            const blogPosts = await this.store.Blog
                .find({})
                .sort({createdAt: "desc"})
                .exec();

            return blogPosts || {};
        } catch (error) {
            throw new Error(error);
        }
    }

    async updateBlogPost({blogPostUpdateInput}){
        try {
            const {id, update} = blogPostUpdateInput;
            const blogPost = await this.store.Blog.findByIdAndUpdate(id, update).populate(blogPost, [{path: "author", model: "Admin"}])
                .exec();

            return blogPost;
        } catch (error) {
            throw new Error(error);
        }
    }

    async deleteBlogPost({id}){
        try {
            return await this.store.Blog.findByIdAndDelete(id).exec() || {};
        } catch (error) {
            throw new Error(error);
        }
    }
}

module.exports = BlogAPI;
