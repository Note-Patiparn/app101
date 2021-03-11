import React from 'react'
import Logo from '../logo/logo'
import Nav from '../Header/navbar/navbar'
import Footer from '../Footer/footer'
import Topnav from '../Header/top-navbar/top-nav'
import '../Store/style.css'
      //37.54772589113434, 126.91841949777788
      //37.53527383351035, 127.00091137301372
  class Store extends React.Component{
    render() {
        return(
        <div>
          <Topnav/>
          <Logo/>
          <Nav/>
                <h2 class='store-h2'>STORE</h2>
            <div class='store-container'>
              <div class='store-content'>
                  <div class='map'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3163.320632163852!2d126.9162308153111!3d37.547508979801435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357c98daec4234d7%3A0x9a9934035912dfb1!2sDEPOUND!5e0!3m2!1sen!2sth!4v1615457357611!5m2!1sen!2sth" style={{width:'100%', height:"100%", style:"border=0", allowfullscreen:"", loading:"lazy"}}></iframe>
                  </div>
                  <div class='store-1-text'>
                    <p class='store-title'>DEPOUND</p>
                    <p>
                      depound 3f
                      <br/>
                      7,dongmak-ro 8-gil
                      <br/>
                      mapo-gu, seoul
                      <br/>
                      republic of korea
                    </p>
                    <p> 070 - 4848 - 3226 </p>
                    <p>
                      OPENING HOURS
                      <br/>
                      01:00pm - 06.00pm
                      <br/>
                      mon - sat (sun off)
                    </p>
                  </div>
                  <div class='map'>
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3164.2626061312894!2d126.9606233153103!3d37.525306479805636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca1f87a996ac9%3A0x722822237edd1154!2s3F%2C%2019-19%20Hangang-daero%2015-gil%2C%20Hangangno%203(sam)-ga%2C%20Yongsan-gu%2C%20Seoul%2C%20South%20Korea!5e0!3m2!1sen!2sth!4v1615467179083!5m2!1sen!2sth" style={{width:'100%', height:"100%", style:"border=0", allowfullscreen:"", loading:"lazy"}}></iframe>
                  </div>
                  <div class='store-2-text'>
                    <p class='store-title'>3F.lobby</p>
                    <p>
                    15 Road in Yongsan-gu
                    <br/>
                    Han 19-19, third floor
                    <br/>
                    Hangang-daero 15-Gil
                    <br/>
                    Yongsan-Gu, Seoul
                    <br/>
                    Republic of Korea
                    </p>
                    <p> 020 - 8002 - 1102 </p>
                    <p>
                    OPENING HOURS
                    <br/>
                    01:00pm - 06.00pm
                    <br/>
                    mon - sat (sun off)
                    </p>
                  </div>
              </div>
            </div>
          <Footer/>
        </div>
          )
    }
  }



  export default Store