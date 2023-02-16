import mongoose from "mongoose";

const mediaSchema = new mongoose.Schema({
    id: {
        type: Number
    },
    title: {
        type: String
    },
    description: {
        type: String
    },
    thumbnail: {
        type: Object
    },
    year: {
        type: Number
    },
    rating: {
        type: String
    },
    category: {
        type: String
    },
    isTrending: {
        type: Boolean
    }
}, { versionKey: false});

export default mongoose.models.Media || mongoose.model("Media", mediaSchema, "media");