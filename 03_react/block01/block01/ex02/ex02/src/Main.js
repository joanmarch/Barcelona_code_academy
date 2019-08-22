import React from 'react';
import onsale from './images/onsale.png';

class Main extends React.Component {
    render(){
      const products = [
        {
          product    : 'flash t-shirt',
          price      :  27.50,
          category   : 't-shirts',
          bestSeller :  false,
          image      : 'https://www.juniba.pk/wp-content/uploads/2018/02/the-flash-distressed-logo-t-shirt-black.png',
          onSale     :  true
        },
        {
          product    : 'batman t-shirt',
          price      :  22.50,
          category   : 't-shirts',
          bestSeller :  true,
          image      : 'https://s1.thcdn.com/productimg/1600/1600/11676326-1444552242012324.png',
          onSale     :  false
        },
        {
          product    : 'superman hat',
          price      :  13.90,
          category   : 'hats',
          bestSeller :  true,
          image      : 'https://banner2.kisspng.com/20180429/rqe/kisspng-baseball-cap-superman-logo-batman-hat-5ae5ef317f8366.9727520615250184175223.jpg',
          onSale     :  false
        },
        {
        product    : 'Our Converse shoes! ',
        price      :  88.70,
        category   : 'shoes',
        bestSeller :  true,
        image      : 'https://www.converse.com/on/demandware.static/-/Sites-ConverseMaster/default/dwcf2a8fd2/images/hi-res/162054_standard.jpg?sw=580&sh=580&sm=fit',
        onSale     :  true
      },
      ]
      
      var looper = products.map(function(product, i){
        if (product.onSale === true){
          return(
         <div className ="flexitem">
            <img className ="image" src={product.image}></img> 
            <h5>{product.product} <span className="price">{product.price + "$"}</span></h5>
           <img className="onsaleImage" src={onsale}></img>
         </div>
          )
        }else{
        return (
        <div className = "flexitem">
          <img className = "image" src={product.image}></img> 
          <h5>{product.product} <span className="price">{product.price + "$"}</span></h5>
        </div>
        )}
        
        
      })
      
      return(
        <div className="flexcontainer">
          {looper} 
        </div>
       
      )
    }
  }

  

 
  
  export default Main;