/* all database messages */
export const databaseMsg = {
  failedDb: "=>  Database connection failed: ",
  missedDBlink:
    "=>  MongoDB connection string is missing in environment variables",
};

/* all server messages */
export const appMsg = {
  serMsg: "=>  Server running on port:",
  notFound: "The API url not found.",
  servConnected: "Server connected successfully.",
  someWrong: "Something went wrong, please try again later.",
  blankUserInfo: "Require field should not be blank.",
  emailValid: "Provided email address is already associated with another user.",
  phoneValid: "Provided phone no. is already associated with another user.",
  newUserCreated: "New user created successfully.",
  existEmail: "Email address is not exist!",
  existUser: "The user is not exist, which you are looking for.",
  wrongPassword: "Entered password is invalide, please try again.",
  accessDenied: "Access denied. No token provided.",
  notUserAccess:
    "Access denied. you don't have permission to access the resource",
  invalidToken: "Invalid token, please login again",
  validPackage: "Provided package already exist with active state.",
  createdPackage: "Package created successfully",
  notFoundPackage: "The package is not found which you are looking for.",
  invalidPackage: "Invalid isActive value, must be boolean true or false.",
  existsCompany: "The company already exist, which you are looking for.",
  companyCreated: "The company created successfully",
  companyNotFound: "The company is not found which you are looking for.",
  companyUpdated: "The company info updated successfully",
  companyDeleted: "The company info deleted successfully",
};
