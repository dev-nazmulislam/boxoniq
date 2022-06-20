import React from "react";
import "../Community/Community.css";

const ShowStories = () => {
  return (
    <section className="section-container">
      <div className="blog-container">
        <div className="container">
          <h1 className="text-center text-white fs-1 pt-5 stories">Stories</h1>
        </div>
      </div>
      <div className="container">
        <div className="blogs bg-white w-100 w-md-75 mx-auto">
          <div className="w-100">
            <img
              className="d-block w-100 mx-auto rounded rounded-5"
              src="https://i.ibb.co/ZGSTYdy/1-10.png"
              alt=""
            />
          </div>
          <div className="card-body">
            <h4>What is Lorem Ipsum?</h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum is simply dummy text of the
              printing and typesetting industry.{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowStories;
