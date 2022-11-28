import BaseConfig from "./base";



/**
 * Mongoose configuration class to connect mongodb using Mongoose
 */
export default class Mongoose extends BaseConfig {

    constructor() {
        super();
    }

    /**
     * 
     */
    connectDB() {
        this.mongoose.connect(this.ENV.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true });

        // when successfully connected
        this.mongoose.connection.on('connected', () => {
            console.log('Mongodb successfully connected');
        });
        // if the connection throws an error
        this.mongoose.connection.on("error", (err) => {
            //   if you get error for the first time when this gets started make sure to run mongodb
            console.log('Mongodb connection failed', err);
        });
        // when the connection is disconnected
        this.mongoose.connection.on("disconnected", () => {
            console.log('Mongodb connection disconnected');
        });
    }
}
