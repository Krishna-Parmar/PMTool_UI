import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteProject } from "../../actions/projectActions";

class ProjectItem extends Component {
  onDeleteClick = (id) => {
    this.props.deleteProject(id);
  };

  render() {
    const { project } = this.props;
    const { user } = this.props.security;
    const { organizationName } = this.props.security.user
    return (
      <div className="container">
        <div className="card card-body bg-light mb-3">
          <div className="row">
            <div className="col-2">
              <span className="mx-auto" style={{ fontFamily: "fantasy" }}>
                {project.projectIdentifier}
              </span>
            </div>
            <div className="col-lg-6 col-md-4 col-8">
              <h2>{project.projectName}</h2>
              <p>Description: {project.description}</p>
              <p></p>
              <p></p>
              <p>Created :{project.created_At}</p>
            </div>
            <div className="col-md-4 d-none d-lg-block">
              <ul className="list-group ">
                <Link to={`/projectBoard/${project.projectIdentifier}`}>
                  <li className="list-group-item list-group-item-success board">
                    <i className="fa fa-flag-checkered pr-1"> Project Board </i>
                  </li>
                </Link>
                {user.role == "MANAGER" ? (
                  <Link to={`/updateProject/${project.projectIdentifier}/${organizationName}`}>
                    <li className="list-group-item list-group-item-info update">
                      <i className="fa fa-edit pr-1"> Update Project Info</i>
                    </li>
                  </Link>
                ) : (
                  <Link to="">
                    <li
                      className="list-group-item list-group-item-info update"
                      onClick={notAllowedUpdate}
                    >
                      <i className="fa fa-edit pr-1"> Update Project Info</i>
                    </li>
                  </Link>
                )}
                {user.role == "MANAGER" ? (
                  <li
                    className="list-group-item list-group-item-danger delete"
                    onClick={this.onDeleteClick.bind(
                      this,
                      project.projectIdentifier
                    )}
                  >
                    <i className="fa fa-minus-circle pr-1"> Delete Project</i>
                  </li>
                ) : (
                  <li
                    className="list-group-item list-group-item-danger delete"
                    onClick={notAllowedDelete}
                  >
                    <i className="fa fa-minus-circle pr-1"> Delete Project</i>
                  </li>
                )}
              </ul>
            </div>
          </div>
          </div>
        </div>
    );
  }
}
function notAllowedDelete() {
  alert("You are not allowed to delete a project!");
}
function notAllowedUpdate() {
  alert("You are not allowed to update a project!");
}

ProjectItem.propTypes = {
  deleteProject: PropTypes.func.isRequired,
  security: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  security: state.security,
});
export default connect(mapStateToProps, { deleteProject })(ProjectItem);
