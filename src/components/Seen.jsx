import React from "react";
import "./styles.css";
import seenImg1 from "../images/seen-img1.png";
import seenImg2 from "../images/seen-img2.png";
import seenImg3 from "../images/seen-img3.png";
import seenImg4 from "../images/seen-img4.png";
import seenImg5 from "../images/seen-img5.png";
import consultationImg from "../images/consultation.png";
import prescriptionImg from "../images/prescription.png";
import medicineImg from "../images/medicine-img.png";
import oneImg from "../images/one-number.png";
import secondImg from "../images/second-number.png";
import thirdImg from "../images/third-number.png";

export const Seen = () => {
  return (
    <div>
      <section>
        <div className="container">
          <hr className="hr-line"></hr>
          <p className="seen-p">AS SEEN ON</p>
          <div className="seen-brand-div">
            <img src={seenImg1} alt="seenImg1" />
            <img src={seenImg2} alt="seenImg2" />
            <img src={seenImg3} alt="seenImg3" className="margin-t40"/>
            <img src={seenImg4} alt="seenImg4" />
            <img src={seenImg5} alt="seenImg5" />
          </div>
          <p className="lose-p">
            Lose up to 15% of your body weight in 3 steps
          </p>
          <div className="row margint-59">
            <div className="col-lg-4 col-md-6  col-sm-12">
              <div className="consultation-div">
                <img
                  src={consultationImg}
                  alt="consultationImg"
                  className="consultation-img"
                />
                <div className="number-one-div">
                  <img src={oneImg} alt="oneImg" srcset="" />
                  <div className="marginl-31">
                    <p className="schedule-p">Schedule a consultation</p>
                    <p className="guidance-p">
                      Schedule a consultation with our experts for personalized
                      guidance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6  col-sm-12">
              <div className="consultation-div">
                <img
                  src={prescriptionImg}
                  alt="consultationImg"
                  className="consultation-img"
                />
                <div className="number-one-div">
                  <img src={secondImg} alt="oneImg" srcset="" />
                  <div className="marginl-31">
                    <p className="schedule-p">Get a Prescription</p>
                    <p className="guidance-p">
                      Our team of healthcare experts can assess your unique
                      needs and prescribe Semaglutide.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6  col-sm-12">
              <div className="consultation-div">
                <img
                  src={medicineImg}
                  alt="consultationImg"
                  className="consultation-img"
                />
                <div className="number-one-div">
                  <img src={thirdImg} alt="oneImg" srcset="" />
                  <div className="marginl-31">
                    <p className="schedule-p">Purchase Your Meds</p>
                    <p className="guidance-p">
                      Once prescribed, easily purchase your Semaglutide
                      medication through our secure and convenient platform.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="btn-lose-div">
            <p className="want-p">Want to start losing weight?</p>
            <button type="button" className="seen-btn">GET STARTED</button>
          </div>
        </div>
      </section>
    </div>
  );
};
