import { getAllPackages, createNewPackage, updatePackageInfo, updatePackageIsActiveStatus } from "../../controllers/admin/package.controller.js";
import { authorizeRole } from "../../middleware/authorize.js";
import { routes } from "./routepath.js";

export default (router) => {
  router.get(routes.PACKAGES, authorizeRole(["SUPERADMIN", "INT_ADMIN"]), getAllPackages);
  router.post(routes.PACKAGE, authorizeRole(["SUPERADMIN", "INT_ADMIN"]), createNewPackage);
  router.patch(routes.UPDATE_PACKAGE, authorizeRole(["SUPERADMIN", "INT_ADMIN"]), updatePackageInfo);
  router.patch(routes.UPDATE_PACKAGE_STATUS, authorizeRole(["SUPERADMIN", "INT_ADMIN"]), updatePackageIsActiveStatus);
};
