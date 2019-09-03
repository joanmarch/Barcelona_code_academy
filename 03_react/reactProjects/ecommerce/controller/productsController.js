const productsModel = require('../model/productsModel');




// const upload = multer({ storage: storage });

class productsController{
    add(req, res){
      

        const { name, price, id} = req.body;
        var newProduct = {
            image: "http://localhost:3001/" + req.file.path,
            name,
            price,
            id,
        } 
        
       
        console.log(req.file);

        productsModel.create(newProduct,(err, data)=>{
            if (err) {
                throw new Error(err);
            }else{
            res.send(data) ;
            }
        })
    }
    get(req, res){
        productsModel.find({},(err,data)=>{
            if (err) throw new Error (err);
            else res.send(data);
        })
    }
 
}

module.exports = new productsController();
