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
        <div className="show">
            <h3 className="title">{name}</h3>
            <div className="body">
        <p>Language:{language}</p>
        <p>{type}</p>
        <p className=""dangerouslySetInnerHTML={{__html: summary}}>
        </p>
                <p></p>
            </div>
        </div>
        )
    }
}
Show.propTypes = {
    params: PropTypes.object,
}

const mapStateToProps = state => {
    return {
        _show: state.shows.show, 
    }
}
export default connect(mapStateToProps, { 
    getShow,
})(Show);