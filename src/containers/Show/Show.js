/* eslint-disable */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getShow } from '../../redux/actions/index';

class Show extends Component {
  componentDidMount() {
    document.body.className = 'posts show';
  }

  componentWillMount() {
    this.props.getShow(this.props.match.params.id);
  }

  componentWillUnmount() {
    document.body.className = '';
  }

  render() {
    const {
      name, type, language, summary,
    } = this.props._show;

    return (
      <div className="show">
        <h3 className="name">{name}</h3>
        <div className="body">
          <p>
            Language:
            {language}
          </p>
          <p>{type}</p>
          <p>{summary}</p>
        </div>
      </div>
    );
  }
}
Show.propTypes = {
  params: PropTypes.object,
};

const mapStateToProps = state => ({
  _show: state.shows.show,
});
export default connect(mapStateToProps, {
  getShow,
})(Show);
