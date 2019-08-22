import React from 'react';


class Footer extends React.Component {
  render(){
       
    return(
     <div>
      <nav style = {styles.mainNav}>
            <ul style ={styles.ul}>
              <li style ={styles.li}>
                  <h3>CHALK THIS OUT!!</h3>
                  <a style={styles.a} href="#Facebook">Friend us on Facebook</a>
              </li>
              <li style ={styles.li}>
                <h3>OUR CREATIVE FRIENDS!</h3>
                  <a style={styles.a} href="#PAWSOME">PAWSOME</a>
                  </li>
              <li style ={styles.li}>
                  <h3>WHAT EVEN MORE?</h3>
                  <a style={styles.a} href="#ShippingInfo">Shipping info</a>
                  </li>
            </ul>
      </nav>
        <div style = {styles.afterStyle}></div>
     </div>
    )
  }
}

const styles ={
    ul:{
        listStyle: 'none',
        margin: '0px',
        padding: '0px',
      },
      li:{
        width: '20%',
        float: 'left',
        textAlign: 'center',
      },
       a:{
        textTransform: 'uppercase',
        letterSpacing: '0em',
        wordSpacing: '0em',
        
      },
    
      afterStyle: {
        clear: 'both'
      },
    
}

export default Footer;