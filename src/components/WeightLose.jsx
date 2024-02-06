import React from "react";
import "./styles.css";
import fifteen from "../images/fifteen.png";
import twenty from "../images/twenty.png";
import nintyfour from "../images/nintyfour.png";
import slash from "../images/slash.png";

export const WeightLose = () => {
  return (
    <>
      <section className="weightlose-section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 col-sm-12">
              <div className="weightlose-section-left-div">
                <p className="weight-p1">
                  The Weight Loss Wonder Drug That's Changing Lives!
                </p>
                <p className="weight-p2">
                  Semaglutide for weight loss is a medication that can be
                  prescribed to individuals looking to manage their weight
                  effectively. Its ability to reduce appetite, increase feelings
                  of fullness, and support healthier eating habits has made it a
                  valuable tool in weight management for many people. However,
                  its use should always be discussed and monitored by a
                  healthcare professional.
                </p>
                <button type="button" className="weightlose-btn">
                  GET STARTED
                </button>
              </div>
            </div>
            <div className="col-lg-6 col-sm-12">
              <div className="d-flex">
                <div className="fifteen-div">
                  <div className="fifteen-sub-div">
                    <img src={fifteen} alt="fifteen" className="fifteen-img" />
                    <p className="fifteen-text">
                      Has an average reduction in body weight
                    </p>
                  </div>
                  <div className="fifteen-sub-div mt-19">
                    <img
                      src={nintyfour}
                      alt="fifteen"
                      className="fifteen-img"
                    />
                    <p className="fifteen-text">
                      Of people have achieved lasting weight loss
                    </p>
                  </div>
                </div>
                <div className="fifteen-div ml-20">
                  <div className="fifteen-sub-div">
                    <img src={twenty} alt="twenty" className="fifteen-img" />
                    <p className="fifteen-text">
                    Of users have noticed a significant reduction in waist size
                    </p>
                  </div>
                  <div className="fifteen-sub-div mt-19">
                    <img
                      src={slash}
                      alt="slash"
                      className="fifteen-img"
                    />
                    <p className="fifteen-text">
                    Of people who tried Semaglutide says this is effective
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
