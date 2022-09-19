import { useState } from "react";
import Header from "./components/Header";
import FeedBackList from "./components/FeedBackList";
import FeedBackData from "./data/FeedBackData";
import PropTypes from "prop-types";

function App() {
  const [feedback, setFeedback] = useState(FeedBackData);

  const deleteFeedback = (id) => {
    if(window.confirm('Are you sure you want to delete?')){
      setFeedback(feedback.filter((item)=> item.id !==id));
    }
  };
  return (
    <>
      <Header />
      <div className="container">
        <FeedBackList feedback={feedback} handleDelete={deleteFeedback} />
      </div>
    </>
  );
}

Header.defaultProps = {
  text: "Feedback UI",
  bgColor: "rgba(0,0,0,0.4)",
  textColor: "#ff6a9",
};

Header.propTypes = {
  text: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
};
export default App;
