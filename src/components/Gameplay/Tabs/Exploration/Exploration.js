import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as d3 from "d3";


class Exploration extends Component {

    componentDidMount() {
        setInterval(() => {
            this.expeditionTimer();
        }, 2000);
    }

    sendExpedition = () => {
        console.log("on an expedition");
        if ((this.props.storeEverything.exploration_reveal === false) && (this.props.storeEverything.resource_explorer > 0)) {
            this.props.dispatch({ type: 'TEXT', payload: this.props.storeEverything.text_eleven });
            this.props.dispatch({ type: 'EXPEDITION' });
        }
        // if (this.props.storeEverything.tab_exploration_show) {
        //     console.log("I love expeditions");
        //     this.props.dispatch({ type: 'EXPLORE' });

        // }
    }

    expeditionTimer() {
        if ((this.props.storeEverything.exploration_reveal === true) && (this.props.storeEverything.expedition_timer < this.props.storeEverything.expedition_timer_max)) {
            this.props.dispatch({ type: 'EXPLORE_TIMER' });
        } else if ((this.props.storeEverything.exploration_reveal === true) && (this.props.storeEverything.expedition_timer >= this.props.storeEverything.expedition_timer_max)) {
            this.props.dispatch({ type: 'EXPLORE' });
        }
    }
    expedition() {
        if ((this.props.storeEverything.exploration_reveal === true)) {
            return <span className="resource">On Expedition</span>
        } else if ((this.props.storeEverything.exploration_reveal === false)) {
           return  <button onClick={() => this.sendExpedition()}>send expedition</button>
        }
    }
    displayExploration = () => {
        if (this.props.storeEverything.tab_exploration_show) {

            return <div> <table>
                <tr><span className='resource'>Area explored: {this.props.storeEverything.exploration_forest}/100</span></tr>
                <tr>{this.expedition()}</tr>
                <tr>{this.props.storeEverything.expedition_timer}/{this.props.storeEverything.expedition_timer_max}</tr>
                <tr><span className='resource'><figure class="waffle"></figure></span></tr>
            </table>

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