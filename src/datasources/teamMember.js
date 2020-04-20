const {DataSource} = require("apollo-datasource");

class TeamMember extends DataSource{
    constructor({store}){
        super();
        this.store = store;
    }

    initialize(config){
        this.context = config.context;
    }


    async createTeamMember({ teamMemberInput }) {
        try {
            const { firstName, lastName, avatar, description, role } = teamMemberInput;
            const teamMemberExists = await this.store.TeamMember
                .exists({ firstName, lastName, })
                .exec();

            if (teamMemberExists)
                throw new Error("This team member already exists");
            const newTeamMember = await new this.store.TeamMember({
                firstName, lastName, avatar, description, role
            }).save();

            return newTeamMember || {};
        } catch (error) {
            throw new Error(error);
        }
    }

    async getTeamMember({ id }) {
        try {
            const teamMember = await this.store.TeamMember
                .findById(id)
                .exec();

            if(!teamMember) throw new Error("This team member does not exist");

            return teamMember || {};
        } catch (error) {
            throw new Error(error);
        }
    }

    async getTeamMembers(){
        try {
            const teamMembers = await this.store.TeamMember
                .find({})
                .exec();

            return teamMembers || {};
        } catch (error) {
            throw new Error(error);
        }
    }

    async updateTeamMember({teamMemberUpdateInput}){
        try {
            const {id, ...update} = teamMemberUpdateInput;
            const teamMember = await this.store.TeamMember
                .findByIdAndUpdate(id, update)
                .exec();

            return teamMember;
        } catch (error) {
            throw new Error(error);
        }
    }

    async deleteTeamMember({id}){
        try {
            return await this.store.TeamMember
                .findByIdAndDelete(id)
                .exec() || {};
        } catch (error) {
            throw new Error(error);
        }
    }
}

module.exports = TeamMember;