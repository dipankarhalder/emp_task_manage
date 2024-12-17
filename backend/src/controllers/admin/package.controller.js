import { appMsg } from "../../constant/index.js";
import { Package } from "../../models/admin/package.modal.js";

/* get all the packages */
export const getAllPackages = async (req, res) => {
  try {
    const { name, isActive } = req.query;

    const filter = {};
    if (name) filter.name = name;
    if (isActive !== undefined) filter.isActive = isActive === "true";

    const packages = await Package.find(filter);
    return res.status(200).json({ status: 200, packages, });
  } catch (error) {
    return res.status(500).json({ status: 500, msg: appMsg.someWrong, error: error.message, });
  }
};

/* create a new package */
export const createNewPackage = async (req, res) => {
  try {
    /* get package info from request body */
    const { name, description, price, isActive } = req.body;

    /* validate all fields empty or not */
    if (!name || !description || !price || !isActive) {
      return res.status(400).json({ status: 400, msg: appMsg.blankUserInfo });
    }

    /* validate if the package is already exist with active state */
    const existingPackage = await Package.findOne({ name });
    if (existingPackage) {
      return res.status(400).json({ status: 400, msg: appMsg.validPackage });
    }

    /* save the package to the database */
    const newPackage = new Package({name, description, price, isActive: isActive || true, });
    await newPackage.save();
    return res.status(201).json({ status: 201, msg: appMsg.createdPackage, package: newPackage, });
  } catch (error) {
    return res.status(500).json({ status: 500, msg: appMsg.someWrong, error: error.message, });
  }
};

/* update package information */
export const updatePackageInfo = async (req, res) => {
  try {
    const { packageId } = req.params;
    const updates = req.body;

    /* ensure that the 'isActive' field is not passed in the request body */
    if (updates.hasOwnProperty("isActive")) {
      return res.status(400).json({ status: 400, msg: "The 'isActive' field cannot be updated through this API. Use the separate API for that.", });
    }

    /* find and update the package */
    const updatedPackage = await Package.findByIdAndUpdate(packageId, updates, { new: true, });

    /* if the package is not found */
    if (!updatedPackage) {
      return res.status(404).json({ status: 404, msg: appMsg.notFoundPackage, });
    }

    /* return the updated package object */
    return res.status(200).json({ status: 200, msg: "Package updated successfully", package: updatedPackage, });
  } catch (error) {
    return res.status(500).json({ status: 500, msg: appMsg.someWrong, error: error.message, });
  }
};

/* update isActive status */
export const updatePackageIsActiveStatus = async (req, res) => {
  try {
    /* get packageId and isActive status from request body */
    const { packageId } = req.params;
    const { isActive } = req.body;

    if (typeof isActive !== "boolean") {
      return res.status(400).json({ status: 400, msg: appMsg.invalidPackage, });
    }

    /* find and update the package's isActive field */
    const updatedPackage = await Package.findByIdAndUpdate(packageId, { isActive }, { new: true });

    /* if no package is found */
    if (!updatedPackage) {
      return res.status(404).json({ status: 404, msg: appMsg.notFoundPackage, });
    }

    /* return the updated package with the new isActive status */
    return res.status(200).json({ status: 200, msg: `Package ${isActive ? "activated" : "deactivated"} successfully`, package: updatedPackage, });
  } catch (error) {
    return res.status(500).json({ status: 500, msg: appMsg.someWrong, error: error.message, });
  }
};
