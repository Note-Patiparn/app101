import React from 'react'
import logo from '../img/logo-img1.jpg'
import '../logo/style.css'
import { Link } from "react-router-dom";
  class Logo extends React.Component{
    render() {
        return(
          <div class='logo'>
              <div id='home-link-logo-img'>
                  <Link to='./'><img src={logo}></img></Link>
              </div>
          </div> 
          )
    }
  }
  export default Logo