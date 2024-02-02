import React from "react";
import bannerImg from "../images/banner-img.png";
import correctBanner from "../images/correct-banner.png";
import bannerStar from "../images/banner-star.png";

export const Banner = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="row banner-main-div">
            <div className="col-lg-7">
              <div className="banner-left-div">
                <p className="banner-p1">
                  The Game-Changing Solution the FDA Stands Behind!
                </p>
                <h3 className="banner-h3">
                  No More Diets. No More Gym. A New Way to Fast Weight Loss
                </h3>
                <p className="price-p">
                  For only: <ins className="span-price">$99/month</ins>
                </p>
                <div className="d-flex margin-t7">
                  <img
                    src={correctBanner}
                    alt="correct-png"
                    className="correct-img"
                  />
                  <p className="correct-p">
                    Lose up to 15% of your body fat in a week
                  </p>
                </div>
                <div className="d-flex margin-t7">
                  <img
                    src={correctBanner}
                    alt="correct-png"
                    className="correct-img"
                  />
                  <p className="correct-p">
                    Unlimited Consultations with the best Physicians
                  </p>
                </div>
                <div className="d-flex margin-t7">
                  <img
                    src={correctBanner}
                    alt="correct-png"
                    className="correct-img"
                  />
                  <p className="correct-p">
                    Prescription to Semaglutide with 6 weeks of medication
                  </p>
                </div>
                <div className="d-flex">
                  <img src={bannerStar} alt="star" className="star" />
                  <p className="rating-p">4.8 OVER 5 STAR REVIEWS</p>
                </div>
                <button type="button" className="start-btn">
                  GET STARTED
                </button>
                <p className="fee-p">NO HIDDEN FEES. NO INSURANCE REQUIRED</p>
              </div>
            </div>
            <div className="col-lg-5">
              <img
                src={bannerImg}
                alt="slim-girl"
                srcset=""
                className="banner-img"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
