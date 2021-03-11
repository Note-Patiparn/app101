import React from 'react'
import '../Footer/style.css'
import { Link } from "react-router-dom";
  class Footer extends React.Component{
    render() {
        return(
          <div>
            <footer class='footer'>
              <div class='footer-container'>
                <div class='footer-row'>
                  <div class='footer-col'>
                    <ul class='phone'>
                      <li class='tel'>T.070-5180-0091</li>
                      <li class='shop-open'>WEEKDAYS / 14:00 ~ 17:00</li>
                      <li class='shop-close'>CLOSED / SATURDAYS,<br/> SUNDAYS, AND HOLIDAYS</li>                    
                    </ul>
                  </div>
                  <div class='footer-col'>
                    <ul class='bank'>
                      <li>[DEPOSIT ACCOUNT WITHOUT BANKBOOK]
                          NATIONAL 660401-01-820219</li>
                      <br/><li>ACCOUNT HOLDER: KI- SEOP KI (ROAIN)
                          [DEDICATED ACCOUNT FOR DEPOSITING SHIPPING COSTS]
                          KEB HANA 392-910104-93907</li>
                      <br/>
                      <li>ACCOUNT HOLDER: KI-SEOP KI</li>
                    </ul>
                  </div>
                  <div class='footer-col'>
                    <ul class='shop-info'>
                      <li>COMPANY: ROAIN. CEO: WOO-WON SEON, SEOP KI CEO: SEOG KI-SEOP</li><br/>
                      <li>ADDRESS : ROAIN ON THE 3RD FLOOR, 480-24, SEOGYO-DONG, MAPO-GU, SEOUL</li>
                      <li>BUSINESS LICENSE: 857-14-00780</li><br/>
                      <li>ONLINE BUSINESS LICENSE: 2018-NAMDONG-GU, INCHEON-0165 [CONFIRM BUSINESS INFORMATION]</li><br/>
                      <li>RETURN ADDRESS: ROAIN, 3RD FLOOR, 480-24, SEOGYO-DONG, MAPO-GU, SEOUL</li>               
                    </ul>
                  </div>
                  <div class='footer-col'>
                    <ul class='footer-link'>
                      <li>HOME</li>
                      <li>ABOUT</li>
                      <li>GUIDE</li>
                      <li>AGREEMENT</li>
                      <li>PRIVACY</li>
                    </ul>
                  </div>
                </div>
              </div>
            </footer>
          </div>
          )
    }
  }
  export default Footer