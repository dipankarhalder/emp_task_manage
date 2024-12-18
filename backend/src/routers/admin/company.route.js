import {
  getCompanyInfo,
  getCompanyInfoById,
  createNewCompany,
  updateCompanyInfo,
  deleteCompany,
} from "../../controllers/admin/company.controller.js";
import { authorizeRole } from "../../middleware/authorize.js";
import { routes } from "./routepath.js";

export default (router) => {
  router.get(
    routes.COMPANIES,
    authorizeRole(["SUPERADMIN", "ADMIN"]),
    getCompanyInfo
  );
  router.get(
    routes.FIND_COMPANY,
    authorizeRole(["SUPERADMIN", "ADMIN"]),
    getCompanyInfoById
  );
  router.post(
    routes.COMPANY,
    authorizeRole(["SUPERADMIN", "ADMIN"]),
    createNewCompany
  );
  router.patch(
    routes.UPDATE_COMPANY,
    authorizeRole(["SUPERADMIN", "ADMIN"]),
    updateCompanyInfo
  );
  router.delete(
    routes.DELETE_COMPANY,
    authorizeRole(["SUPERADMIN", "ADMIN"]),
    deleteCompany
  );
};
