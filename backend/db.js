const mongoose = require("mongoose")
async function main() {
    await mongoose.connect('YOUR MONGO DB CONNECTION STRING');
}
main()
const userSchema = new mongoose.Schema({
    FirstName: String,
    LastName: String,
    password: { type: String, required: true },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/^\S+@\S+\.\S+$/, 'Please use a valid email address.'],
  },
  contactNo: {
    type: String,
    required: true,
    match: [/^\d{10}$/, 'Please enter a valid 10-digit contact number.'],
  },
  skill: {
    type: String,
    required: true,
    enum: ['Web Developer', 'Android Developer', 'AR/VR', 'UI/UX', 'Other'], 
  },
  yearOfStudy: {
    type: Number,
    required: true,
    min: 1, 
    max: 4,
  },
  
});

const User = mongoose.model('User', userSchema);

module.exports = User;
