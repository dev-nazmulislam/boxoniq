import React, { useEffect, useState } from "react";
import "../Community/Community.css";

const Refer = () => {
  const [answer, setAnswer] = useState([]);
  console.log(answer);
  useEffect(() => {
    fetch("answerData.json")
      .then((res) => res.json())
      .then((data) => setAnswer(data));
  }, []);
  return (
    <section className="section-container">
      <div className="refer-container">
        <h1 className="text-center py-5 text-white">Refer and Earn</h1>
      </div>
      <div className="container-box">
        <div className="p-3">
          <h4>Refer and Earn (Invite)</h4>
          <p>
            Invite friends & earn flat 50 in your boxoniq wallet, on thein first
            purchase.
          </p>
          <button className="btn btn-danger w-100">Invite Contact</button>
          <p className="text-center">Or</p>
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="Use your code"
            />
            <span class="input-group-text" id="basic-addon2">
              Copy
            </span>
          </div>
        </div>
        <div className="w-100">
          <img
            className="w-100 d-block mx-auto"
            src="https://i.ibb.co/Yhfm4Gp/image-removebg-preview-6-1.png"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Refer;
