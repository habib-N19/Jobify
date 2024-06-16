"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendResponse = void 0;
const sendResponse = (res, options) => {
    const { statusCode, success, message, data, total, page, pages } = options;
    const response = {
        success,
        message,
        data,
        total,
        page,
        pages,
    };
    res.status(statusCode).json(response);
};
exports.sendResponse = sendResponse;
