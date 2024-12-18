import { appMsg } from "../../constant/index.js";
import { User } from "../../models/admin/user.model.js";
import { Package } from "../../models/admin/package.modal.js";
import { Company } from "../../models/admin/company.model.js";

/* get all the company info */
export const getCompanyInfo = async (req, res) => {
  try {
    const company = await Company.find({});
    return res.status(200).json({
      status: 200,
      company,
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      msg: appMsg.someWrong,
      error: error.message,
    });
  }
};

/* get the company info by ID */
export const getCompanyInfoById = async (req, res) => {
  try {
    const companyId = req.params.companyId;
    const company = await Company.findById(companyId)
      .populate("createdBy", "firstname lastname email role")
      .populate("package", "name isActive");

    if (!company) {
      return res.status(404).json({
        status: 404,
        msg: appMsg.companyNotFound,
      });
    }

    return res.status(200).json({
      status: 200,
      company,
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      msg: appMsg.someWrong,
      error: error.message,
    });
  }
};

/* create a new company */
export const createNewCompany = async (req, res) => {
  try {
    /* get company info from request body */
    const { name, email, contact, address } = req.body.company;
    const { packageId, createdBy } = req.body;

    /* validate all fields empty or not */
    if (!name || !email || !contact || !address || !packageId || !createdBy) {
      return res.status(400).json({
        status: 400,
        msg: appMsg.blankUserInfo,
      });
    }

    /* validate the company already exists or not */
    const companyExists = await Company.findOne({
      $or: [{ "company.email": email }, { "company.name": name }],
    });
    if (companyExists) {
      return res.status(400).json({
        status: 400,
        msg: appMsg.existsCompany,
      });
    }

    /* validate if package exists */
    const existsPackage = await Package.findById(packageId);
    if (!existsPackage) {
      return res.status(400).json({
        status: 400,
        msg: appMsg.notFoundPackage,
      });
    }

    /* validate if user exists */
    const existsUser = await User.findById(createdBy);
    if (!existsUser) {
      return res.status(400).json({
        status: 400,
        msg: appMsg.existUser,
      });
    }

    /* create a new company */
    const newCompany = new Company({
      company: {
        name,
        email,
        contact,
        address,
      },
      package: existsPackage,
      createdBy: existsUser,
    });

    /* save the company to the database */
    await newCompany.save();

    /* populate user and package field */
    const populatedCompany = await Company.findById(newCompany._id)
      .populate("createdBy", "firstname lastname email role")
      .populate("package", "name isActive");

    return res.status(201).json({
      status: 201,
      company: populatedCompany,
      msg: appMsg.companyCreated,
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      msg: appMsg.someWrong,
      error: error.message,
    });
  }
};

/* update the company info */
export const updateCompanyInfo = async (req, res) => {
  try {
    const companyId = req.params.companyId;
    const { name, email, contact, address } = req.body.company;
    const { packageId } = req.body;

    /* validate all fields empty or not */
    if (!name || !email || !contact || !address || !packageId) {
      return res.status(400).json({
        status: 400,
        msg: appMsg.blankUserInfo,
      });
    }

    /* validate if company exists */
    const company = await Company.findById(companyId);
    if (!company) {
      return res.status(404).json({
        status: 404,
        msg: appMsg.companyNotFound,
      });
    }

    /* validate if package exists */
    const existsPackage = await Package.findById(packageId);
    if (!existsPackage) {
      return res.status(400).json({
        status: 400,
        msg: appMsg.notFoundPackage,
      });
    }

    /* Update company */
    company.company.name = name;
    company.company.email = email;
    company.company.contact = contact;
    company.company.address = address;
    company.package = packageId;

    /* save the updated company info */
    await company.save();

    /* populate user and package field */
    const populatedCompany = await Company.findById(companyId)
      .populate("createdBy", "firstname lastname email role")
      .populate("package", "name isActive");

    return res.status(200).json({
      status: 200,
      company: populatedCompany,
      msg: appMsg.companyUpdated,
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      msg: appMsg.someWrong,
      error: error.message,
    });
  }
};

/* delete the company by ID */
export const deleteCompany = async (req, res) => {
  try {
    const companyId = req.params.companyId;

    /* Check if company exists */
    const company = await Company.findById(companyId);
    if (!company) {
      return res.status(404).json({
        status: 404,
        msg: appMsg.companyNotFound,
      });
    }

    /* Delete the company */
    await Company.findByIdAndDelete(companyId);

    return res.status(200).json({
      status: 200,
      msg: appMsg.companyDeleted,
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      msg: appMsg.someWrong,
      error: error.message,
    });
  }
};
