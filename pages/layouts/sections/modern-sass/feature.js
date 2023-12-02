import React from 'react';
import { FeatureData } from '../../../../database/layouts/modern/database'
import {Container,Row,Col} from 'reactstrap'
const Feature = () => (
    <section className="saas1 service" id="feature">
        <div className="about-chat">
            <Container>
                <Row>
                    <Col md="12" className="text-center">
                        <div className="title">
                            <div className="main-title">
                                <h2>
                                    <span className="theme-color">ا</span>نواع <span className="theme-color">ن</span>یازمندی ها
                                </h2>
                            </div>
                            <hr />
                      
                        </div>
                    </Col>
                    {
                        FeatureData.map((item, i) => {
                            return (
                                <Col lg="4" md="6"  className="service-container" key={i}>
                                    <div className="chat-box">
                                        <img alt="stay-connected" src={item.img} />
                                        <div className="feature-content">
                                            <h4 className="service-heading"> {item.heading} <span className="theme-color">{item.layout}</span>
                                            </h4>
                                            <hr />
                                            <p>{item.desc}</p>
                                        </div>
                                    </div>
                                </Col>
                            )
                        })
                    }
                </Row>
                <h3 style={{fontWeight:'bold', color:'#5738F0'}}>و هر نیازمندیه دیگه ای که دارین...</h3>
            </Container>
        </div>
    </section>
)
export default Feature;