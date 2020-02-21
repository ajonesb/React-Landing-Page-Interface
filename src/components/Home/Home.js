import React from "react";

// Home Components for Layout
import AnswerYourBodysNeeds from "../AnswerYourBodysNeeds/AnswerYourBodysNeeds";
import AllTheLatestFromAEG from "../AllTheLatestFromAEG/AllTheLatestFromAEG";

class Home extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <AnswerYourBodysNeeds />;
        <AllTheLatestFromAEG />
      </div>
    );
  }
}

export default Home;
