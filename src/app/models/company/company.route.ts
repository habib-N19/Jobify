import express from "express";
import { CompanyController } from "./company.controller";
const router = express.Router();
router.post("/create-company", CompanyController.createCompany);
router.get("/:companyId", CompanyController.getSingleCompany);
router.patch("/:companyId", CompanyController.updateCompany);
router.delete("/:companyId", CompanyController.deleteCompany);
router.get("/", CompanyController.getAllCompany);

export const CompanyRoutes = router;
