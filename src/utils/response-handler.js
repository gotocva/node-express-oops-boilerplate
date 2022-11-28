



class ResponseHandler {

    successResponse = (res, data = {}, message = '', statusCode = 200) => { 
        return res.status(statusCode).json({
            status_code: statusCode,
            status: true,
            message: message,
            data: data
        });
    }

    errorResponse = (res, data = {}, message = '', statusCode = 500) => { 
        return res.status(statusCode).json({
            status_code: statusCode,
            status: false,
            message: message,
            data: data
        });
    }
}

const responseHandler = new ResponseHandler();

module.exports = responseHandler;

