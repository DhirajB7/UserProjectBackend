const Mongoose = require('mongoose')

const userSchema = new Mongoose.Schema({

    name:{
        type : String,
        required:true
    },

    email:{
        type : String,
        required:true
    },

    role:{
        type : String,
        required:true
    },

    status:{
        type : String,
        required:true
    }

})

module.exports = Mongoose.model('User',userSchema)