import mongoose from "mongoose";

const CompanySchema = new mongoose.Schema(
  {
    company: {
      name: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
        trim: true,
      },
      contact: {
        type: String,
        required: true,
      },
      address: {
        type: String,
        required: true,
      },
    },
    package: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Package",
      required: true,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

export const Company = mongoose.model("Company", CompanySchema);
