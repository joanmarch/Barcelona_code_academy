const mongoose = require ('mongoose');
Schema = mongoose.Schema;
const ProductSchema = new Schema( {
    name: {type:String, required:true, unique:true},
    price: {type:Number, required: true},
    color: {type:String, required: true},
    description: {type:String, required: true},
    category: {type:String, required:true},
    updateProduct: {type:String}
});

module.exports = mongoose.model('product', ProductSchema);