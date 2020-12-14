/* eslint-disable  */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getShow } from '../../redux/actions/index';
import './show.css';

class Show extends Component {
  UNSAFE_componentWillMount() {
    this.props.getShow(this.props.match.params.id);
  }

  componentDidMount() {
    document.body.className = 'posts show';
  }

  componentWillUnmount() {
    document.body.className = '';
  }

  render() {
    const {
      name, type, language, status, runtime, premiered, image,
    } = this.props._show;

    return (
      <div className="yt">
        <img src={image && image.medium} alt="Thumb" />

        <div>
          <h3 className="name">{name}</h3>
          <p className="paras">
            Language:
            {language}
          </p>
          <p className="paras">
            Type:
            {type}
          </p>
          <p className="paras">
            Status
            {status}
          </p>
          <p className="paras">
            {' '}
            Runtime:
            {runtime}
          </p>
          <p className="paras">
            {' '}
            Runtime:
            {premiered}
          </p>
        </div>
      </div>
    );
  }
}
Show.propTypes = {
  params: PropTypes.object.isRequired,
  getShow: PropTypes.func.isRequired,
  _show: PropTypes.shape({
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    language: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    runtime: PropTypes.string.isRequired,
    premiered: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  match: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  _show: state.shows.show,
});
export default connect(mapStateToProps, {
  getShow,
})(Show);
