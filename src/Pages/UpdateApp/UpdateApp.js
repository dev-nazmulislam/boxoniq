import React, { useEffect, useState } from "react";
import "../Community/Community.css";

const UpdateApp = () => {
  const [answer, setAnswer] = useState([]);
  console.log(answer);
  useEffect(() => {
    fetch("answerData.json")
      .then((res) => res.json())
      .then((data) => setAnswer(data));
  }, []);
  return (
    <section className="section-container">
      {/* Community banner arra */}
      <section className="community-container">
        <h1 className="text-center py-5 text-white">Can we update this app?</h1>
      </section>

      {/* Community Q&A area */}
      <section
        style={{ paddingTop: "100px" }}
        class="row container mx-auto mx-0"
      >
        {/* Popular Answer area */}
        <div class="col-12 col-md-8 col-lg-9">
          <h3>Answers</h3>
          {answer.map((answer) => (
            <div key={answer.id} class="card my-2">
              <div className="question-container">
                <img src="https://i.ibb.co/mXTfcXn/Ellipse-27.png" alt="" />
                <div>
                  <h3>{answer.name}</h3>
                  <p title={answer.answer}>
                    {answer.answer.slice(0, 50) + "..."}
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
                  <img
                    src="https://i.ibb.co/TcvxRBP/Ellipse-22.png"
                    alt="Avatar"
                    class="avatar"
                  />
                  <img
                    src="https://i.ibb.co/QQPW2V9/Ellipse-21.png"
                    alt="Avatar"
                    class="avatar"
                  />
                  <img
                    src="https://i.ibb.co/XW7DS5Y/Ellipse-20.png"
                    alt="Avatar"
                    class="avatar"
                  />
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
          <h3>Related Questions</h3>
          <button className="btn w-100 text-start rounded bg-white py-2 my-1">
            Can we update this app please, if yes then how?...
          </button>
          <button className="btn w-100 text-start rounded bg-white  py-2 my-1">
            Can we update this app please, if yes then how?...
          </button>
          <button className="btn w-100 text-start rounded bg-white  py-2 my-1">
            Can we update this app please, if yes then how?...
          </button>
          <button className="btn w-100 text-start rounded bg-white  py-2 my-1">
            Can we update this app please, if yes then how?...
          </button>
        </div>
      </section>
    </section>
  );
};

export default UpdateApp;
