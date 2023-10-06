import React from "react";
import { Container, Row, Col } from "reactstrap";
const Banner = () => (
  <section className="saas1 header" id="home">
    <div className="saas1-header bg header8-content">
      <Container>
        <Row>
          <Col md="7">
            <div className="center-text">
              <div>
                <div className="header-text">
                  <div className="d-flex">
                    <div className="center-content slider-logo">
                      <img
                        alt=""
                        className="img-fluid"
                        src="/assets/images/saas1/slider-logo.png"
                      />
                    </div>
                    <h1>
                      <span className="theme-color">ا</span>کو{" "}
                      <span className="theme-color">ه</span>لپ
                    </h1>
                  </div>
                </div>
                <div className="header-sub-text">
                  <h3 style={{lineHeight:2}} className="text-white">
                    دور از وطن و خانواده بودن محدودیت ها و سختی های خاص خودش رو
                    داره طبیعتا همه ی آدمایی که خارج از کشور زندگی میکنن یک سری
                    نیازمندی و درخواست دارن که دوست دارن سرویس و یا شرکتی باشه
                    تا برای اونها این کار رو انجام بده داستان شکل گیری اکوهلپ هم
                    به خاطر برطرف کردن نیازمندی های ایرانیان خارج از کشور شکل
                    گرفته هر نوع نیازی که شما دارین رو بررسی میکنیم و واستون
                    انجامش میدیم.....
                  </h3>
                </div>

              </div>
            </div>
          </Col>
          <div>
            <div className="center-text slider-banner">
              <img
                alt="slid-banner"
                src="/assets/images/agency/slider/img.png"
                className="img-fluid"
              />
            </div>
          </div>
        </Row>
      </Container>
    </div>

  </section>
);

export default Banner;
