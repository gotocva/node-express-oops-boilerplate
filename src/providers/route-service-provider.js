

import Express from "../config/express";
import userRouter from "../modules/v1/user/routes";
import responseHandler from "../utils/response-handler";


export default class RouteServiceProvider {

    constructor() {
        this.app = new Express();
        this.loadRoutes();
        this.notFound();
    }

    loadRoutes() {
        this.app.expressApp.get('/', (req, res) => { res.send('Application api working'); });
        this.app.expressApp.use('/user', userRouter);
    }

    notFound() {
        this.app.expressApp.use((req, res, next) => {
            return responseHandler.errorResponse(res, {}, 'Requested route not found', 404);
        });
    }
}