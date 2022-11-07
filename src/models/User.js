const mongoose = require('mongoose')

const userShchema = new mongoose.Schema({
   login: {
      type: String,
      requried: true,
      unique: true
   },
   password_hash: {
      type: String,
      requrired: true
   }
}, { timestamps: true })

mongoose.model('User', userShchema)