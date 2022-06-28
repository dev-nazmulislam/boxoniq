import React from "react";
import "./Blog.css";
const Blogs = () => {
  return (
    <section className="blog-container">
      <div className="blog-banner">
        <h1 className="text-center">Blog</h1>
        <p className="text-center">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took .
        </p>
      </div>
      <div class="row row-cols-1 row-cols-md-2 g-5 blogs">
        <div class="col">
          <div class="blog">
            <img src="https://i.ibb.co/ZGSTYdy/1-10.png" class="" alt="..." />
            <div class="card-body">
              <h5 class="card-title link">What is Lorem Ipsum?</h5>
              <p class="card-text link">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum is simply dummy text of the
                printing and typesetting industry.
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="blog">
            <img src="https://i.ibb.co/ZGSTYdy/1-10.png" class="" alt="..." />
            <div class="card-body">
              <h5 class="card-title link">What is Lorem Ipsum?</h5>
              <p class="card-text link">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum is simply dummy text of the
                printing and typesetting industry.
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="blog">
            <img src="https://i.ibb.co/ZGSTYdy/1-10.png" class="" alt="..." />
            <div class="card-body">
              <h5 class="card-title link">What is Lorem Ipsum?</h5>
              <p class="card-text link">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum is simply dummy text of the
                printing and typesetting industry.
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="blog">
            <img src="https://i.ibb.co/ZGSTYdy/1-10.png" class="" alt="..." />
            <div class="card-body">
              <h5 class="card-title link">What is Lorem Ipsum?</h5>
              <p class="card-text link">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum is simply dummy text of the
                printing and typesetting industry.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
