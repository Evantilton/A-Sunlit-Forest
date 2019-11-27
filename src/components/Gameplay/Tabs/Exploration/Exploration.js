import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as d3 from "d3";


class Exploration extends Component {


    sendExpedition = () => {
        console.log("on an expedition");
        if (this.props.storeEverything.tab_exploration_show) {
            console.log("I love expeditions");
            this.props.dispatch({ type: 'EXPLORE' });
            
        }
    }

    displayExploration = () => {
        if (this.props.storeEverything.tab_exploration_show) {
            return <div>
                <p>Area explored: {this.props.storeEverything.exploration_forest}/100</p>
                <button onClick={() => this.sendExpedition()}>send expedition</button>
                <figure class="waffle"></figure>

            </div>
        }
    }


    render() {

        // Select your div
        const waffle = d3.select('.waffle');

        // Create an array with numbers 0 - 99
        const numbers = d3.range(100);

        waffle
            .selectAll('.block')
            .data(numbers)
            .enter()
            .append('div')
            .attr('class', 'block')
            .style('background-color', explored => (explored < this.props.storeEverything.exploration_forest ? '#2BA147' : '#CCCCCC'));

        // For each item in the array, add a div element
        // if the number is < 5, color it red, otherwise gray

        return (
            <>
                <div>
                    {this.displayExploration()}
                </div>
            </>
        );
    };
};
const mapReduxStateToProps = (reduxState) => {
    return reduxState;
}

export default connect(mapReduxStateToProps)(Exploration);