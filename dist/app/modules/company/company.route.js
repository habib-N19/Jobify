"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyRoutes = void 0;
const express_1 = __importDefault(require("express"));
const company_controller_1 = require("./company.controller");
const router = express_1.default.Router();
router.post('/create-company', company_controller_1.CompanyController.createCompany);
router.get('/:id', company_controller_1.CompanyController.getSingleCompany);
router.put('/update/:id', company_controller_1.CompanyController.updateCompany);
router.delete('/:id', company_controller_1.CompanyController.deleteCompany);
router.get('/', company_controller_1.CompanyController.getAllCompany);
exports.CompanyRoutes = router;
