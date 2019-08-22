const categoryModel = require('../models/CategoryModel');
class CategoryControll{
    add(req, res){
        const {category} = req.body;
        console.log({category});
        
        var newCategory = {
            category:category
        }
        categoryModel.create(newCategory,(err, data)=>{
            if (err) throw new Error(err);
            else res.send(data) ;
        })
    }
    delete(req, res){
        const  {category} = req.body
        categoryModel.remove({category:category},(err,data)=>{
            if (err) throw new Error (err);
            else res.send(data);
        })
    }
    update(req, res){
        const  {category, updateCategory} = req.body
        categoryModel.update({category:category},{$set:{
            category:updateCategory
        }},(err,data)=>{
            if (err) throw new Error (err);
            else res.send(data);
        })
    }
    displayCategories(req, res){
        categoryModel.find({},(err,data)=>{
            if (err) throw new Error (err);
            else res.send(data);
        })
    }
    displayProducts (req, res){

    }
}

module.exports = new CategoryControll();