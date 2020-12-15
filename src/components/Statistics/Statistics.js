import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Statistics.css';

export default class Statistics extends Component {

    static defaultProps = {
        good: 0,
        neutral: 0,
        bad: 0,
        total:0,
        positivePercentage:0
    }

    static propTypes = {
        good: PropTypes.number.isRequired,
        neutral:  PropTypes.number.isRequired,
        bad: PropTypes.number.isRequired,
        total: PropTypes.number.isRequired,
        positivePercentage: PropTypes.number.isRequired
    }

    render(){
        const {good, neutral, bad, total, positivePercentage} = this.props;
        return(
            <div>
                <ul className="statistics">
                    <li><span>Good</span>: {good}</li>
                    <li><span>Neutral</span>: {neutral}</li>
                    <li><span>bad</span>: {bad}</li>
                    <li><span>Total</span>: {total}</li>
                    <li><span>Positive feedback</span>: {positivePercentage}%</li>
                </ul>
            </div>
        );
    }

}