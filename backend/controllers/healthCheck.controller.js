import { appMsg } from "../constant/index.js";

/* check the server working as expected or not */
export const getHealthCheck = async (req, res) => {
  try {
    return res
      .status(200)
      .json({
        status: 200,
        msg: appMsg.servConnected,
      })
      .end();
  } catch (error) {
    return res.status(500).json({
      status: 500,
      msg: appMsg.someWrong,
      error: error.message,
    });
  }
};
