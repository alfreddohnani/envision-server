const {DataSource} = require("apollo-datasource");

class Project extends DataSource{
    constructor({store}){
        super();
        this.store = store;
    }

    initialize(config){
        this.context = config.context;
    }


    async createProject({ projectInput }) {
        try {
            const { name, link, image, description } = projectInput;
            const projectExists = await this.store.Project
                .exists({ name })
                .exec();

            if (projectExists)
                throw new Error("This project already exists");
            const newProject = await new this.store.Project({
                name, link, image, description
            }).save();

            return newProject || {};
        } catch (error) {
            throw new Error(error);
        }
    }

    async getProject({ id }) {
        try {
            const project = await this.store.Project
                .findById(id)
                .exec();

            if(!project) throw new Error("This project does not exist");

            return project || {};
        } catch (error) {
            throw new Error(error);
        }
    }

    async getProjects(){
        try {
            const projects = await this.store.Project
                .find({})
                .exec();

            return projects || {};
        } catch (error) {
            throw new Error(error);
        }
    }

    async updateProject({projectUpdateInput}){
        try {
            const {id, ...update} = projectUpdateInput;
            const project = await this.store.Project
                .findByIdAndUpdate(id, update)
                .exec();

            return project;
        } catch (error) {
            throw new Error(error);
        }
    }

    async deleteProject({id}){
        try {
            return await this.store.Project
                .findByIdAndDelete(id)
                .exec() || {};
        } catch (error) {
            throw new Error(error);
        }
    }
}

module.exports = Project;