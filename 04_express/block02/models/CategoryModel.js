const mongoose = require ('mongoose');
Schema = mongoose.Schema;
const categorySchema = new Schema( {
    category: {type:String, required:true, unique:true},
    updateCategory : {type:String}
});

module.exports = mongoose.model('category', categorySchema);