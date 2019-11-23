import React, { Component } from 'react';

import { connect } from 'react-redux';

class Tabs extends Component {
//this component did mount will run a number of functions, 
//many are needed for when they are unlocked, they run once per second
    componentDidMount() {
        setInterval(() => {
            this.treeFarm();
            this.gatherSunlight();
            this.treeFarm();
            this.research();
        }, 1000);

    }
    //local state for conditional renders of mouseovers
    //yes, this is ugly incredibly ineligant coding, 
    //this will need to be refactored eventually
    state = {
        displaySunlight: false,
        displayRoots: false,
        displayChlorophyll: false,
        displayProduction: true,
        displayResearch: false,
        displayCrafting: false,
        displayIrrigation: false,
        displayHorticulture: false,
        displayMobility: false,
        displayMathematics: false,
    }
    //auto functions that run onmount//
    treeFarm = () => {
        if (this.props.storeEverything.resource_sunlight >= this.props.storeEverything.resource_sunlight_max) {
            this.props.dispatch({ type: 'GATHER_SUNLIGHT_MAX', payload: this.props.storeEverything.resource_sunlight_max })
        } else if ((this.props.storeEverything.resource_sunlight + (this.props.storeEverything.resource_population * .5) > this.props.storeEverything.resource_sunlight_max)) {
            this.props.dispatch({ type: 'GATHER_SUNLIGHT_MAX', payload: this.props.storeEverything.resource_sunlight_max })
        }
        else if (this.props.storeEverything.resource_population > 0) {
            console.log("IN TREEFARM")
            this.props.dispatch({ type: 'TREE_FARM' })
        }
    }
    research = () => {
        if ((this.props.storeEverything.resource_scientist > 0) && (this.props.storeEverything.resource_science < this.props.storeEverything.resource_science_max)) {
            this.props.dispatch({ type: 'RESEARCH' })
        }
    }
    //Logic for buttons in Production Subtab
    gatherSunlight = () => {
        console.log("gathering Sunlight")
        if (this.props.storeEverything.resource_sunlight >= this.props.storeEverything.resource_sunlight_max) {
            this.props.dispatch({ type: 'GATHER_SUNLIGHT_MAX', payload: this.props.storeEverything.resource_sunlight_max })

        } else if ((this.props.storeEverything.upgrade_chlorophyll_reveal === false) && (this.props.storeEverything.resource_sunlight > 99)) {
            this.props.dispatch({ type: 'REVEAL_CHLOROPHYLL' })
        } else
            this.props.dispatch({ type: 'GATHER_SUNLIGHT', payload: this.props.storeEverything.click_gather_sunlight })
    }

    upgradeRoots = () => {
        console.log("upgrading Roots")

        // if (this.props.storeEverything.resource_sap >= this.props.storeEverything.upgrade_roots_cost) {

        this.props.dispatch({ type: 'UPGRADE_ROOTS', payload: (Math.floor(Math.random() * (7 - 1)) + 1) })
        // } 
        if (this.props.storeEverything.upgrade_roots === 0) {
            this.props.dispatch({
                type: 'TEXT',
                payload: this.props.storeEverything.upgrade_roots_flavor_text_one
            })
        } else if (this.props.storeEverything.upgrade_roots === 1) {
            this.props.dispatch({
                type: 'TEXT',
                payload: this.props.storeEverything.upgrade_roots_flavor_text_two
            })
        } else if (this.props.storeEverything.upgrade_roots === 2) {
            this.props.dispatch({
                type: 'TEXT',
                payload: this.props.storeEverything.upgrade_roots_flavor_text_three
            })
        } else if (this.props.storeEverything.upgrade_roots >= 3 && this.props.storeEverything.resource_sunstone_reveal === false) {
            this.props.dispatch({
                type: 'TEXT',
                payload: this.props.storeEverything.upgrade_roots_flavor_text_four
            });
            this.props.dispatch({ type: 'RESOURCE_SUNSTONE' });
            this.props.dispatch({
                type: 'TEXT',
                payload: this.props.storeEverything.resource_sunstone_flavor_text_one
            });
        } else {
            this.props.dispatch({
                type: 'TEXT',
                payload: this.props.storeEverything.upgrade_roots_flavor_text_one
            })
        }
    }

    upgradeChlorophyll = () => {
        if (this.props.storeEverything.resource_sap >= this.props.storeEverything.upgrade_chlorophyll_cost) {
            this.props.dispatch({ type: 'UPGRADE_CHLOROPHYLL' })
        }
    }
    // Logic for buttons in Research Subtab
    buyIrrigation = () => {
        console.log("buying irrigation")
    }

    buyHorticulture = () => {
        console.log("buying horticulture")
    }
    buyMathematics = () => {
        console.log("buying Mathematics")
    }
    buyMobility = () => {
        console.log("buying Mathematics")
    }
    //conditional displays Production Subtab//
    displayChlorophyll = () => {
        if (this.props.storeEverything.upgrade_chlorophyll_reveal) {
            return <span class="span" onClick={this.upgradeChlorophyll}
                onMouseOver={this.chlorophyllMouseOver} onMouseOut={this.chlorophyllMouseOver}> Chlorophyll Infusion</span>
        };
    }

