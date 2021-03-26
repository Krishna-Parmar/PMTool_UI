import React, { Component } from "react";
import ProjectItem from "./Project/ProjectItem";
import CreateProjectButton from "./Project/CreateProjectButton";
import { connect } from "react-redux";
import { getProjects } from "../actions/projectActions";
import PropTypes from "prop-types";

class Dashboard extends Component {
  componentDidMount() {
    this.props.getProjects();
  }

  render() {
    const { projects } = this.props.project;
    const { user } = this.props.security;

    return (
      <div className="projects">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-3 text-center">Projects</h1>
              <br />
              {user.role == "MANAGER" ? (
                <CreateProjectButton />
              ) : (
                <button className="btn btn-lg btn-info " onClick={notAllowedcreate}>
                  Create a Project
                </button>
              )}

              <br />
              <hr />
              
              {projects.map((project) => (
                <ProjectItem key={project.id} project={project} />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
function notAllowedcreate() {
  alert("You are not Authorized to create a project!");
}
Dashboard.propTypes = {
  project: PropTypes.object.isRequired,
  getProjects: PropTypes.func.isRequired,
  security: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  project: state.project,
  security: state.security,
});

export default connect(mapStateToProps, { getProjects })(Dashboard);
