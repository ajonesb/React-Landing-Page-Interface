import React from "react";
// SASS
import "../../scss/allthelatestfromaeg.scss";
//Images
import AEGLatest1 from "./AEG-latest1.jpg";
import AEGLatest2 from "./AEG-latest2.jpg";
import AEGLatest3 from "./AEG-latest3.jpg";

class AllTheLatestFromAEG extends React.Component {
  render() {
    return (
      <div className="all_the_latest_from_AEG___container row">
        <div className="col-md-12">
          <h1 className="latest___heading">ALL THE LATEST FROM AEG</h1>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4">
          <div className="latest_post___container">
            <img
              className="latest_img___top latest_img___hover"
              src={AEGLatest1}
              alt="Summer lunch menu by Mark Best"
            />
            <div className="latest___body">
              <h5 className="latest___title">Summer Lunch Menu by Mark Best</h5>
              <p className="latest___text">
                AEG ambassador Mark Best's summer eats are guaranteed to help
                you make the most of the warmer weather and entertaining at
                home.
              </p>
            </div>

            <div className="latest___body">
              <a href="#" className="read_more___link">
                latest link
              </a>
            </div>
          </div>
        </div>

        <div className="col-sm-12 col-md-6 col-lg-4">
          <div className="latest_post___container">
            <img
              className="latest_img___top latest_img___hover"
              src={AEGLatest2}
              alt="A traditional Christmas Eve, Mark Best Style"
            />
            <div className="latest___body">
              <h5 className="latest___title">
                A traditional Christmas Eve, Mark Best Style
              </h5>
              <p className="latest___text">
                One of Australia's best chiefs and AEG ambassador, Mark Best,
                shares his favourite Christmas eve menu which is sure to impress
                your guests.
              </p>
            </div>

            <div className="latest___body">
              <a href="#" className="read_more___link">
                latest link
              </a>
            </div>
          </div>
        </div>

        <div className="col-sm-12 col-md-6 col-lg-4">
          <div className="latest_post___container">
            <img
              className="latest_img___top latest_img___hover"
              src={AEGLatest3}
              alt="Taking taste further"
            />
            <div className="latest___body">
              <h5 className="latest___title">Taking Taste Further</h5>
              <p className="latest___text">
                This exclusive cook book gives you all the know-how you need.
                We've designed it to make sure you get the most out of our
                products - and the best out of your food.
              </p>
            </div>

            <div className="latest___body">
              <a href="#" className="read_more___link">
                latest link
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AllTheLatestFromAEG;
