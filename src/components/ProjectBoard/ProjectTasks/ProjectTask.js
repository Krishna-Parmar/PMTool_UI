import React, { Component } from "react";
import { Link } from "react-router-dom";
import { deleteProjectTask } from "../../../actions/backlogActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class ProjectTask extends Component {
  onDeleteClick(backlog_id, pt_id) {
    this.props.deleteProjectTask(backlog_id, pt_id);
  }
  render() {
    const { project_task } = this.props;
    const { user } = this.props.security;
    let priorityString;
    let priorityClass;

    if (project_task.priority === 1) {
      priorityClass = "bg-danger text-light";
      priorityString = "HIGH";
    }

    if (project_task.priority === 2) {
      priorityClass = "bg-warning text-light";
      priorityString = "MEDIUM";
    }

    if (project_task.priority === 3) {
      priorityClass = "bg-info text-light";
      priorityString = "LOW";
    }

    return (
      <div className="card-spacing">
      <div className="card mb-1 bg-light">
        <div className={`card-header text-primary ${priorityClass}`}>
        
          ID: {project_task.projectSequence} -- Priority: {priorityString}
        </div>
        <div className="card-body bg-light">
          <h5 className="card-title">{project_task.summary}</h5>
          <p className="card-text text-truncate ">
            {project_task.acceptanceCriteria}
          </p>
          <Link
          to={`/updateProjectTask/${project_task.projectIdentifier}/${
            project_task.projectSequence
          }`}
          className="btn btn-primary"
        >
            View / Update
          </Link>
          {user.role == "MANAGER" ? (

          <button
          className="btn btn-danger ml-4"
          onClick={this.onDeleteClick.bind(
            this,
            project_task.projectIdentifier,
            project_task.projectSequence
          )}
        >
          Delete
        </button>):(<button
          className="btn btn-danger ml-4"
          onClick={notAllowedDelete}
        >
          Delete
        </button>)}
        </div>
        
        <h7 style={{ fontFamily: "monospace"}}>Updated At:{project_task.update_At} by:{project_task.updatedBy}</h7>
      </div>
      </div>
    );
  }
}
function notAllowedDelete() {
  alert("You are not Authorized to delete a Project Task!");
}
const mapStateToProps = (state) => ({
  security: state.security,
});
ProjectTask.propTypes = {
  deleteProjectTask: PropTypes.func.isRequired,
  security: PropTypes.object.isRequired
};
export default connect(
  mapStateToProps,
  { deleteProjectTask }
)(ProjectTask);