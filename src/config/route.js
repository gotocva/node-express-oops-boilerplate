import BaseConfig from "./Base";

/**
 * 
 */
export default class RouterConfig extends BaseConfig { 

    constructor() {
        super();
        this.router = this.express.Router();
    }

}