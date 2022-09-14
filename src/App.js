import Header from "./components/Header";
import PropTypes from "prop-types";

function App() {
  return (
    <>
      <Header text="hello world" />
      <div className="container">
        <h1>my app</h1>
      </div>
    </>
  );
}


Header.defaultProps = {
  text: "Feedback UI",
};

Header.propTypes = {
  text: PropTypes.string,
};
export default App;
