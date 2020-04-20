const {DataSource } = require("apollo-datasource");

class Quote extends DataSource{
    constructor({store}){
        super();
        this.store = store;
    }

    initialize(config){
        this.context = config.context;
    }

    async requestQuote({quoteInput}){
        return await new this.store.Quote(quoteInput);
    }
}

module.exports = Quote;