import React from "react";
import { Link } from "react-router-dom";
import "./Community.css";

const Community = () => {
  return (
    <section className="community-container">
      <h1 className="text-center community-title">Community</h1>
      <h4 className="community-short-title">
        Bulding network for the smartest Parents
      </h4>
      <p className="community-description">
        It is a long established fact that a reader will distracted by the
        readable content of a page when looking at its layout. The point of
        usingLorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed tousing 'Content here, content here', making itlook
        like readable English.
      </p>
      <div className="d-flex justify-content-start align-items-center gap-3 my-5">
        <p className="qutation">9 Questions Asked</p>
        <button
          style={{ backgroundColor: "#09A42B" }}
          className="community-btn"
        >
          Get Started
        </button>
      </div>
      <div className="row mx-0">
        <div className="col-12 col-md-5 mb-5">
          <div className="community-left">
            <img
              className="d-block w-100 mx-auto"
              src="https://i.ibb.co/k376cLF/undraw-mobile-interface-re-1vv9-1.png"
              alt=""
            />
            <h1 className="community-left-title">Features</h1>
            <p className="community-left-description">
              Boxoniq community keeps you on top of everything happening in your
              community
            </p>
          </div>
          <div className="community-right">
            <img
              className="d-block w-100 mx-auto"
              src="https://i.ibb.co/XCtWDGd/undraw-events-re-98ue-1.png"
              alt=""
            />
            <h1 className="community-right-title">Share topics & events</h1>
            <p className="community-right-description">
              Boxoniq community keeps you on top of everything happening in your
              community
            </p>
          </div>
        </div>
        <div className="col-12 col-md-5 mb-5">
          <div className="community-right">
            <img
              className="d-block w-100 mx-auto"
              src="https://i.ibb.co/6v7WN27/undraw-information-tab-re-f0w3-1.png"
              alt=""
            />
            <h1 className="community-right-title">Get information</h1>
            <p className="community-right-description">
              Boxoniq community keeps you on top of everything happening in your
              community
            </p>
          </div>
          <div className="community-left">
            <img
              className="d-block w-100 mx-auto"
              src="https://i.ibb.co/CQMmXv6/undraw-community-re-cyrm-1.png"
              alt=""
            />
            <h1 className="community-left-title">Build community</h1>
            <p className="community-left-description">
              Boxoniq community keeps you on top of everything happening in your
              community
            </p>
          </div>
        </div>
      </div>
      <Link to="/communityqna">
        <button className="communit-button-btn">Get Started</button>
      </Link>
    </section>
  );
};

export default Community;
