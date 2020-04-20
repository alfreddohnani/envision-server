const {DataSource} = require("apollo-datasource");
const {hashPassword} = require("../lib");


class Admin extends DataSource{
    constructor({store}){
        super();
        this.store = store;
    }

    initialize(config){
        this.context = config.context;
    }


    async createAdmin({ adminInput }) {
        try {
            const { firstName, lastName, avatar,joinDate,email,password } = adminInput;

            const adminExists = await this.store.Admin
                .exists({ email })
                .exec();

            if (adminExists)
                throw new Error("This admin already exists already exists");

            const hashedPassword = hashPassword(password);
            if (hashedPassword) {
                const newAdmin = await new this.store.Admin({
                    firstName,
                    lastName,
                    avatar,
                    joinDate,
                    email,
                    password: hashedPassword
                }).save();

                return newAdmin || {};
            }
        } catch (error) {
            throw new Error(error);
        }
    }

    async getAdmin({ id }) {
        try {
            const admin = await this.store.Admin
                .findById(id)
                .exec();

            if(!admin) throw new Error("This admin does not exist");

            return admin || {};
        } catch (error) {
            throw new Error(error);
        }
    }

    async getAdmins(){
        try {
            const admins = await this.store.Admin
                .find({})
                .exec();

            return admins || {};
        } catch (error) {
            throw new Error(error);
        }
    }

    async updateAdmin({adminUpdateInput}){
        try {
            const {id, ...update} = adminUpdateInput;
            const admin = await this.store.Admin
                .findByIdAndUpdate(id, update)
                .exec();

            return admin || {};
        } catch (error) {
            throw new Error(error);
        }
    }

    async deleteAdmin({id}){
        try {
            return await this.store.Admin
                .findByIdAndDelete(id)
                .exec() || {};
        } catch (error) {
            throw new Error(error);
        }
    }
}

module.exports = Admin;