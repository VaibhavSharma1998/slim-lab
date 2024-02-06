import React from "react";
import correct from "../images/table-correct.png";

export const Table = () => {
  return (
    <>
      <section className="table-main-div">
        <div className="container">
          <div >
            <p className="table-heading">
              See why people choose <span className="p-color">Slimlab</span> as
              their Go-To-choice for{" "}
              <span className="p-color">Semaglutide</span>
            </p>
            
              <table class="table ">
                <thead>
                  <tr>
                    <th scope="col"></th>
                    <th scope="col">slimlab.</th>
                    <th scope="col">Clinic</th>
                    <th scope="col">Other Brands</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Appointment wait time</th>
                    <td>$300</td>
                    <td>$2000</td>
                    <td>$1500</td>
                  </tr>
                  <tr className="color-change">
                    <th scope="row">Semaglutide cost</th>
                    <td>15%</td>
                    <td>5-7%</td>
                    <td>5-7%</td>
                  </tr>

                  <tr>
                    <th scope="row">Average weight loss</th>
                    <td>15%</td>
                    <td>5-7%</td>
                    <td>5-7%</td>
                  </tr>

                  <tr className="color-change">
                    <th scope="row">Delivered Medication</th>
                    <td>
                      <img src={correct} alt="correct" />
                    </td>
                    <td></td>
                    <td></td>
                  </tr>

                  <tr>
                    <th scope="row">No Insurance Required</th>
                    <td>
                      <img src={correct} alt="correct" />
                    </td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr className="color-change">
                    <th scope="row">24/7 Clinical Support</th>
                    <td>
                      <img src={correct} alt="correct" />
                    </td>
                    <td></td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
              <div className="text-center">
              <button className="weightlose-btn table-btn">GET STARTED</button>
              </div>
             
          </div>
        </div>
      </section>
    </>
  );
};
