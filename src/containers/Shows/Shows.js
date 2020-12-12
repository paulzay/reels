import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getShows } from '../../redux/actions/index';
import NetworkFilter from '../../components/Filter/Filter';

class Shows extends Component{
  componentDidMount() {
    const { getShows } = this.props;
    getShows();
  }

  render() {
    const { shows, filter, changeFilter } = this.props;
    // const filteredshows = (filter !== 'All') ? shows.filter(show => show.network.name.toString() === filter) : shows;

    return (
      <>
        <div className="banner">
          <NetworkFilter changeFilter={changeFilter} />
        </div>
        <div className="card-columns">
          {
            shows.map(show => (
              <div className="card" key={show.id}>
                <a href={`/show/${show.id}`}>
                  <img className="card-img-top" src={show.image.original} alt="Thumb" />
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
  shows: PropTypes.array.isRequired,
  getShows: PropTypes.func.isRequired,
  changeFilter: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  shows: state.shows.shows,
});

const mapDispatchToProps = dispatch => ({
  getShows: () => dispatch(getShows()),
});

export default connect(mapStateToProps,mapDispatchToProps)(Shows);
