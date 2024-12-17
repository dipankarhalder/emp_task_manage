import express from "express";

import healthCheck from "./healthCheck.route.js";
import authentication from "./auth.route.js";
import packages from "./package.route.js";
import companies from "./company.route.js";

/* router with default export */
const router = express.Router();

export default () => {
  healthCheck(router);
  authentication(router);
  packages(router);
  companies(router);

  return router;
};
