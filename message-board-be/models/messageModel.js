import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const MessageSchema = new Schema({
    text: {
        type: String,
        required: true
    },
    owner: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});