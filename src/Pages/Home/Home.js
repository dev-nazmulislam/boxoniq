import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div style={{ backgroundColor: "#f3f3f3" }}>
      {/* Carusel section start */}
      <section
        id="carouselExampleSlidesOnly"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div
            style={{ height: "80vh" }}
            class="carousel-item active carousel-bg d-flex align-items-center justify-content-start"
          >
            <div style={{ marginLeft: "140px" }} className="w-25">
              <h1 className="fw-bold">Start</h1>
              <h3 className="fw-bold">your</h3>
              <h3 className="fw-bold">Bundle</h3>
              <h3 className="fw-bold">Now</h3>
              <img src="https://i.ibb.co/HrXYz5D/Arrow-2.png" alt="" />
            </div>
          </div>
          <div
            style={{ height: "80vh" }}
            class="carousel-item carousel-bg d-flex align-items-center justify-content-start"
          >
            <div style={{ marginLeft: "140px" }} className="w-25">
              <h1 className="fw-bold">Start</h1>
              <h3 className="fw-bold">your</h3>
              <h3 className="fw-bold">Bundle</h3>
              <h3 className="fw-bold">Now</h3>
              <img src="https://i.ibb.co/HrXYz5D/Arrow-2.png" alt="" />
            </div>
          </div>
          <div
            style={{ height: "80vh" }}
            class="carousel-item carousel-bg d-flex align-items-center justify-content-start"
          >
            <div style={{ marginLeft: "140px" }} className="w-25">
              <h1 className="fw-bold">Start</h1>
              <h3 className="fw-bold">your</h3>
              <h3 className="fw-bold">Bundle</h3>
              <h3 className="fw-bold">Now</h3>
              <img src="https://i.ibb.co/HrXYz5D/Arrow-2.png" alt="" />
            </div>
          </div>
        </div>
      </section>
      {/* Box area start */}
      <section className="bg-white my-5 p-3 rounded rounded-5 box-container">
        <div className="">
          <div className="row mx-0 box-content">
            <div className="col-12 col-md-3">
              <h3>
                <span className="text-white">HOW</span> IT WORKS
              </h3>
            </div>
            <div className="col-12 col-md-5 d-flex justify-content-between align-items-center">
              <div className="d-flex flex-column justify-content-between align-items-center">
                <div className="box">
                  <img src="https://i.ibb.co/WHvPPfX/sync-1.png" alt="" />
                </div>
                <h4>Create Box</h4>
              </div>
              <div className="d-flex flex-column justify-content-center align-items-center">
                <div className="box">
                  <img src="https://i.ibb.co/ccPBqKR/wallet-2-1.png" alt="" />
                </div>
                <h4>Create Box</h4>
              </div>
              <div className="d-flex flex-column justify-content-center align-items-center">
                <div className="box">
                  <img src="https://i.ibb.co/BVy8YyT/package-1-1.png" alt="" />
                </div>
                <h4>Create Box</h4>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <button
                style={{ backgroundColor: "#09A42B" }}
                className="btn py-3 fs-5 text-white w-100"
              >
                Start Your Bundle
                <img
                  className="ms-2"
                  src="https://i.ibb.co/HrXYz5D/Arrow-2.png"
                  alt=""
                />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Bundle banifite area start     */}
      <section className="container my-5">
        <h2 className="mt-3">BUNDLE BENEFITS</h2>
        <div className="banifit-container">
          <div className="box-content gap-5">
            <div className="d-flex flex-column justify-content-center">
              <div
                style={{ borderRadius: "25px" }}
                className="bg-white p-4 position-relative my-4 shadow"
              >
                <h5 className="ps-4">Skip subscription anytime anywhere</h5>
                <div className="banifit-box">
                  <img src="https://i.ibb.co/txNGzgK/check-1.png" alt="" />
                </div>
              </div>
              <div
                style={{ borderRadius: "25px" }}
                className="bg-white p-4 position-relative my-4 shadow"
              >
                <h5 className="ps-4">Skip subscription anytime anywhere</h5>
                <div className="banifit-box">
                  <img src="https://i.ibb.co/M2JwKGm/time-1.png" alt="" />
                </div>
              </div>
              <div
                style={{ borderRadius: "25px" }}
                className="bg-white p-4 position-relative my-4 shadow"
              >
                <h5 className="ps-4">Skip subscription anytime anywhere</h5>
                <div className="banifit-box">
                  <img src="https://i.ibb.co/k52WZ3D/calendar-3-1.png" alt="" />
                </div>
              </div>
            </div>
            <div className="position-relative for-hide">
              <div
                style={{
                  width: "70vh",
                  height: "70vh",
                  backgroundColor: "#09A42B",
                }}
                className="p-4"
              ></div>
              <div
                style={{ width: "70vh", height: "70vh" }}
                className="bg-white p-4 box-position"
              >
                <h2 className="text-center">Bundle Benefits</h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, Lorem
                  Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry's standard dummy
                  text ever since the 1500s, when an unknown printer took a
                  galley of type and scrambled it to make a type specimen book.
                  It has survived not only five centuries,
                </p>
                <button className="btn py-3 fs-4 border border-4 w-100">
                  Start Your Bundle
                  <img
                    className="ms-2"
                    src="https://i.ibb.co/HrXYz5D/Arrow-2.png"
                    alt=""
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bran section start here */}
      <section className="mx-5">
        <div
          style={{ borderRadius: "25px" }}
          className="bg-white my-5 p-5 shadow"
        >
          <h3 className="my-4">BRANDS</h3>
          <div className="row mx-0">
            <div className="col-6 col-md-3">
              <div className="w-100">
                <img
                  className="w-100"
                  src="https://i.ibb.co/LJbKxyY/779015-hul-012317-1.png"
                  alt=""
                />
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="w-100">
                <img
                  className="w-100"
                  src="https://i.ibb.co/hsg8kFh/dsfsdf-1.png"
                  alt=""
                />
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="w-100">
                <img
                  className="w-100"
                  src="https://i.ibb.co/L946BvL/logo-aboutus-1.png"
                  alt=""
                />
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="w-100">
                <img
                  className="w-100"
                  src="https://i.ibb.co/6F74mC8/Cetaphil-old-1.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why chose us */}
      <section className="mx-5">
        <div
          style={{ borderRadius: "25px" }}
          className="bg-white my-5 p-5 shadow"
        >
          <h3 className="my-4">WHY CHOOSE BOXONIQ?</h3>
          <div className="row mx-0">
            <div className="col-6 col-md-3">
              <div className="w-100">
                <img
                  className="w-100"
                  src="https://i.ibb.co/KsX6ZkQ/image-4.png"
                  alt=""
                />
                <p>Bundlers get amazing bang for their bang</p>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="w-100">
                <img
                  className="w-100"
                  src="https://i.ibb.co/smSbxMk/image-1-1.png"
                  alt=""
                />
                <p>Bundlers get amazing bang for their bang</p>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="w-100">
                <img
                  className="w-100"
                  src="https://i.ibb.co/PGvC1pW/image-2.png"
                  alt=""
                />
                <p>Bundlers get amazing bang for their bang</p>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="w-100">
                <img
                  className="w-100"
                  src="https://i.ibb.co/02rTJH2/image-1.png"
                  alt=""
                />
                <p>Bundlers get amazing bang for their bang</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*Contact section */}
      <section className="mx-5">
        <div
          style={{ borderRadius: "25px", backgroundColor: "#09A42B" }}
          className="my-5 shadow d-flex justify-content-between align-items-center"
        >
          <div className="p-4">
            <h4 className="my-2 text-white fw-bold">Let’s Stay In Touch</h4>
            <h5 className="text-white">
              Get access to latest updates from boxoniq and special offers
            </h5>
            <input
              className="p-2 me-2"
              type="text"
              name=""
              id=""
              placeholder="Enter your email address"
            />
            <input className="p-2" type="submit" value="Submit" name="" id="" />
          </div>
          <div className="for-hide">
            <img
              src="https://i.ibb.co/6vmH37d/cute-baby-going-their-first-steps-23-2149318238-1.png"
              alt=""
            />
          </div>
        </div>
      </section>

      {/* Shop section */}
      <section className="mx-5">
        <div
          style={{ borderRadius: "25px" }}
          className="bg-white my-5 p-5 shadow"
        >
          <h3 className="my-4">SHOP BY CATEGORY</h3>
          <p>Skip modify your bundle as per requirement</p>
          <div className="row mx-0">
            <div className="col-6 col-md-3">
              <div className="d-flex flex-column justify-content-between align-items-center">
                <img src="https://i.ibb.co/6tm3HQG/3-2.png" alt="" />
                <h4>Baby Shop</h4>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="d-flex flex-column justify-content-between align-items-center">
                <img src="https://i.ibb.co/ZY1CQnV/3-1.png" alt="" />
                <h4>Baby Shop</h4>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="d-flex flex-column justify-content-between align-items-center">
                <img src="https://i.ibb.co/KDbRJ9p/2-3.png" alt="" />
                <h4>Baby Shop</h4>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="d-flex flex-column justify-content-between align-items-center">
                <img src="https://i.ibb.co/MhhDXcj/1-9.png" alt="" />
                <h4>Baby Shop</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
