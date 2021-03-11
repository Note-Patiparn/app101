import React from 'react'
import About from '../src/ABOUT/about'
import Shop from '../src/SHOP/shop'
import Review from '../src/Review/review'
import Store from '../src/Store/store'
import ForCustomer from '../src/customer/customer'
import Logo from '../src/logo/logo'
import Homepage from '../src/Homepage/homepage'
// V this is link page together 
import { BrowserRouter, Route, Link } from "react-router-dom";
// change logo to Homepage .
  class App extends React.Component{
    render() {
        return(
            <BrowserRouter>
            <Route exact path='/' component ={Homepage}/> 
            <Route path='/about' component ={About}/>
            <Route path='/shop' component ={Shop}/>
            <Route path='/review' component ={Review}/>
            <Route path='/store' component ={Store}/>
            <Route path='/customer' component ={ForCustomer}/>
            </BrowserRouter>
          )
    }
  }
  export default App

  // const BrowserRouter = require("react-router-dom").BrowserRouter;
  // const Route = require("react-router-dom").Route;
  // const Link = require("react-router-dom").Link;

// create sign-up & login page
// signup : page . JSON.strinify > alert(successful) . if new id   === exist id . tryagain . 
// if id && pw (register) == id && pw . true > home page . with alert(login successful)
//  false  > same page . please check your Id and password again 

// work on structure first then go through small details 
// navbar sidenav footer register login  step by step > router > body 

// stick nav sidenav footer in every page 

// nav link > to where 