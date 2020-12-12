import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getShows, changeFilter } from '../../redux/actions/index';
import NetworkFilter from '../../components/Filter/Filter';
import './shows.css';

class Shows extends Component {
  componentDidMount() {
    const { getShows } = this.props;
    getShows();
  }

  render() {
    const { shows, filter, changeFilter } = this.props;
    const filteredshows = (filter !== 'All') ? shows.filter(show => show.type.toString() === filter) : shows;

    return (
      <>
        <div className="banner">
          <NetworkFilter changeFilter={changeFilter} />
        </div>
        <div className="card-columns">
          {
            filteredshows.map(show => (
              <div className="card" key={show.id}>
                <a href={`/show/${show.id}`}>
                  <img className="card-img-top" src={show.image.medium} alt="Thumb" />
                </a>
              </div>
            ))
          }
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
