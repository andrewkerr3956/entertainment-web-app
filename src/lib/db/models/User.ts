import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: String,
    password: Blob,
    bookmarks: Object
}, { versionKey: false });

export default mongoose.models.User || mongoose.model("User", userSchema);