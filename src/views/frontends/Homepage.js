import PropTypes from "prop-types";
import { useEffect } from "react";
import { connect } from "react-redux";
import Topnav from "../../components/Topnav";

// import { actionName } from '../../actions/someAction.actions';

function HomePage(props) {
  /* eslint-disable */
  useEffect(() => {
    console.log("Home Page");
  }, []);
  /* eslint-enable */

  return (
    <>
      <Topnav />
      <div className="App">
        <header className="App-header">
          <p>HomePage</p>
        </header>
      </div>
    </>
  );
}

HomePage.defaultProps = {};
HomePage.propTypes = {
  // processName: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {
  // processName: actionName
})(HomePage);
