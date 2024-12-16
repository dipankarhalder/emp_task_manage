import { getHealthCheck } from "../controllers/healthCheck.controller.js";
import { routes } from "./routepath.js";

export default (router) => {
  router.get(routes.HEALTH_CHECKING, getHealthCheck);
};
