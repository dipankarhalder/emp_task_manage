import { userRegistration, userLogin } from "../controllers/auth.controller.js";
import { routes } from "./routepath.js";

export default (router) => {
  router.post(routes.USER_REGISTER, userRegistration);
  router.post(routes.USER_LOGIN, userLogin);
};
