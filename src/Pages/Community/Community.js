import React from "react";
import "./Community.css";

const Community = () => {
  return (
    <section className="section-container">
      <div className="container">
        <h1 className="text-center fs-1 py-5">Community</h1>
        <h4 className="fs-2">Bulding network for the smartest Parents</h4>
        <p>
          It is a long established fact that a reader will distracted by the
          readable content of a page when looking at its layout. The point of
          usingLorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed tousing 'Content here, content here', making
          itlook like readable English.
        </p>
        <div className="d-flex justify-content-start align-items-center gap-3 my-5">
          <p className="fw-bold pt-3 ">9 Questions Asked</p>
          <button
            style={{ backgroundColor: "#09A42B" }}
            className="btn text-white"
          >
            Get Started
          </button>
        </div>
        <div className="row mx-0">
          <div className="col-12 col-md-5 mb-5">
            <div className="p-5 rounded rounded-5 bg-white mb-5">
              <div className="w-100">
                <img
                  className="d-block w-100 mx-auto"
                  src="https://i.ibb.co/k376cLF/undraw-mobile-interface-re-1vv9-1.png"
                  alt=""
                />
                <h1 className="fs-1 text-center my-2">Features</h1>
                <p className="text-center mb-2">
                  Boxoniq community keeps you on top of everything happening in
                  your community
                </p>
              </div>
            </div>
            <div className="p-5 rounded rounded-5 bg-primary my-5">
              <div className="w-100">
                <img
                  className="d-block w-100 mx-auto"
                  src="https://i.ibb.co/XCtWDGd/undraw-events-re-98ue-1.png"
                  alt=""
                />
                <h1 className="fs-1 text-center text-white my-4">
                  Share topics & events
                </h1>
                <p className="text-center text-white mb-5">
                  Boxoniq community keeps you on top of everything happening in
                  your community
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-5 mb-5">
            <div className="p-5 rounded rounded-5 bg-primary">
              <div className="w-100">
                <img
                  className="d-block w-100 mx-auto"
                  src="https://i.ibb.co/6v7WN27/undraw-information-tab-re-f0w3-1.png"
                  alt=""
                />
                <h1 className="fs-1 text-center text-white my-4">
                  Get information
                </h1>
                <p className="text-center text-white mb-5">
                  Boxoniq community keeps you on top of everything happening in
                  your community
                </p>
              </div>
            </div>
            <div className="p-5 rounded rounded-5 bg-white my-5">
              <div className="w-100">
                <img
                  className="d-block w-100 mx-auto"
                  src="https://i.ibb.co/CQMmXv6/undraw-community-re-cyrm-1.png"
                  alt=""
                />
                <h1 className="fs-1 text-center my-5">Build community</h1>
                <p className="text-center mb-2">
                  Boxoniq community keeps you on top of everything happening in
                  your community
                </p>
              </div>
            </div>
          </div>
        </div>
        <button
          style={{ backgroundColor: "#09A42B" }}
          className="btn text-white my-5 px-3 py-2 fs-3"
        >
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Community;
