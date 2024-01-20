const errorHandler = (err, req, res, next) => {

    const statusCode = err.statusCode || 500;

    const errorResponse = {
        error: {
            menssage: err.menssage || "Error interno del servidor",
            code: err.code || "internal_error",
        },
    };

    res.status(statusCode).json(errorResponse);
};

module.exports = errorHandler;