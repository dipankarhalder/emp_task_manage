import express from "express";

import healthCheck from "./admin/healthCheck.route.js";
import authentication from "./admin/auth.route.js";
import packages from "./admin/package.route.js";
import companies from "./admin/company.route.js";

/* router with default export */
const router = express.Router();

export default () => {
  healthCheck(router);
  authentication(router);
  packages(router);
  companies(router);

  return router;
};
