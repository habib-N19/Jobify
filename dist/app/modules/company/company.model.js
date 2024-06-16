"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Company = void 0;
const mongoose_1 = require("mongoose");
const companySchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    industry: {
        type: String,
        required: true,
    },
    contactEmail: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    jobs: [
        {
            type: mongoose_1.Schema.Types.ObjectId,
            ref: 'Job',
        },
    ],
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
    isDeleted: {
        type: Boolean,
        default: false,
    },
});
exports.Company = (0, mongoose_1.model)('Company', companySchema);
