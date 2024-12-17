import mongoose from "mongoose";

const CompanySchema = new mongoose.Schema(
  {
    company: {
      name: { type: String, required: true, },
      email: { type: String, required: true, trim: true, },
      contact: { type: String, required: true, },
      address: { type: String, required: true, },
    },
    package: { type: Object, required: true, },
    createdBy: { type: Object, required: true, },
  },
  { timestamps: true }
);

export const Company = mongoose.model("Company", CompanySchema);
