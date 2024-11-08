const mongoose = require("mongoose")
const AutoIncrement = require('mongoose-sequence')(mongoose);
async function main() {
    await mongoose.connect('Your mongo dl URl');
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

  const postschem = new mongoose.Schema({
    index: {
      type: Number
    }
    ,
    Development : {
      type: String,
      required: true,
      enum: ['Web Developer', 'Android Developer', 'AR/VR', 'UI/UX', 'Other'], 
    },
    Creditoffering: {
      type: Number,
      required: true
    },
    Description: {
      type: String,
      required: true
    },
    mail: {
      type: String,
      required: true,
    },
    requirements: {
      type: String,
      required: true,
    }
  })
  postschem.plugin(AutoIncrement, {inc_field: 'index', start_seq:1})
  const User = mongoose.model('User', userSchema);
  const Query1 = mongoose.model('Query1', postschem);
  module.exports = {
    User,Query1
  };

