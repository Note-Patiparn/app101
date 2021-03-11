import React from 'react'
import Nav from '../Header/navbar/navbar'
import Logo from '../logo/logo'
import Footer from '../Footer/footer'
import Topnav from '../Header/top-navbar/top-nav'
import '../Homepage/style.css'
  class Homepage extends React.Component{
    render() {
        return(
          <div>
              <Topnav/>
              <Logo id='logo-pos'/>
              <Nav id='nav-pos'/>
              <Footer id='footer-pos'/>
          </div> 
          )
    }
  }
  export default Homepage