    displayRoots = () => {
        if (this.props.storeEverything.upgrade_roots_reveal) {
            return <span class="span" onClick={this.upgradeRoots}
                onMouseOver={this.rootsMouseOver} onMouseOut={this.rootsMouseOver}>
                Expand Roots</span>
        };
    }
    //PRODUCTION MOUSEOVERS
    sunlightMouseOver = () => {
        this.setState({
            displaySunlight: !this.state.displaySunlight,
            displayRoots: false,
            displayChlorophyll: false,
        })
    }
    rootsMouseOver = () => {
        this.setState({
            displaySunlight: false,
            displayRoots: !this.state.displayRoots,
            displayChlorophyll: false,
        })
    }
    chlorophyllMouseOver = () => {
        this.setState({
            displaySunlight: false,
            displayRoots: false,
            displayChlorophyll: !this.state.displayChlorophyll,
        })
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
    //DISPLAY TEXT ON MOUSEOVERS
    displaySunlightText = () => {
        if (this.state.displaySunlight) {
            return <span class="floatSpan">
               
                <p>Spread your leaves and gather sunlight.</p>
                
                <p class="flavor">tasty!</p>

            </span>
        }
    }
    displayRootsText = () => {
        if (this.state.displayRoots) {
            return <span class="floatSpan">
                <h1> Root Expansion</h1>
                <p>Connects you to the trees around you.</p>
                
                <p>Level: {this.props.storeEverything.upgrade_roots}</p>
                <p>Sap Cost: {this.props.storeEverything.upgrade_roots_cost}</p>
                <p>Effect: The trees in your colony provide passive sunlight generation.</p>
                <p class="flavor">Deep roots are not reached by the frost.</p>
            </span>
        }
    }
    displayChlorophyllText = () => {
        if (this.state.displayChlorophyll) {
            return <span class="floatSpan">
                <h1> Chlorophyll Infusion</h1>
                <p>Greener is better.</p>
                
                <p>Level: {this.props.storeEverything.upgrade_chlorophyll}</p>
                <p>Sap Cost: {this.props.storeEverything.upgrade_chlorophyll_cost}</p>
                <p>Effect: increase your per click sunlight generation.</p>
                <p class="flavor">What is a trees favorite color? green.</p>
            </span>
        }
    }
    //Research Display Text on mouseover
    displayIrrigationText = () => {
        if (this.state.displayIrrigation) {
            return <span class="floatSpan">
                <h1>Research: Irrigation</h1>
                <p>The study of efficient watering methods</p>
                <p>cost: 100 research</p>
                <p>Effects: +.5% population growth</p>
                <p class="flavor">*gulp *gulp</p>
            </span>
        }
    }
    displayHornicultureText = () => {
        if (this.state.displayHorticulture) {
            return <span class="floatSpan">
                <h1>Research: Horniculture</h1>
                <p>Lets grow a garden!</p>
                <p>cost: 100 research</p>
                <p>Effects: unlocks Garden</p>
                <p class="flavor">Happy little trees</p>
            </span>
        }
    }
    displayMathematicsText = () => {
        if (this.state.displayMathematics) {
            return <span class="floatSpan">
               <h1>Research: Mathematics</h1>
                <p>One Tree, Two Tree, Three Tree, Four</p>
                <p>cost: 100 research</p>
                <p>Effects: displays per second resource generation</p>
                <p class="flavor">At what number do trees become a forest?</p>

            </span>
        }
    }
    displayMobilityText = () => {
        if (this.state.displayMobility) {
            return <span class="floatSpan">
                <h1>Research: Mobility</h1>
                <p>Learn how to uproot yourself.</p>
                <p>cost: 100 Research </p>
                <p> Effects: Unlocks Explorer</p>
                <p class="flavor">Freeeeeeeeeddddooomm</p>
            </span>
        }
    }
    //Click on tabs to show information
    productionShow = () => {
        this.setState({
            displayProduction: true,
            displayResearch: false,

        })
    }
    researchShow = () => {
        console.log(this.state)
        this.setState({
            displayProduction: false,
            displayResearch: true,

        })
    }
    //conditional render tabs
    displayResearchTab = () => {
        if (this.props.storeEverything.resource_science_reveal) {
            console.log(this.state)
            return <td><span class="tabSpan" onClick={() => this.researchShow()}>Research - </span></td>
        }
    }

    //Sub tabs display information//
    displayProduction = () => {
        if (this.state.displayProduction) {
            return <div>
                <table>
                    <tr>
                        <span class="span" onClick={this.gatherSunlight}
                            onMouseOver={this.sunlightMouseOver} onMouseOut={this.sunlightMouseOver}>
                            Gather Sunlight </span>
                    </tr>
                    <tr>
                        {this.displayRoots()}
                    </tr>
                    <tr>
                        {this.displayChlorophyll()}
                    </tr>
                </table>
                {this.displaySunlightText()}
                {this.displayRootsText()}
                {this.displayChlorophyllText()}
            </div>
        }
    }
    displayResearch = () => {
        if (this.state.displayResearch) {
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
                <div className="column" id="middle-container">
                    <div className="bigTab">
                        <span class="tabSpan">A Sunlit Forest </span>
                    </div>
                    <div className="smallTab">
                        <table> <td><span class="tabSpan" onClick={() => this.productionShow()} >Production - </span></td> {this.displayResearchTab()} </table> </div>
                    {this.displayProduction()}
                    {this.displayResearch()}

                </div>
            </>
        );
    };
};
const mapReduxStateToProps = (reduxState) => {
    return reduxState;
}

export default connect(mapReduxStateToProps)(Tabs);