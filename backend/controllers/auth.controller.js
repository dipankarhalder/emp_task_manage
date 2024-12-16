import { appMsg } from "../constant/index.js";

/* user registration */
export const userRegistration = async (req, res) => {
  try {
    return res
      .status(200)
      .json({
        status: 200,
        msg: appMsg.servConnected,
      })
      .end();
  } catch (error) {
    return res.status(400).json({
      status: 400,
      msg: appMsg.someWrong,
    });
  }
};
