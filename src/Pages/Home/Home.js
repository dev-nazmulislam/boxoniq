import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "./Home.css";

// Import Swiper styles
import "swiper/css";

const Home = () => {
  return (
    <div>
      {/* Carusel section start */}
      <section
        id="carouselExampleSlidesOnly"
        class="carousel slide carousel-container shadow"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div className="carusel-text">
              <h1>Start</h1>
              <h2>your</h2>
              <h2>Bundle</h2>
              <h2 className="carusel-button me-2">Now</h2>
              <img src="https://i.ibb.co/HrXYz5D/Arrow-2.png" alt="" />
            </div>
          </div>
          <div class="carousel-item">
            <div className="carusel-text">
              <h1>Start</h1>
              <h2>your</h2>
              <h2>Bundle</h2>
              <h2 className="carusel-button me-2">Now</h2>
              <img src="https://i.ibb.co/HrXYz5D/Arrow-2.png" alt="" />
            </div>
          </div>
          <div class="carousel-item">
            <div className="carusel-text">
              <h1>Start</h1>
              <h2>your</h2>
              <h2>Bundle</h2>
              <h2 className="carusel-button me-2">Now</h2>
              <img src="https://i.ibb.co/HrXYz5D/Arrow-2.png" alt="" />
            </div>
          </div>
        </div>
      </section>

      {/* Box area start */}
      <section className="box-container">
        <div className="row mx-0 justify-content-between align-items-center">
          <div className="col-12 col-md-3 box-left">
            <img
              className="box-position"
              src="https://i.ibb.co/TRC52CX/Rectangle-94.png"
              alt=""
            />
            <h1 className="title pt-5">
              <span>HOW</span> IT WORKS
            </h1>
          </div>
          <div className="col-12 col-md-4 d-flex flex-row justify-content-between align-items-center">
            <div className="d-flex flex-column justify-content-between align-items-center">
              <div className="box">
                <img src="https://i.ibb.co/WHvPPfX/sync-1.png" alt="" />
              </div>
              <h4 className="short-title">Create Box</h4>
            </div>
            <div className="d-flex flex-column justify-content-center align-items-center">
              <div className="box">
                <img src="https://i.ibb.co/ccPBqKR/wallet-2-1.png" alt="" />
              </div>
              <h4 className="short-title">Create Box</h4>
            </div>
            <div className="d-flex flex-column justify-content-center align-items-center">
              <div className="box">
                <img src="https://i.ibb.co/BVy8YyT/package-1-1.png" alt="" />
              </div>
              <h4 className="short-title">Create Box</h4>
            </div>
          </div>
          <div className="col-12 col-md-5">
            <button style={{ backgroundColor: "#09A42B" }}>
              Start Your Bundle
              <img
                className="ms-2 block-arrow"
                src="https://i.ibb.co/GkmjLYb/Arrow-1.png"
                alt=""
              />
            </button>
          </div>
        </div>
      </section>

      {/* Bundle banifite area start     */}
      <section className="bundle-container">
        <h1 className="title">BUNDLE BENEFITS</h1>
        <div className="row mx-0 justify-content-between shape-left">
          <div className="col-10 col-md-6 d-flex flex-column justify-content-center">
            <div className="shape shadow">
              <div className="shape-title">
                <h5 className="ps-4">Skip subscription anytime anywhere</h5>
                <p className="ps-4">
                  Skip, modify you bundle as per requirement
                </p>
              </div>

              <div className="banifit-box">
                <img src="https://i.ibb.co/txNGzgK/check-1.png" alt="" />
              </div>
            </div>
            <div className="shape shadow">
              <div className="shape-title">
                <h5 className="ps-4">Skip subscription anytime anywhere</h5>
                <p className="ps-4">
                  Skip, modify you bundle as per requirement
                </p>
              </div>
              <div className="banifit-box">
                <img src="https://i.ibb.co/k52WZ3D/calendar-3-1.png" alt="" />
              </div>
            </div>
            <div className="shape shadow">
              <div className="shape-title">
                <h5 className="ps-4">Skip subscription anytime anywhere</h5>
                <p className="ps-4">
                  Skip, modify you bundle as per requirement
                </p>
              </div>
              <div className="banifit-box">
                <img src="https://i.ibb.co/M2JwKGm/time-1.png" alt="" />
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 bundle-right">
            <div className="banifit-right">
              <h1>Bundle Benefits</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, Lorem Ipsum is simply dummy
                text of the printing and typesetting industry. Lorem Ipsum has
                been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it
                to make a type specimen book. It has survived not only five
                centuries,
              </p>
              <button>
                Start Your Bundle
                <img
                  className="ms-2"
                  src="https://i.ibb.co/HrXYz5D/Arrow-2.png"
                  alt=""
                />
              </button>
            </div>
          </div>
          {/* <div className="col-2 col-md-6 bundle-right-img">
            <img
              className="w-100"
              src="https://i.ibb.co/dJ0CMxM/pexels-daniel-reche-1556706-1.png"
              alt=""
            />
          </div> */}
        </div>
      </section>

      {/* Brand section start here */}
      <section className="brand-container">
        <h1 className="title">BRANDS</h1>
        <div>
          <Swiper
            spaceBetween={50}
            slidesPerView={6}
            breakpoints={{
              "@0.00": {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              "@1.00": {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              "@1.50": {
                slidesPerView: 4,
                spaceBetween: 50,
              },
              "@2.00": {
                slidesPerView: 6,
                spaceBetween: 50,
              },
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
          >
            <SwiperSlide>
              <div className="container-img">
                <a href="">
                  <img
                    className="w-100"
                    src="https://i.ibb.co/6F74mC8/Cetaphil-old-1.png"
                    alt=""
                  />
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="container-img">
                <img
                  className="w-100"
                  src="https://i.ibb.co/L946BvL/logo-aboutus-1.png"
                  alt=""
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="container-img">
                <img
                  className="w-100"
                  src="https://i.ibb.co/L946BvL/logo-aboutus-1.png"
                  alt=""
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="container-img">
                <img
                  className="w-100"
                  src="https://i.ibb.co/L946BvL/logo-aboutus-1.png"
                  alt=""
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="container-img">
                <img
                  className="w-100"
                  src="https://i.ibb.co/LJbKxyY/779015-hul-012317-1.png"
                  alt=""
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="container-img">
                <img
                  className="w-100"
                  src="https://i.ibb.co/L946BvL/logo-aboutus-1.png"
                  alt=""
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="container-img">
                <img
                  className="w-100"
                  src="https://i.ibb.co/LJbKxyY/779015-hul-012317-1.png"
                  alt=""
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="container-img">
                <img
                  className="w-100"
                  src="https://i.ibb.co/LJbKxyY/779015-hul-012317-1.png"
                  alt=""
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="container-img">
                <img
                  className="w-100"
                  src="https://i.ibb.co/L946BvL/logo-aboutus-1.png"
                  alt=""
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="container-img">
                <img
                  className="w-100"
                  src="https://i.ibb.co/LJbKxyY/779015-hul-012317-1.png"
                  alt=""
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      {/* Why chose us */}
      <section className="why-chose-container">
        <h1 className="title">WHY CHOOSE BOXONIQ?</h1>
        <Swiper
          spaceBetween={50}
          slidesPerView={4}
          breakpoints={{
            "@0.00": {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            "@1.50": {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            "@2.00": {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <div className="container-img">
              <img
                className="w-100"
                src="https://i.ibb.co/KsX6ZkQ/image-4.png"
                alt=""
              />
              <p className="short-title">
                Bundlers get amazing bang for their bang
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="container-img">
              <img
                className="w-100"
                src="https://i.ibb.co/smSbxMk/image-1-1.png"
                alt=""
              />
              <p className="short-title">
                Bundlers get amazing bang for their bang
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="container-img">
              <img
                className="w-100"
                src="https://i.ibb.co/PGvC1pW/image-2.png"
                alt=""
              />
              <p className="short-title">
                Bundlers get amazing bang for their bang
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="container-img">
              <img
                className="w-100"
                src="https://i.ibb.co/PGvC1pW/image-2.png"
                alt=""
              />
              <p className="short-title">
                Bundlers get amazing bang for their bang
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="container-img">
              <img
                className="w-100"
                src="https://i.ibb.co/02rTJH2/image-1.png"
                alt=""
              />
              <p className="short-title">
                Bundlers get amazing bang for their bang
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>

      {/*Contact section */}
      <section className="contact-section">
        <h1 className="contact-title">Let’s Stay In Touch</h1>
        <p className="contact-short-title">
          Get access to latest updates from boxoniq and special offers
        </p>
        <div className="">
          <input
            className="input-text"
            type="text"
            name=""
            id=""
            placeholder="Enter your email address"
          />
          <input
            className="input-submit"
            type="submit"
            value="Submit"
            name=""
            id=""
          />
        </div>
      </section>

      {/* Shop section */}
      <section class="shop-container">
        <h2 class="title mb-3">SHOP BY CATEGORY</h2>
        <p className="short-title">
          Skip modify your bundle as per requirement
        </p>
        <div class="shop-block-container">
          <div class="row mx-0 justify-content-between align-items-center">
            <div class="col-6 col-sm-4 col-lg-2">
              <a className="link" href="shop">
                <img
                  className="w-100"
                  src="https://i.ibb.co/6tm3HQG/3-2.png"
                  alt=""
                />
                <h3 class="title text-center my-2">Baby Shop</h3>
              </a>
            </div>
            <div class="col-6 col-sm-4 col-lg-2">
              <a className="link" href="shop">
                <img
                  className="w-100"
                  src="https://i.ibb.co/ZY1CQnV/3-1.png"
                  alt=""
                />
                <h3 class="title text-center my-2">Baby Shop</h3>
              </a>
            </div>
            <div class="col-6 col-sm-4 col-lg-2">
              <a className="link" href="shop">
                <img
                  className="w-100"
                  src="https://i.ibb.co/KDbRJ9p/2-3.png"
                  alt=""
                />
                <h3 class="title text-center my-2">Baby Shop</h3>
              </a>
            </div>
            <div class="col-6 col-sm-4 col-lg-2">
              <a className="link" href="shop">
                <img
                  className="w-100"
                  src="https://i.ibb.co/MhhDXcj/1-9.png"
                  alt=""
                />
                <h3 class="title text-center my-2">Baby Shop</h3>
              </a>
            </div>
            <div class="col-6 col-sm-4 col-lg-2">
              <a className="link" href="shop">
                <img
                  className="w-100"
                  src="https://i.ibb.co/6tm3HQG/3-2.png"
                  alt=""
                />
                <h3 class="title text-center my-2">Baby Shop</h3>
              </a>
            </div>
            <div class="col-6 col-sm-4 col-lg-2">
              <a className="link" href="shop">
                <img
                  className="w-100"
                  src="https://i.ibb.co/6tm3HQG/3-2.png"
                  alt=""
                />
                <h3 class="title text-center my-2">Baby Shop</h3>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
