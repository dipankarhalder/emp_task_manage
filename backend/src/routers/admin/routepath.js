export const routes = {
  // health check
  HEALTH_CHECKING: "/v1/admin/health-check",

  // authentication
  ADMIN_REGISTER: "/v1/admin/admin-register",
  ADMIN_LOGIN: "/v1/admin/admin-login",

  // packages
  PACKAGE: "/v1/admin/package",
  PACKAGES: "/v1/admin/packages",
  UPDATE_PACKAGE: "/v1/admin/packages/:packageId",
  UPDATE_PACKAGE_STATUS: "/v1/admin/packages/:packageId/status",

  // companies
  COMPANY: "/v1/admin/company",
  COMPANIES: "/v1/admin/companies",
  FIND_COMPANY: "/v1/admin/companies/:companyId",
  UPDATE_COMPANY: "/v1/admin/company/:companyId",
  DELETE_COMPANY: "/v1/admin/company/:companyId",
};
