const mongoose = require ('mongoose');
Schema = mongoose.Schema;
const productsSchema = new Schema( {
    image: {type : String, required: true},
    name: {type:String, required: true, unique:true},
    price: {type:String, required: true},
    id: {type:String, required: true, unique:true},
});

module.exports = mongoose.model('products', productsSchema);
