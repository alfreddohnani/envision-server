const {DataSource} = require("apollo-datasource");

class Newsletter extends DataSource{
    constructor({store}){
        super();
        this.store = store;
    }

    initialize(config){
        this.context = config.context;
    }

    async addToNewsletterList({email}){
        try {
            const emailExists = await this.store.Newsletter.exists({email});
            if(emailExists) throw new Error("You have already subscribed for our newsletter");

            const subscribed = await this.store.Newsletter({email});

            if(subscribed) return "Subscription successful";
        } catch (error) {
            throw new Error(error);
        }
    }

    async unsubscribeFromNewsletter({email}){
        try {
            const emailExists = await this.store.Newsletter.exists({email});
            if(emailExists) throw new Error("You have already unsubscribed from our newsletter");
            const deleted = this.store.deleteOne({email});

            if (deleted) return "We are sorry to see you go";
        } catch (error) {
            throw new Error(error);
        }
    }
}

module.exports = Newsletter;