import React from 'react'
import Nav from '../Header/navbar/navbar'
import Logo from '../logo/logo'
import Footer from '../Footer/footer'
import Topnav from '../Header/top-navbar/top-nav'
import '../ABOUT/style.css'
import Aboutimg from '../img/about.jpg'
  class About extends React.Component{
    render() {
        return(
          <div>
              <Topnav/>
              <Logo id='logo-pos'/>
              <Nav id='nav-pos'/>
              <div class='about-img'>
              <img class='aboutimg' src={Aboutimg}></img>
              </div>
              <Footer id='footer-pos'/>
          </div> 
          )
    }
  }
  export default About