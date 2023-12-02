import { Button } from "@mui/material";
import React from "react";
import { Container, Row, Col } from "reactstrap";
import {
  Desktop,
  TabletAndBelow,
} from "../../../../containers/common/Responsive";
const Banner = () => {
  const tapToBottom = () => {
    window.scrollTo({
      behavior: "smooth",
      top: document.body.scrollHeight,
    });
  };
  return (
    <section className="saas1 header" id="home">
      <div className="saas1-header bg header8-content">
        <Container>
          <Row>
            <Col md="7">
              <div style={{ position: "relative" }} className="center-text">
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
                    <h3 style={{ lineHeight: 2 }} className="text-white">
                      ای کاش یکی ایران بود و این کا ر رو برای من انجام میداد...
                      <br />
                      <span style={{ color: "white" }}>
                        {" "}
                        اکوهلپ - دستیار شما در داخل کشور{" "}
                      </span>
                      <br />
                      دور از وطن و خانواده بودن محدودیت ها و سختی های خاص خودش
                      رو داره طبیعتا همه ی آدمایی که خارج از کشور زندگی میکنن یک
                      سری نیازمندی و درخواست دارن که دوست دارن سرویس و یا شرکتی
                      باشه تا برای اونها این کار رو انجام بده داستان شکل گیری
                      اکوهلپ هم به خاطر برطرف کردن نیازمندی های ایرانیان خارج از
                      کشور شکل گرفته هر نوع نیازی که شما دارین رو بررسی میکنیم و
                      واستون انجامش میدیم.....
                    </h3>
                  </div>
                </div>
                <Desktop>
                  <Button
                    onClick={tapToBottom}
                    sx={{
                      background: "#5738F0",
                      fontWeight: "bold",
                      fontFamily: "Dana",
                      color: "white",
                      borderRadius: 40,
                      width: "50%",
                      height: 54,
                      marginTop: 4,
                      outline: "none",
                      position: "absolute",
                      bottom: "12%",
                      left: 0,
                    }}
                    children={"ثبت درخواست"}
                  />
                </Desktop>
                {/* <button
                style={{position:'absolute',bottom:'20%',left:0,}}
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#scroll-spy"
                aria-controls="scroll-spy"
                aria-expanded="false"
                aria-label="Toggle navigation"
                // onClick={toggleNav}
              >
             <span style={{color:'white'}}</span>   
              </button> */}
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
      <TabletAndBelow>
        <div style={{ background: "#071828", height: 120, width: "100%" ,display:'flex',alignItems:'center',justifyContent:'center'}}>
          <Button
            onClick={tapToBottom}
            sx={{
              background: "#5738F0",
              fontWeight: "bold",
              fontFamily: "Dana",
              color: "white",
              borderRadius: 40,
              width: "50%",
              height: 54,
              marginTop: 4,
              outline: "none",
            }}
            children={"ثبت درخواست"}
          />
        </div>
      </TabletAndBelow>
    </section>
  );
};

export default Banner;
