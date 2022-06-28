import React, { useEffect, useState } from "react";
import "../Community/Community.css";

const CommunitAnswer = () => {
  const [answer, setAnswer] = useState([]);
  console.log(answer);
  useEffect(() => {
    fetch("answerData.json")
      .then((res) => res.json())
      .then((data) => setAnswer(data));
  }, []);
  return (
    // <section className="qna-container">
    //   <div className="qna-banner">
    //     <h1 className="qna-title">Community</h1>
    //     <div className="banner-cntent">
    //       <form className="form-top">
    //         <input
    //           type="text"
    //           style={{ backgroundColor: "#D9D9D9" }}
    //           class="form-control p-3 ps-5 rounded"
    //           placeholder="Search for answers, topics..."
    //         />
    //       </form>
    //       <div className="qna-box">
    //         <div className="w-25"></div>
    //         <form className="w-75 from-bottom">
    //           <input
    //             type="text"
    //             class=""
    //             placeholder="Ask and discuss everything here..."
    //           />
    //           <button className="qna-btn">Post</button>
    //         </form>
    //       </div>
    //     </div>
    //   </div>
    //   <section
    //     style={{ paddingTop: "100px" }}
    //     class="row container mx-auto mx-0"
    //   >
    //     {/* Popular Question area */}
    //     <div class="col-12 col-md-8 col-lg-9">
    //       <h3 className="qna-title-f">Popular Questions</h3>
    //       {answer.map((question) => (
    //         <div key={question.id} class="card question-container my-2">
    //           <div className="p-2 qna-content-f">
    //             <img src="https://i.ibb.co/mXTfcXn/Ellipse-27.png" alt="" />
    //             <div>
    //               <h3>{question.name}</h3>
    //               <p title={question.question}>
    //                 {question.question.slice(0, 50) + "..."}
    //               </p>
    //               <p>
    //                 <span className="me-2">
    //                   <img
    //                     src="https://i.ibb.co/yy0ZQG2/comment-1-1.png"
    //                     alt=""
    //                   />
    //                 </span>
    //                 See Answers
    //               </p>
    //             </div>
    //             <div>
    //               {question?.avaterUser?.map((avater) => (
    //                 <img src={avater} alt="Avatar" class="avatar" />
    //               ))}

    //               <span class="avatar">...</span>
    //             </div>
    //           </div>
    //         </div>
    //       ))}

    //     {/* See moor area */}
    //
    //   </section>
    // </section>
    <section className="qna-container">
      {/* Community banner arra */}
      <section className="qna-banner">
        <div className="qna-title">
          <h1 className="">Can we update this app?</h1>
          <div className="banner-cntent">
            <form className="form-top">
              <input
                type="text"
                class="form-control p-3 ps-5 rounded"
                placeholder="Reply"
              />
            </form>
          </div>
        </div>
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
            <div key={answer.id} class="card question-container">
              <div className="qna-content-f">
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

          <button className="show-btn-top">Show all questions</button>
        </div>

        {/* See moor area */}
        <div class="col-12 col-md-4 col-lg-3">
          <h3>Related Questions</h3>
          <button className="see-btn">
            Can we update this app please, if yes then how?...
          </button>
          <button className="see-btn">
            Can we update this app please, if yes then how?...
          </button>
          <button className="see-btn">
            Can we update this app please, if yes then how?...
          </button>
          <button className="see-btn">
            Can we update this app please, if yes then how?...
          </button>
        </div>
      </section>
    </section>
  );
};

export default CommunitAnswer;
