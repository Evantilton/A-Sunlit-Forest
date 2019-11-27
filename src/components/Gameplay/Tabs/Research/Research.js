import React, { Component } from 'react';

import { connect } from 'react-redux';

class Research extends Component {

    state = {
        displayIrrigation: false,
        displayHorticulture: false,
        displayMobility: false,
        displayMathematics: false,
    }

    // Logic for buttons in Research Subtab
    buyIrrigation = () => {
        console.log("buying irrigation")
        if ((this.props.storeEverything.resource_science >= this.props.storeEverything.research_irrigation_cost)) {
            this.props.dispatch({ type: 'RESEARCH_IRRIGATION' })
    }
}
    buyHorticulture = () => {
        console.log("buying horticulture");
        if ((this.props.storeEverything.resource_science >= this.props.storeEverything.research_horticulture_cost)) {
            this.props.dispatch({ type: 'RESEARCH_HORTICULTURE' })
    }
}
    buyMathematics = () => {
        console.log("buying Mathematics");
        if ((this.props.storeEverything.resource_science >= this.props.storeEverything.research_mathematics_cost)) {
            this.props.dispatch({ type: 'RESEARCH_MATHEMATICS' })
    }
}
    buyMobility = () => {
        console.log("buying Mobility");
        if ((this.props.storeEverything.resource_science >= this.props.storeEverything.research_mobility_cost)) {
            this.props.dispatch({ type: 'RESEARCH_MOBILITY' })
    }
}
    //research mouseover
    irrigationMouseOver = () => {
        this.setState({
            displayIrrigation: !this.state.displayIrrigation,
            displayHorticulture: false,
            displayMobility: false,
            displayMathematics: false,
        })
    }
    horticultureMouseOver = () => {
        this.setState({
            displayIrrigation: false,
            displayHorticulture: !this.state.displayHorticulture,
            displayMobility: false,
            displayMathematics: false,
        })
    }
    mobilityMouseOver = () => {
        this.setState({
            displayIrrigation: false,
            displayHorticulture: false,
            displayMobility: !this.state.displayMobility,
            displayMathematics: false,
        })
    }
    mathematicsMouseOver = () => {
        this.setState({
            displayIrrigation: false,
            displayHorticulture: false,
            displayMobility: false,
            displayMathematics: !this.state.displayMathematics,
        })
    }

    //Research Display Text on mouseover
    displayIrrigationText = () => {
        if (this.state.displayIrrigation) {
            return <span class="floatSpan">
                <h1>Research: Irrigation</h1>
                <p>The study of efficient watering methods</p>
                <p>cost: 100 science</p>
                <p>Effects: +.5% population growth</p>
        <p class="flavor">*gulp *gulp </p>
            </span>
        }
    }
    displayHornicultureText = () => {
        if (this.state.displayHorticulture)  {
            return <span class="floatSpan">
                <h1>Research: Horniculture</h1>
                <p>Lets grow a garden!</p>
                <p>cost: 100 science</p>
                <p>Effects: unlocks Garden</p>
                <p class="flavor">Happy little trees {this.props.storeEverything.research_horniculture}</p>
            </span>
        }
    }
    displayMathematicsText = () => {
        if (this.state.displayMathematics) {
            return <span class="floatSpan">
                <h1>Research: Mathematics</h1>
                <p>One Tree, Two Tree, Three Tree, Four</p>
                <p>cost: 100 science</p>
                <p>Effects: displays per second resource generation</p>
                <p class="flavor">At what number do trees become a forest? {this.props.storeEverything.research_mathematics}</p>

            </span>
        }
    }
    displayMobilityText = () => {
        if (this.state.displayMobility)  {
            return <span class="floatSpan">
                <h1>Research: Mobility</h1>
                <p>Learn how to uproot yourself.</p>
                <p>cost: 100 science </p>
                <p> Effects: Unlocks Explorer</p>
                <p class="flavor">Freeeeeeeeeddddooomm {this.props.storeEverything.research_mobility}</p>
            </span>
        }
    }



    displayResearch = () => {
        if (this.props.storeEverything.tab_research_show) {
            return <div>
                <table>
                    <tr><span class="span" onClick={this.buyIrrigation}
                        onMouseOver={this.irrigationMouseOver} onMouseOut={this.irrigationMouseOver}>
                        Irrigation </span></tr> 
                    <tr><span class="span" onClick={this.buyMathematics}
                        onMouseOver={this.mathematicsMouseOver} onMouseOut={this.mathematicsMouseOver}>
                        Mathematics </span> </tr>
                    <tr><span class="span" onClick={this.buyHorticulture}
                        onMouseOver={this.horticultureMouseOver} onMouseOut={this.horticultureMouseOver}>
                        Horticulture </span> </tr>
                    <tr><span class="span" onClick={this.buyMobility}
                        onMouseOver={this.mobilityMouseOver} onMouseOut={this.mobilityMouseOver}>
                        Mobility </span></tr>
                </table>
                {this.displayIrrigationText()}
                {this.displayMathematicsText()}
                {this.displayMobilityText()}
                {this.displayHornicultureText()}
            </div>
        }
    }


    render() {

        return (
            <>
                <div>
                    {this.displayResearch()}
                </div>
            </>
        );
    };
};
const mapReduxStateToProps = (reduxState) => {
    return reduxState;
}

export default connect(mapReduxStateToProps)(Research);