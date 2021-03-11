import React from 'react'
import '../top-navbar/style.css'
import { Link } from "react-router-dom";

  class Topnav extends React.Component{
    render() {
        return(
          <div>
            <div class='topnav-container'>
              <div class='login-tab'>
                  <Link to='./login'><button>LOGIN</button></Link>
              </div>
              <div class='signup-tab'>
                  <Link to='./signup'><button>SIGNUP</button></Link>
              </div>
              <div class='cart-tab'>
                  <Link to='./shoppingcart'><button>CART</button></Link>
              </div>
              <div class='order-tab'>
                  <Link to='./order'><button>ORDER</button></Link>
              </div>

            </div>
          </div> 
          )
    }
  }
  export default Topnav