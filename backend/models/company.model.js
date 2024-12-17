import mongoose from "mongoose";

const roles = ["BASIC", "STANDARD", "PRO"];

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
      type: String,
      enum: roles,
      default: "BASIC",
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
