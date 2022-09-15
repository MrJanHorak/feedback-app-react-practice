import { useState } from "react";
import Header from "./components/Header";
import FeedbackItem from "./components/FeedbackItem";
import PropTypes from "prop-types";

function App() {
  const [feedback, setFeedback] = useState()
  return (
    <>
      <Header />
      <div className="container">
        <FeedbackItem />
      </div>
    </>
  );
}


Header.defaultProps = {
  text: "Feedback UI",
  bgColor: 'rgba(0,0,0,0.4)',
  textColor: '#ff6a9'
};

Header.propTypes = {
  text: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
};
export default App;
