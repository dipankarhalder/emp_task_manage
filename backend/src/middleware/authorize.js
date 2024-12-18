import jwt from "jsonwebtoken";

import { appMsg } from "../constant/index.js";

export function authorizeRole(roles) {
  return (req, res, next) => {
    /* validate the token */
    const token = req.header("Authorization")?.replace("Bearer ", "");
    if (!token) {
      return res.status(401).json({
        status: 401,
        msg: appMsg.accessDenied,
      });
    }

    try {
      /* validate the user type */
      const decoded = jwt.verify(token, process.env.APP_JWT_SEC);
      req.user = decoded;

      if (!roles.includes(req.user.role)) {
        return res.status(403).json({
          status: 403,
          msg: appMsg.notUserAccess,
        });
      }

      next();
    } catch (error) {
      return res.status(400).json({
        status: 400,
        msg: appMsg.invalidToken,
      });
    }
  };
}
