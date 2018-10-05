import React, {Component, PropTypes} from "react";

class CoursePage extends Component {
  render() {
    return (
      <div>
        <h1>Courses</h1>
      </div>
    );
  }
}

CoursePage.propTypes = {
  children: PropTypes.object.isRequired
};

export default CoursePage;
