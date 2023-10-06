import React, { useState } from 'react'
import Nav from './nav'
import Link from 'next/link'
import { Container, Row, Col } from 'reactstrap'

const Header = props => {
    // const [show, setShow] = useState(false)
    // const [sidebar, setSidebar] = useState(false);
    // const [search, setSearch] = useState(false);

    // const clickSidebar = () => {
    //     setSidebar(!sidebar)
    //     document.querySelector('.navbar').classList.add('openSidebar')
    // }

    return (
        <header className={`${props.className || 'app2'} loding-header nav-abs custom-scroll  `}>
            <Container>
                <Row>
                    <Col>
                        <nav>
                            <a className="m-l-auto" href="/">
                            <img alt="" style={{height:80, width:"100%" }} src="/assets/images/logo/logo.png"  />
                       
                            </a>
                          
                        </nav>
                    </Col>
                </Row>
            </Container>
        </header>
    )
}

export default Header
