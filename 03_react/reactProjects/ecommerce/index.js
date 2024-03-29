var express = require ('express');
var cors = require('cors')
var app = express ();
var port = 3001;
bodyParser = require ('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
mongoose = require ('mongoose');
app.use(cors());
app.use('/uploads', express.static('uploads'));


userRoutes = require ('./routes/userRoutes');
productsRoutes = require ('./routes/productsRoutes');




mongoose.connect('mongodb://127.0.0.1/ecommerce_db',()=>{
    console.log('Mongo is connected')
});

app.listen(port,()=>{
    console.log('server running on port '+ port)
});

app.use('/user', userRoutes);
app.use('/products', productsRoutes);



