export const routes = {
  // health check
  HEALTH_CHECKING: "/v1/health-check",

  // authentication
  USER_REGISTER: "/v1/user-registration",
  USER_LOGIN: "/v1/user-login",

  // packages
  PACKAGE: "/v1/package",
  PACKAGES: "/v1/packages",
  UPDATE_PACKAGE: "/v1/packages/:packageId",
  UPDATE_PACKAGE_STATUS: "/v1/packages/:packageId/status",

  // companies
  COMPANY: "/v1/company",
  COMPANIES: "/v1/companies",
  FIND_COMPANY: "/v1/companies/:companyId",
  UPDATE_COMPANY: "/v1/company/:companyId",
};
