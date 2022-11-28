
import cors from 'cors';
import xss from 'xss-clean';

import BaseConfig from "./base";


export default class Express extends BaseConfig {

    constructor() {
        super();        
        // sanitize request data
        this.expressApp.use(xss());
        // enable cors
        this.expressApp.use(cors());
        // parse urlencoded request body
        this.expressApp.use(this.express.urlencoded({ extended: true }));
        // parse response body
        this.expressApp.use(this.express.json());
    }
}