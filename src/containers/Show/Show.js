import React, { Component } from 'react';
import { connect } from 'react-redux';
import {getShow} from '../../redux/actions/index';
import PropTypes from 'prop-types';

class Show extends Component {
    componentDidMount() {
        document.body.className = 'posts show'
    }
    componentWillMount() {
        this.props.getShow(this.props.match.params.id)
    }    
    componentWillUnmount() {
        document.body.className = ''
    }
    render() {
        const { name, type, language, image, rating, summary } = this.props._show

        return (
        <>
            <div></div>
            <p>{name}</p>
        </>
        )
    }
}
Show.propTypes = {
    params: PropTypes.object.isRequired
}

const mapStateToProps = state => {
    return {
        _show: state.shows.show, 
    }
}
export default connect(mapStateToProps, { 
    getShow,
})(Show);