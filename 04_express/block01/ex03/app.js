var express = require ('express');
var app = express ();
var port = 3001;

app.listen(port,()=>{
    console.log('server running on port '+ port)
})

app.get('/:lenguage',(req, res)=>{
    const lenguage = req.params.lenguage;
    let message = checkLenguage(lenguage);
    res.send(`<h1>${message}</h1>`);

})

app.get('/:lenguage/remove',(req, res)=>{
    var {lenguage} = req.params;
    delete lenguageList[lenguage];
})

app.get('/:lenguage/:newMessage',(req, res)=>{
    var {lenguage, newMessage} = req.params;
    newMessage = remove_(newMessage);
    lenguageList[lenguage] = newMessage;
    var message = checkLenguage(lenguage);
    res.send(`<h1>${message}</h1>`);

})



checkLenguage = (lenguage) => {
    if (lenguageList[lenguage]===undefined){
        return lenguage + " not found"
    }else{
    return lenguageList[lenguage]
    }
}

remove_ = (newMessage) => {
    for ( let i = 0; i <newMessage.length; i++){
        if (newMessage[i] === "_"){
            newMessage = newMessage.substr(0, i) + " " + newMessage.substr(i +1);
        }else{}
    }
    return newMessage
}

let lenguageList ={
   
}