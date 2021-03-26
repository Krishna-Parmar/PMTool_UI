import React, { Component } from 'react'
import {Link} from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class CreateProjectButton extends Component {
  render() {
  const { organizationName } = this.props.security.user
    return (
        <Link to={`/AddProject/${organizationName}`} className="btn btn-lg btn-info" >
        Create a Project
      </Link>
    )
}
}
CreateProjectButton.propTypes = {
 security: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  security: state.security,
});

export default connect(mapStateToProps)(CreateProjectButton);

