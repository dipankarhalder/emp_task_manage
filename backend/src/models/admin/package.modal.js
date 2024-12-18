import mongoose from "mongoose";

const roles = ["BASIC", "STANDARD", "PRO"];
const PackageSchema = new mongoose.Schema(
  {
    name: { type: String, enum: roles, required: true, unique: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export const Package = mongoose.model("Package", PackageSchema);
