import React from "react";
import Slider from "react-slick";
import { Container, Row, Col } from "reactstrap";
import EccoHelpFoormCard from "../../../../containers/eccoHelpForm/EccoHelpFoormCard";
import {
  Desktop,
  TabletAndBelow,
} from "../../../../containers/common/Responsive";
var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  autoplay: true,
  swipeToSlide: true,
  arrows: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 768,
      settings: { slidesToShow: 1 },
    },
    {
      breakpoint: 1024,
      settings: { slidesToShow: 1 },
    },
  ],
};

const Build = () => (
  <section className="saas1 build-bg">
    <Desktop>
      <div className="build-right-slider">
        <div className="item">
          <EccoHelpFoormCard />
        </div>
      </div>
    </Desktop>
    <Container>
      <Row>
        <Col lg="7">
          <div className="item" style={{ direction: "rtl" }}>
            <div className="build-box">
              <h3
                style={{ textAlign: "start" }}
                className="build-head text-white"
              >
                <span className="theme-color">ثبت </span>درخواست و نیازمندی
              </h3>
              <p style={{ fontSize: 16, textAlign: "start" }}>
                مراحل ثبت درخواست و نیازمندی تون هم ساده هستش:
              </p>
              <ul
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "start",
                  color: "white",
                }}
              >
                <li style={{display:'flex'}}>
                  <img
                    style={{ height: 32, width: 32, marginLeft: 12 }}
                    alt="icon"
                    src="/assets/images/saas1/build-.png"
                  />
                  <span>
                    فرم ثبت درخواست رو پر کنین
                    <span style={{ fontSize: 12, marginRight: 4 }}>
                      (از هر جنسی که هستش - ای کاش یکی ایران بود و واسم این کار
                      رو انجام میداد)
                    </span>
                  </span>
                </li>

                <li style={{display:'flex'}}>
                  <img
                    style={{ height: 32, width: 32, marginLeft: 12 }}
                    alt="icon"
                    src="/assets/images/saas1/build-.png"
                  />
                  ما باهاتون تماس میگیریم و درخواستتون رو انجام میدیم.
                </li>
                <li style={{display:'flex'}}>
                  <img
                    style={{ height: 32, width: 32, marginLeft: 12 }}
                    alt="icon"
                    src="/assets/images/saas1/build-.png"
                  />
                  بعد از انجام درخواست مرحله ی پرداخت از سمت شما صورت میگیره
                </li>
                <li style={{display:'flex'}}>
                  <img
                    style={{ height: 32, width: 32, marginLeft: 12 }}
                    alt="icon"
                    src="/assets/images/saas1/build-.png"
                  />
                  پرداخت شما هم میتونه ارزی باشه و هم ریالی{" "}
                </li>
                <li style={{display:'flex'}}>
                  <img
                    style={{ height: 32, width: 32, marginLeft: 12 }}
                    alt="icon"
                    src="/assets/images/saas1/build-.png"
                  />
                  عودت کامل پول شما در صورت عدم رضایت از خدمت انجام شده
                </li>
              </ul>
            </div>
          </div>
        </Col>
        <TabletAndBelow>
          <Col lg="6">
            <EccoHelpFoormCard />
          </Col>
        </TabletAndBelow>
      </Row>
    </Container>
  </section>
);

export default Build;
