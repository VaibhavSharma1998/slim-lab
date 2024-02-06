import React from "react";
import "./styles.css";

export const Questions = () => {
  return (
    <>
      <section className="questions-div">
        <div className="container">
          <div className="row pt-128">
            <div className="col-lg-6 col-sm-12">
              <p className="question-p">
                Have <span className="p-color">questions?</span>
              </p>
              <p className="question-p">
                Get <span className="p-color">answers.</span>
              </p>
            </div>
            <div className="col-lg-6 col-sm-12">
              <div class="accordion accordion-flush" id="accordionFlushExample">
                <div class="accordion-item">
                  <h2 class="accordion-header" id="flush-headingOne">
                    <button
                      class="accordion-button collapsed question-btn"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseOne"
                      aria-expanded="false"
                      aria-controls="flush-collapseOne"
                    >
                      How does Semaglutide help with weight loss?
                    </button>
                  </h2>
                  <div
                    id="flush-collapseOne"
                    class="accordion-collapse collapse"
                    aria-labelledby="flush-headingOne"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div class="accordion-body button-b">
                      Semaglutide helps with weight loss by reducing appetite,
                      increasing feelings of fullness, and slowing down gastric
                      emptying. These effects collectively lead to a decrease in
                      calorie intake and promote healthier eating habits.
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="flush-headingTwo">
                    <button
                      class="accordion-button collapsed question-btn"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseTwo"
                      aria-expanded="false"
                      aria-controls="flush-collapseTwo"
                    >
                     Is Semaglutide safe for weight loss?
                    </button>
                  </h2>
                  <div
                    id="flush-collapseTwo"
                    class="accordion-collapse collapse"
                    aria-labelledby="flush-headingTwo"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div class="accordion-body button-b">
                    Semaglutide helps with weight loss by reducing appetite,
                      increasing feelings of fullness, and slowing down gastric
                      emptying. These effects collectively lead to a decrease in
                      calorie intake and promote healthier eating habits.
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="flush-headingThree">
                    <button
                      class="accordion-button collapsed question-btn"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseThree"
                      aria-expanded="false"
                      aria-controls="flush-collapseThree"
                    >
                      How much weight can I expect to lose with Semaglutide?
                    </button>
                  </h2>
                  <div
                    id="flush-collapseThree"
                    class="accordion-collapse collapse"
                    aria-labelledby="flush-headingThree"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div class="accordion-body button-b">
                     Semaglutide helps with weight loss by reducing appetite,
                      increasing feelings of fullness, and slowing down gastric
                      emptying. These effects collectively lead to a decrease in
                      calorie intake and promote healthier eating habits.
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="flush-headingFour">
                    <button
                      class="accordion-button collapsed question-btn"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseFour"
                      aria-expanded="false"
                      aria-controls="flush-collapseFour"
                    >
                     Do I need a prescription for Semaglutide for weight loss?
                    </button>
                  </h2>
                  <div
                    id="flush-collapseFour"
                    class="accordion-collapse collapse"
                    aria-labelledby="flush-headingFour"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div class="accordion-body button-b">
                     Semaglutide helps with weight loss by reducing appetite,
                      increasing feelings of fullness, and slowing down gastric
                      emptying. These effects collectively lead to a decrease in
                      calorie intake and promote healthier eating habits.
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="flush-headingFive">
                    <button
                      class="accordion-button collapsed question-btn"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseFive"
                      aria-expanded="false"
                      aria-controls="flush-collapseFive"
                    >
                    Can I continue taking Semaglutide after I reach goal weight?
                    </button>
                  </h2>
                  <div
                    id="flush-collapseFive"
                    class="accordion-collapse collapse"
                    aria-labelledby="flush-headingFive"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div class="accordion-body button-b">
                     Semaglutide helps with weight loss by reducing appetite,
                      increasing feelings of fullness, and slowing down gastric
                      emptying. These effects collectively lead to a decrease in
                      calorie intake and promote healthier eating habits.
                    </div>
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
