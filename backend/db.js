const mongoose = require("mongoose")
async function main() {
    await mongoose.connect('mongodb+srv://saini457harshit:MBoqQfosGf7PZ3gS@cluster0.c3wmu.mongodb.net/');
}
main()
const userSchema = new mongoose.Schema({
    FirstName: String,
    LastName: String,
    Username: {
        type: String,
        unique: true,
        require: true,
    },
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
    unique: true,
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
  about: {
    type: String,
    required: true
  },
  credits: {
    type: Number,
    default: 50
  },
  Branch: {
    type: String,
    required: true,
  },
  Section: {
    type: String,
    required: true
  }
  
});

const User = mongoose.model('User', userSchema);

module.exports = User;
