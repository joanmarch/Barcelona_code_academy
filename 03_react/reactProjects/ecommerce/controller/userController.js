const userModel = require('../model/userModel');
class userControll{
    add(req, res){
        const {email, password} = req.body;
        var newUser = {
            email,
            password,
        }
        userModel.create(newUser,(err, data)=>{
            if (err) {
                throw new Error(err);
            }else{
            res.send(data) ;
            }
        })
    }
    login(req, res){
        const {email, password} = req.body;
        userModel.findOne({email:email}, (err, data)=>{
            console.log("==============================" + data)
            if (err) {
                console.log(error);
                /* throw new Error (err); */
            } else if (data == null){
                res.send({
                    data,
                    "code" : 205,
                    "denied" : "email not existing"
                })
            }else{
            res.send({
                data,
                "code" : 200,
                "success" : "Login successfull"
            });
            }           
        })
    }
   
}

module.exports = new userControll();