import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    avatar: {
        type: String,
        default: "https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fprofile&psig=AOvVaw34VuMkctABE1mhbsEGEtoI&ust=1742273549260000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLCmkPSokIwDFQAAAAAdAAAAABAE",
    },
      
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

export default User;
