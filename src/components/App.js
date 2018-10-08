import React, {Component, PropTypes} from "react";
import Header from "./common/Header";
import {connect} from "react-redux";

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Header loading={this.props.loading}/>
        {this.props.children}
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    loading: state.ajaxCallsInProgress > 0
  };
}

App.propTypes = {
  children: PropTypes.object.isRequired,
  loading: PropTypes.bool
};

export default connect(mapStateToProps)(App);
