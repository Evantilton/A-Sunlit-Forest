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
                <h1>Research: Farming</h1>
                <p>The study of efficient sunfarming</p>
                <p>cost: 100 science</p>
                <p>Effects: unlocks farmer</p>
            </span>
        }
    }
    displayHornicultureText = () => {
        if (this.state.displayHorticulture) {
            return <span class="floatSpan">
                <h1>Research: Gardening</h1>
                <p>Lets grow a garden!</p>
                <p>cost: 100 science</p>
                <p>Effects: unlocks Garden</p>
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

            </span>
        }
    }
    displayMobilityText = () => {
        if (this.state.displayMobility) {
            return <span class="floatSpan">
                <h1>Research: Uprooting</h1>
                <p>Learn how to move.</p>
                <p>cost: 100 science </p>
                <p> Effects: Unlocks Explorer</p>
            </span>
        }
    }

    displayUprooting = () => {
        if ((this.props.storeEverything.resource_science_reveal === true) && (this.props.storeEverything.research_mobility === false)) {
            return <span class="span" onClick={this.buyMobility}
                onMouseOver={this.mobilityMouseOver} onMouseOut={this.mobilityMouseOver}>
                Uprooting </span>
        } if ((this.props.storeEverything.resource_science_reveal === true) && (this.props.storeEverything.research_mobility === true)) {
            return <span class="span" onClick={this.buyMobility}
                onMouseOver={this.mobilityMouseOver} onMouseOut={this.mobilityMouseOver}>
                Uprooting (researched)</span>
        }
    }

    displayGardening = () => {
        if ((this.props.storeEverything.research_irrigation === true) && (this.props.storeEverything.research_horticulture === false)) {
            return <span class="span" onClick={this.buyHorticulture}
                onMouseOver={this.horticultureMouseOver} onMouseOut={this.horticultureMouseOver}>
                Gardening </span>
        } else if ((this.props.storeEverything.research_irrigation === true) && (this.props.storeEverything.research_horticulture === true)) {
            return <span class="span" onClick={this.buyHorticulture}
                onMouseOver={this.horticultureMouseOver} onMouseOut={this.horticultureMouseOver}>
                Gardening (researched) </span>
        }
    }

    displayMathematics = () => {
        if ((this.props.storeEverything.resource_science_reveal === true) && (this.props.research_mathematics === false))  {
            return <span class="span" onClick={this.buyMathematics}
                onMouseOver={this.mathematicsMouseOver} onMouseOut={this.mathematicsMouseOver}>
                Mathematics </span>
        } else if ((this.props.storeEverything.resource_science_reveal === true) && (this.props.storeEverything.research_mathematics === true)) {
            return <span class="span" onClick={this.buyMathematics}
                onMouseOver={this.mathematicsMouseOver} onMouseOut={this.mathematicsMouseOver}>
                Mathematics (researched) </span>
        }
    }
    displayIrrigation = () => {
        if ((this.props.storeEverything.resource_science_reveal === true) && (this.props.storeEverything.research_irrigation === false)) {
            return <span class="span" onClick={this.buyIrrigation}
                onMouseOver={this.irrigationMouseOver} onMouseOut={this.irrigationMouseOver}>
                Farming </span>
        } else if ((this.props.storeEverything.resource_science_reveal === true) && (this.props.storeEverything.research_irrigation === true)) {
            return <span class="span" onClick={this.buyIrrigation}
                onMouseOver={this.irrigationMouseOver} onMouseOut={this.irrigationMouseOver}>
                Farming (researched) </span>
        }
    }

    displayResearch = () => {
        if (this.props.storeEverything.tab_research_show) {
            return <div>
                <table>
                    <tr>{this.displayIrrigation()}</tr>
                    <tr> {this.displayMathematics()} </tr>
                    <tr> {this.displayGardening()} </tr>
                    <tr> {this.displayUprooting()}</tr>
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