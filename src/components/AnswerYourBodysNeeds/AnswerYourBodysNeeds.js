import React from "react";
import "../../scss/answeryourbodysneeds.scss";
import BodyNeeds1 from "./bodyneeds1.jpg";
import BodyNeeds2Top from "./bodyneeds2-top.jpg";
import BodyNeeds2Bottom from "./bodyneeds2-bottom.jpg";
class AnswerYourBodysNeeds extends React.Component {
  render() {
    return (
      <div className="Answer_Your_Body_Needs___container row">
        <div className="col-md-6 col-lg-6 col-xl-4">
          <img
            className="Body_Needs___Top-image"
            src={BodyNeeds1}
            alt="Body Needs"
          />
        </div>
        <div className="col-md-6 col-lg-6 col-xl-4">
          <div className="text-left">
            <img
              className="Body_Needs_Two___Top"
              src={BodyNeeds2Top}
              alt="Body Needs"
            />
          </div>
          <div className="text-left">
            <img
              className="Body_Needs_Two___Bottom"
              src={BodyNeeds2Bottom}
              alt="Body Needs"
            />
          </div>
        </div>
        <div className="col-md-12 col-lg-12 col-xl-4">
          <div className="Body_Needs_Information___Top text-left">
            <h2 className="Body_Needs_Information___Title">
              ANSWER YOUR BODY'S NEEDS
            </h2>
            <p className="Body_Needs_Information___Text">
              The way ingredients are sourced affects the way we nourish our
              bodies. Author Mark Schatzer believes our body naturally develops
              an appetite for the foods and nutrients it needs to be healthy,
              but that artifical flavourings are getting in the way. This can be
              reversed by focusing on high-quality ingredients and being mindful
              as your appetite guides you to consume according to your body's
              needs.
            </p>
          </div>
          <div className="Body_Needs_Three___Bottom text-left">
            <h3 className="Body_Needs_Three___Bottom_title">Be Mindful</h3>
            <section className="Body_Needs_Three___Bottom_Text">
              Sourcing local or organic food is a good way to start being more
              mindful about what your cooking and eating.
            </section>
          </div>
        </div>
      </div>
    );
  }
}

export default AnswerYourBodysNeeds;
