import responseHandler from "../../../../utils/response-handler";




class LoginController {

    constructor() {
    }

    login(req, res) {
        // TODO login logics
        responseHandler.successResponse(res);
    }
}


const loginController = new LoginController();

module.exports = loginController;