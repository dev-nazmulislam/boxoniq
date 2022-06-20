import React from "react";
import search from "../../assets/images/search.png";
import "../Community/Community.css";

const Stories = () => {
  return (
    <section className="section-container">
      <div className="blog-container">
        <div className="container">
          <h1 className="text-center text-white fs-1 pt-5">Stories</h1>
          <p className="text-white text-center w-100 mx-auto">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum is simply dummy text of the
            printing and typesetting industry.
          </p>
          <form className="half-width mx-auto px-2">
            <input
              type="text"
              style={{ backgroundColor: "#D9D9D9" }}
              class="form-control p-3  ps-5 rounded"
              placeholder="Search for answers, topics..."
            />
            <img src={search} alt="" />
          </form>
        </div>
      </div>
      <div className="container blogs">
        <div className="d-flex flex-column flex-md-row bg-white rounded rounded-5 my-5 p-5">
          <div className="w-100">
            <img
              className="d-block mx-auto w-100"
              src="https://i.ibb.co/tJmggV1/2-9.png"
              alt=""
            />
          </div>
          <div className="card-body">
            <h3>What is Lorem Ipsum?</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum is simply dummy text of the
              printing and typesetting industry.{" "}
            </p>
          </div>
        </div>
        <div className="d-flex flex-column flex-md-row bg-white rounded rounded-5 my-5 p-5">
          <div className="w-100">
            <img
              className="d-block mx-auto w-100"
              src="https://i.ibb.co/tJmggV1/2-9.png"
              alt=""
            />
          </div>
          <div className="card-body">
            <h3>What is Lorem Ipsum?</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum is simply dummy text of the
              printing and typesetting industry.{" "}
            </p>
          </div>
        </div>
        <div className="d-flex flex-column flex-md-row bg-white rounded rounded-5 my-5 p-5">
          <div className="w-100">
            <img
              className="d-block mx-auto w-100"
              src="https://i.ibb.co/tJmggV1/2-9.png"
              alt=""
            />
          </div>
          <div className="card-body">
            <h3>What is Lorem Ipsum?</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum is simply dummy text of the
              printing and typesetting industry.{" "}
            </p>
          </div>
        </div>
        <div className="d-flex flex-column flex-md-row bg-white rounded rounded-5 my-5 p-5">
          <div className="w-100">
            <img
              className="d-block mx-auto w-100"
              src="https://i.ibb.co/tJmggV1/2-9.png"
              alt=""
            />
          </div>
          <div className="card-body">
            <h3>What is Lorem Ipsum?</h3>
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

export default Stories;
