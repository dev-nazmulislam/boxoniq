import React, { useEffect, useState } from "react";

import "./Community.css";

const CommunityQA = () => {
  const [questions, setQuestions] = useState([]);
  console.log(questions);
  useEffect(() => {
    fetch("questionData.json")
      .then((res) => res.json())
      .then((data) => setQuestions(data));
  }, []);
  return (
    <section className="qna-container">
      <div className="qna-banner">
        <h1 className="qna-title">Community</h1>
        <div className="banner-cntent">
          <form className="form-top">
            <img
              className="search"
              src="https://i.ibb.co/3CjKTCW/search-1.png"
              alt=""
            />
            <input
              type="text"
              style={{ backgroundColor: "#D9D9D9" }}
              class="form-control p-3 ps-5 rounded"
              placeholder="Search for answers, topics..."
            />
          </form>
          <div className="qna-box">
            <div className="w-25">
              <img
                className="p-3"
                src="https://i.ibb.co/8NMYD5R/conversation-1-1.png"
                alt=""
              />
            </div>
            <form className="w-75 from-bottom">
              <input
                type="text"
                class=""
                placeholder="Ask and discuss everything here..."
              />
              <button className="qna-btn">Post</button>
            </form>
          </div>
        </div>
      </div>
      <section
        style={{ paddingTop: "100px" }}
        class="row container mx-auto mx-0"
      >
        {/* Popular Question area */}
        <div class="col-12 col-md-8 col-lg-9">
          <h3 className="qna-title-f">Popular Questions</h3>
          {questions.map((question) => (
            <div key={question.id} class="card question-container my-2">
              <div className="p-2 qna-content-f">
                <img src="https://i.ibb.co/mXTfcXn/Ellipse-27.png" alt="" />
                <div>
                  <h3>{question.name}</h3>
                  <p title={question.question}>
                    {question.question.slice(0, 50) + "..."}
                  </p>
                  <p>
                    <span className="me-2">
                      <img
                        src="https://i.ibb.co/yy0ZQG2/comment-1-1.png"
                        alt=""
                      />
                    </span>
                    See Answers
                  </p>
                </div>
                <div>
                  {question?.avaterUser?.map((avater) => (
                    <img src={avater} alt="Avatar" class="avatar" />
                  ))}

                  <span class="avatar">...</span>
                </div>
              </div>
            </div>
          ))}

          <button className="show-btn-top">Show all questions</button>
        </div>

        {/* See moor area */}
        <div class="col-12 col-md-4 col-lg-3">
          <h3 className="qna-title-f">See More</h3>
          <button className="see-btn">Subscription History</button>
          <button className="see-btn">Order History</button>
          <button className="see-btn">Address Book</button>
          <button className="see-btn">Policies</button>
          <button className="see-btn">FAQs</button>
          <button className="see-btn">My Cart</button>
        </div>
      </section>
    </section>
  );
};

export default CommunityQA;
