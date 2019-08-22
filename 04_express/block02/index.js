var express = require ('express');
var cors = require('cors')
var app = express ();
var port = 3001;
bodyParser = require ('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
mongoose = require ('mongoose');
categoryRoutes = require ('./routes/CategoryRoutes');
productsRoutes = require ('./routes/ProductsRoutes');

app.use(cors());

mongoose.connect('mongodb://127.0.0.1/store_db',()=>{
    console.log('Mongo is connected')
});

app.listen(port,()=>{
    console.log('server running on port '+ port)
});

app.use('/categories', categoryRoutes);
app.use('/products', productsRoutes);


