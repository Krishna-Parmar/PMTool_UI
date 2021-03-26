import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createProject } from "../../actions/projectActions";
import classnames from "classnames";
import { getAllDeveloper } from "../../actions/userActions";
import { Multiselect } from "multiselect-react-dropdown";

class AddProject extends Component {
  constructor() {
    super();

    this.state = {
      projectName: "",
      projectIdentifier: "",
      description: "",
      start_date: "",
      end_date: "",
      members: [],
      errors: {},
    };

    this.style = {
      searchBox: {
        border: "none",
        "border-radius": "5px",
        "font-size": "20px",
        background: "white",
        "min-height": "50px",
      },
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onSelect = this.onSelect.bind(this);
  }

  componentDidMount() {
    const {org_name}=this.props.match.params
    this.props.getAllDeveloper(org_name);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSelect(SelectedList, SelectedItem) {
    this.setState({ members: SelectedItem });
    this.setState({ members: SelectedList });
  }

  onSubmit(e) {
    e.preventDefault();
    const newProject = {
      projectName: this.state.projectName,
      projectIdentifier: this.state.projectIdentifier,
      description: this.state.description,
      start_date: this.state.start_date,
      end_date: this.state.end_date,
      members: this.state.members,
    };
    this.props.createProject(newProject, this.props.history);
  }

  render() {
    const { errors } = this.state;
    const { developers } = this.props.developers;

    return (
      <div>
        <div className="project">
          <div className="container">
            <div className="row">
              <div className="col-md-8 m-auto">
                <h5 className="display-4 text-center">Create Project form</h5>
                <hr />
                <form onSubmit={this.onSubmit}>
                  <div className="form-group">
                    <input
                      type="text"
                      className={classnames("form-control form-control-lg", {
                        "is-invalid": errors.projectName,
                      })}
                      placeholder="Project Name"
                      name="projectName"
                      value={this.state.projectName}
                      onChange={this.onChange}
                    />
                    {errors.projectName && (
                      <div className="invalid-feedback">
                        {errors.projectName}
                      </div>
                    )}
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className={classnames("form-control form-control-lg", {
                        "is-invalid": errors.projectIdentifier,
                      })}
                      placeholder="Unique Project ID"
                      name="projectIdentifier"
                      value={this.state.projectIdentifier}
                      onChange={this.onChange}
                    />
                    {errors.projectIdentifier && (
                      <div className="invalid-feedback">
                        {errors.projectIdentifier}
                      </div>
                    )}
                  </div>
                  <div className="form-group">
                    <textarea
                      className={classnames("form-control form-control-lg", {
                        "is-invalid": errors.description,
                      })}
                      placeholder="Project Description"
                      name="description"
                      value={this.state.description}
                      onChange={this.onChange}
                    />
                    {errors.description && (
                      <div className="invalid-feedback">
                        {errors.description}
                      </div>
                    )}
                  </div>
                  <div>
                    <Multiselect
                      options={developers}
                      selectedValues={this.state.members}
                      placeholder="choose members"
                      onSelect={this.onSelect}
                      onChange={this.onChange}
                      displayValue="fullName"
                      style={this.style}
                    />
                  </div>
                  <p></p>
                  <h6>Start Date</h6>
                  <div className="form-group">
                    <input
                      type="date"
                      className={classnames("form-control form-control-lg", {
                        "is-invalid": errors.start_date,
                      })}
                      name="start_date"
                      value={this.state.start_date}
                      onChange={this.onChange}
                    />
                    {errors.start_date && (
                      <div className="invalid-feedback">
                        {errors.start_date}
                      </div>
                    )}
                  </div>
                  <h6>Estimated End Date</h6>
                  <div className="form-group">
                    <input
                      type="date"
                      className={classnames("form-control form-control-lg", {
                        "is-invalid": errors.end_date,
                      })}
                      name="end_date"
                      value={this.state.end_date}
                      onChange={this.onChange}
                    />
                    {errors.end_date && (
                      <div className="invalid-feedback">
                        {errors.end_date}
                      </div>
                    )}
                  </div>

                  <input
                    type="submit"
                    className="btn btn-info btn-block mt-4"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

AddProject.propTypes = {
  createProject: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  getAllDeveloper: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  errors: state.errors,
  developers: state.developers,
});

export default connect(mapStateToProps, { createProject, getAllDeveloper })(
  AddProject
);
