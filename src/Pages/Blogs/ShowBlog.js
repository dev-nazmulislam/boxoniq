import React from "react";
import "./Blog.css";
const ShowBlog = () => {
  return (
    <section className="blog-container">
      <div className="show-blog-banner">
        <h1 className="text-center">Blog</h1>
      </div>
      <div class="row row-cols-1 g-5 blogs">
        <div class="col-12 col-md-10 mx-auto">
          <div class="blog">
            <div className="">
              <img src="https://i.ibb.co/ZGSTYdy/1-10.png" class="" alt="..." />
              <div class="show-card-body">
                <h5 class="card-title link">What is Lorem Ipsum?</h5>
                <p class="card-text link">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry. Lorem Ipsum is simply dummy
                  text of the printing and typesetting industry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowBlog;
