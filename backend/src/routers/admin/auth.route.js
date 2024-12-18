import {
  adminRegistration,
  adminLogin,
} from "../../controllers/admin/auth.controller.js";
import { routes } from "./routepath.js";

export default (router) => {
  router.post(routes.ADMIN_REGISTER, adminRegistration);
  router.post(routes.ADMIN_LOGIN, adminLogin);
};
