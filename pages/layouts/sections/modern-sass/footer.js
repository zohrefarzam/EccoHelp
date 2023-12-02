import React from 'react';
import {Container,Row,Col} from 'reactstrap'
const Footer = () => (
    <footer style={{paddingTop:50,paddingBottom:50}} className="saas1 footer2">
        <Container>
     <div style={{display:'flex',alignItems:'center'}}>
         <h4 style={{color:'white',marginBottom:12,fontWeight:'bold',marginLeft:32}}>راه های ارتباطی</h4>
                    <div style={{marginBottom:12}} className="logo-sec">
                    
                          
                            <ul className="d-d-flex footer-social social">
                                <li style={{marginLeft:8}} className="footer-social-list">
                                    <a href="https://www.linkedin.com/company/eccohelp/about/?viewAsMember=true"><i aria-hidden="true" className="fa fa-linkedin"></i></a>
                                </li>
                                <li className="footer-social-list">
                                    <a href="https://t.me/eccohelp"><i aria-hidden="true" className="fa fa-telegram"></i></a>
                                </li>
                            
                            </ul>
                    </div>
                    </div>
          </Container>
    </footer>
)

export default Footer;