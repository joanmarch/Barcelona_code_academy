const mongoose = require ('mongoose');
Schema = mongoose.Schema;
const userSchema = new Schema( {
    email: {type:String, required:true, unique:true},
    password: {type:String, required: true, unique:true},
});

module.exports = mongoose.model('user', userSchema);