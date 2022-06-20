import React, { useEffect, useState } from "react";
import search from "../../assets/images/search.png";
import conversation from "../../assets/images/conversation.png";
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
    <section className="section-container">
      {/* Community banner arra */}
      <div className="community-container">
        <h1 className="text-center py-5 text-white">Community</h1>
        <form className="half-width mx-auto px-2">
          <input
            type="text"
            style={{ backgroundColor: "#D9D9D9" }}
            class="form-control p-3  ps-5 rounded"
            placeholder="Search for answers, topics..."
          />
          <img src={search} alt="" />
        </form>
        <div className="community-box d-flex flex-column flex-md-row justify-content-center align-items-center half-width  mx-auto bg-white rounded my-5">
          <div className="w-25">
            <img className="p-3" src={conversation} alt="" />
          </div>
          <form className="w-75">
            <input
              type="text"
              class="input-bottom"
              placeholder="Ask and discuss everything here..."
            />
            <button
              style={{ backgroundColor: "#09A42B" }}
              className="btn btn-success px-5 my-3"
            >
              Post
            </button>
          </form>
        </div>
      </div>

      {/* Community Q&A area */}
      <section
        style={{ paddingTop: "100px" }}
        class="row container mx-auto mx-0"
      >
        {/* Popular Question area */}
        <div class="col-12 col-md-8 col-lg-9">
          <h3>Popular Questions</h3>
          {questions.map((question) => (
            <div key={question.id} class="card my-2">
              <div className="p-2 question-container">
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

          <button
            style={{ backgroundColor: "#09A42B" }}
            className="btn btn-success px-5 my-3"
          >
            Show all questions
          </button>
        </div>

        {/* See moor area */}
        <div class="col-12 col-md-4 col-lg-3">
          <h3>See More</h3>
          <button className="btn w-100 text-start rounded bg-white py-2 my-1">
            Subscription History
          </button>
          <button className="btn w-100 text-start rounded bg-white  py-2 my-1">
            Order History
          </button>
          <button className="btn w-100 text-start rounded bg-white  py-2 my-1">
            Address Book
          </button>
          <button className="btn w-100 text-start rounded bg-white  py-2 my-1">
            Policies
          </button>
          <button className="btn w-100 text-start rounded bg-white  py-2 my-1">
            FAQs
          </button>
          <button className="btn w-100 text-start rounded bg-white  py-2 my-1">
            My Cart
          </button>
        </div>
      </section>
    </section>
  );
};

export default CommunityQA;
