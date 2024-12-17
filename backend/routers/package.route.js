import {
  getAllPackages,
  createNewPackage,
  updatePackageInfo,
  updatePackageIsActiveStatus,
} from "../controllers/package.controller.js";
import { routes } from "./routepath.js";

export default (router) => {
  router.get(routes.PACKAGES, getAllPackages);
  router.post(routes.PACKAGE, createNewPackage);
  router.patch(routes.UPDATE_PACKAGE, updatePackageInfo);
  router.patch(routes.UPDATE_PACKAGE_STATUS, updatePackageIsActiveStatus);
};
