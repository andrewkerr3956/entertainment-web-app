import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    bookmarks: {
        type: Object,
        required: true,
        default: []
    }
}, { versionKey: false });

export default mongoose.models.User || mongoose.model("User", userSchema);