import React from 'react';
import './NumDisplay.scss';
import { connect } from 'react-redux';

const NumDisplay = props => (
    <section className='num-display'>
        <h1>total: { props.currentTotal }</h1>
    </section>
)

const mapStateToProps = reduxState => {
    return {
        currentTotal: reduxState.total
    }
}

export default connect(mapStateToProps)(NumDisplay);