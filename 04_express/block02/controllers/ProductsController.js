const productModel = require('../models/ProductModel');
class ProductsControll{
    add(req, res){
        const {name, price, color, description, category} = req.body;
        var newProduct = {
            name,
            price,
            color,
            description,
            category
        }
        productModel.create(newProduct,(err, data)=>{
            if (err) throw new Error(err);
            else res.send(data) ;
        })
    }
    delete(req, res){
        const  name = req.body;
        productModel.remove({name:name},(err,data)=>{
            if (err) throw new Error (err);
            else res.send(data);
        })
    }
    update(req, res){
        const  {name, price, color, description, category, updateProduct} = req.body
        console.log(name,price,color, description, category, updateProduct);
        productModel.update({name:name},{$set:{
            name: updateProduct,
            price,
            color,
            description,
            category
        }},(err,data)=>{
            if (err) throw new Error (err);
            else res.send(data);
        })
    }
    displayProducts(req, res){
        productModel.find({},(err,data)=>{
            if (err) throw new Error (err);
            else res.send(data);
        })
    }
    displaySingleProduct(req, res){
        const {product} = req.params;
        productModel.findOne ({name:product},(err,data)=>{
            if (err) throw new Error (err);
            else res.send(data);
        })
    }
    displayAllProductsCategory(req, res){
        const {category} = req.params;
        productModel.find ({category:category},(err,data)=>{
            if (err) throw new Error (err);
            else res.send(data);
        })
    }
}

module.exports = new ProductsControll();