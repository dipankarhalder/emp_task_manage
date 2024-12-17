export const routes = {
  // health check
  HEALTH_CHECKING: "/v1/health-check",

  // authentication
  USER_REGISTER: "/v1/user-registration",
  USER_LOGIN: "/v1/user-login",

  // packages
  PACKAGES: "/v1/packages",
  PACKAGE: "/v1/package",
  UPDATE_PACKAGE: "/v1/packages/:packageId",
  UPDATE_PACKAGE_STATUS: "/v1/packages/:packageId/status",
};
