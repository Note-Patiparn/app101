import React from 'react'
import '../navbar/style.css'
import { Link } from "react-router-dom";

  class Nav extends React.Component{
    render() {
        return(
        <div id='whole-nav-container'>
            <nav id='navbar'>
                <div class='dropdown'>
                    <Link to='./about'><button>ABOUT US</button></Link>
                    <div class='shop-tab'>
                    <button>SHOP</button>
                    <ul>
                        <Link><li><a>TOP</a></li></Link>
                        <Link><li><a>Bottom</a></li></Link>
                        <Link><li><a>Bag</a></li></Link>
                        <Link><li ><a>Acc</a></li></Link>
                    </ul>
                    </div>
                    <div class='Review-tab'>
                        <Link to='./review'><button>REVIEW</button></Link>
                    </div>
                    <div class='Store-tab'>
                        <Link to='./store'><button>STORE</button></Link>
                    </div>
                    <div class='customer-tab'>
                        <Link to='./customer'><button>FOR CUSTOMER</button></Link>
                    </div>
                </div>
            </nav>
        </div>
        )
    }
  }
  export default Nav