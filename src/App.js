import Header from "./components/Header";
import PropTypes from "prop-types";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <h1>my app</h1>
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
