const {DataSource} = require("apollo-datasource");

class Message extends DataSource{
    constructor({store}){
        super();
        this.store = store;
    }

    initialize(config){
        this.context = config.context;
    }

    async sendContactUsMessage({messageInput}){
        return await new this.store.Message(messageInput);
    }
}

module.exports = Message;