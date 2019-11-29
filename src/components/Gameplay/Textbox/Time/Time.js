import React, { Component } from 'react';

import { connect } from 'react-redux';

class Time extends Component {
    componentDidMount() {
        
        setInterval(() => {
            this.timeFunction();
        }, 50000);
    }
//Timefunction handles the month and year changes
timeFunction = () => {
      if (this.props.storeEverything.season === 4) {
            this.props.dispatch({ type: 'CHANGE_SEASON_WINTER', payload: this.props.storeEverything.season_winter_modifier});
            this.props.dispatch({ type: 'TEXT', payload: this.props.storeEverything.season_winter_text_flavor});
        } else if (this.props.storeEverything.season === 3) {
            this.props.dispatch({ type: 'CHANGE_SEASON_FALL', payload: this.props.storeEverything.season_fall_modifier});
            this.props.dispatch({ type: 'TEXT', payload: this.props.storeEverything.season_fall_text_flavor});
        } else if (this.props.storeEverything.season === 2) {
            this.props.dispatch({ type: 'CHANGE_SEASON_SUMMER', payload: this.props.storeEverything.season_summer_modifier});
            this.props.dispatch({ type: 'TEXT', payload: this.props.storeEverything.season_summer_text_flavor});
        } else if (this.props.storeEverything.season === 1) {
            this.props.dispatch({ type: 'CHANGE_SEASON_SPRING', payload: this.props.storeEverything.season_spring_modifier});
            this.props.dispatch({ type: 'TEXT', payload: this.props.storeEverything.season_spring_text_flavor});
        }
}

//
displaySeason = () => {
    if (this.props.storeEverything.season === 1) {
        return <div> <p>{this.props.storeEverything.season_winter_text_name}</p> </div>
     } else if (this.props.storeEverything.season === 2) {
        return <div> <p>{this.props.storeEverything.season_spring_text_name}</p> </div>
     } else if (this.props.storeEverything.season === 3) {
        return <div> <p>{this.props.storeEverything.season_summer_text_name}</p> </div>
     } else if (this.props.storeEverything.season === 4) {
        return <div> <p>{this.props.storeEverything.season_fall_text_name}</p> </div>
     }
 }
    render() {

        return (
            <>
            <div id="time">
            {this.displaySeason()}
            
            <p>Current Year: {this.props.storeEverything.year}</p>
            {/* <p>TEST: CURRENT MOD: {this.props.storeEverything.resource_sunlight_modifier}</p> */}
            </div>     
            </>
        );
    };
};
const mapReduxStateToProps = (reduxState) => {
    return reduxState;
}
export default connect(mapReduxStateToProps)(Time);