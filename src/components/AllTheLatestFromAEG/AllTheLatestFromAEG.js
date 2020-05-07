import React from "react";
import { SRLWrapper } from "simple-react-lightbox"; // Import SRLWrapper

// SASS
import "../../scss/allthelatestfromaeg.scss";
//Images
import AEGLatest1 from "./AEG-latest1.jpg";
import AEGLatest2 from "./AEG-latest2.jpg";
import AEGLatest3 from "./AEG-latest3.jpg";

const options = {
  overlayColor: "rgba(0, 0, 0, 0.9)",
  captionColor: "#ffffff",
  captionFontFamily: "Raleway, sans-serif",
  captionFontSize: "22px",
  captionFontWeight: "300",
  captionFontStyle: "capitalize",
  buttonsBackgroundColor: "#000000",
  buttonsIconColor: "#e6e6e6",
  autoplaySpeed: 1500,
  transitionSpeed: 900,
  showThumbnails: false,
  enablePanzoom: false,
};

class AllTheLatestFromAEG extends React.Component {
  handleEventOne = event => {
    console.log("Summer Lunch Menu by Mark Best clicked");
  };
  handleEventTwo = event => {
    console.log("A Traditional Christmas Eve, Mark Best Style clicked");
  };
  handleEventThree = event => {
    console.log("Taking Taste Further clicked");
  };

  render() {
    return (
      <div className="all_the_latest_from_AEG___container row">
        <div className="col-md-12">
          <h1 className="latest___heading">ALL THE LATEST FROM AEG</h1>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4">
          <div className="latest_post___container">
            <SRLWrapper options={options}>
              <img
                className="latest_img___top latest_img___hover"
                src={AEGLatest1}
                alt="Summer lunch menu by Mark Best"
                data-attribute="SRL"
              />
            </SRLWrapper>

            <div className="latest___body">
              <h5 className="latest___title">Summer Lunch Menu by Mark Best</h5>
              <p className="latest___text">
                AEG ambassador Mark Best's summer eats are guaranteed to help
                you make the most of the warmer weather and entertaining at
                home.
              </p>
            </div>

            <div className="latest___body">
              <button
                className="read_more___link"
                onClick={this.handleEventOne}
              >
                Read More
              </button>
            </div>
          </div>
        </div>

        <div className="col-sm-12 col-md-6 col-lg-4">
          <div className="latest_post___container">
            <SRLWrapper options={options}>
              <img
                className="latest_img___top latest_img___hover"
                src={AEGLatest2}
                alt="A Traditional Christmas Eve, Mark Best Style"
                data-attribute="SRL"
              />
            </SRLWrapper>
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
              <button
                className="read_more___link"
                onClick={this.handleEventTwo}
              >
                Read More
              </button>
            </div>
          </div>
        </div>

        <div className="col-sm-12 col-md-6 col-lg-4">
          <div className="latest_post___container">
            <SRLWrapper options={options}>
              <img
                className="latest_img___top latest_img___hover"
                src={AEGLatest3}
                alt="Taking taste further"
                data-attribute="SRL"
              />
            </SRLWrapper>
            <div className="latest___body">
              <h5 className="latest___title">Taking Taste Further</h5>
              <p className="latest___text">
                This exclusive cook book gives you all the know-how you need.
                We've designed it to make sure you get the most out of our
                products - and the best out of your food.
              </p>
            </div>

            <div className="latest___body">
              <button
                className="read_more___link"
                onClick={this.handleEventThree}
              >
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AllTheLatestFromAEG;
