import {
  getCompanyInfo,
  getCompanyInfoById,
  createNewCompany,
  updateCompanyInfo,
} from "../controllers/company.controller.js";
import { routes } from "./routepath.js";

export default (router) => {
  router.get(routes.COMPANIES, getCompanyInfo);
  router.get(routes.FIND_COMPANY, getCompanyInfoById);
  router.post(routes.COMPANY, createNewCompany);
  router.patch(routes.UPDATE_COMPANY, updateCompanyInfo);
};
