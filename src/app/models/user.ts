import { Schema, model, models, type Model, type Document } from "mongoose";
import connectToDatabase from "@/lib/mongodb";

export interface IUser extends Document {
  name?: string;
  email: string;
  password: string;
  role: "user" | "admin";
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema = new Schema<IUser>(
  {
    name: { type: String, trim: true },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 8,
      select: false, 
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
  },
  { timestamps: true }
);

UserSchema.index({ email: 1 }, { unique: true });

const UserModel: Model<IUser> = (models.User as Model<IUser>) || model<IUser>("User", UserSchema);

export async function getUserModel(): Promise<Model<IUser>> {
  await connectToDatabase();
  return UserModel;
}

export default UserModel;