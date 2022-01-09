import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const Schema = mongoose.Schema;

export const UserSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    hashPassword: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

UserSchema.methods.comparePassword = function (password, hashPassword) {
    return bcrypt.compareSync( password, hashPassword );
};
