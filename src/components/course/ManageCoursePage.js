import React, {Component, PropTypes} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as courseActions from "../../actions/courseActions";
import CourseForm from "./CourseForm";

class ManageCoursePage extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      course: Object.assign({}, props.course),
      errors: {}
    };
  }

  render() {
    return (
      <div>
        <h1>Manage Course</h1>
        <CourseForm allAuthors={[]} course={this.state.course} errors={this.state.errors}/>
      </div>
    );
  }
}

ManageCoursePage.PropTypes = {
  course: PropTypes.object.isRequired
};


function mapStateToProps(state, ownProps) {
  let course = {id: '', watchRef: '', title: '', authorId: '', length: '', category: ''};
  return {
    course: course
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
