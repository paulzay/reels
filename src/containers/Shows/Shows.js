/* eslint-disable */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Card, CardColumns, Spinner } from 'react-bootstrap';
import { getShows, changeFilter } from '../../redux/actions/index';
import NetworkFilter from '../../components/Filter/Filter';
// import { BoxLoading } from 'react-loadingg';
import './shows.css';

class Shows extends Component {
  componentDidMount() {
    const { getShows } = this.props;
    getShows();
  }

  render() {
    const { shows, filter, changeFilter } = this.props;
    const filteredshows = (filter !== 'All') ? shows.filter(show => show.type.toString() === filter) : shows;
    let results;
    if (this.props.shows) {
      results = filteredshows.map(show => (
        <Card className="card" key={show.id}>
          <a href={`/show/${show.id}`}>
            <img className="card-img-top" src={show.image.medium} alt="Thumb" />
          </a>
        </Card>
      ));
    } else if (this.props.shows.loading) {
      results = (
        <div>
          <Spinner />
        </div>
      );
    }
    return (
      <>

        <div className="banner">
          <NetworkFilter changeFilter={changeFilter} />
        </div>
        <div className="container">
          <CardColumns>
            {results}
          </CardColumns>
          <hr />
        </div>
      </>
    );
  }
}

Shows.propTypes = {
  shows: PropTypes.instanceOf(Array).isRequired,
  getShows: PropTypes.func.isRequired,
  changeFilter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  shows: state.shows.shows,
  filter: state.filter,
});

const mapDispatchToProps = dispatch => ({
  getShows: () => dispatch(getShows()),
  changeFilter: network => {
    dispatch(changeFilter(network));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Shows);
