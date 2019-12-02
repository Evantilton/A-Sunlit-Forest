import React, { Component } from 'react';

import { connect } from 'react-redux';

class Production extends Component {
    componentDidMount() {
        setInterval(() => {
            this.gatherSunlight();
        }, 300);

    }
    state = {
        displaySunlight: false,
        displayRoots: false,
        displayChlorophyll: false,
        displayBark: false,
    }

    //Logic for buttons in Production Subtab
    gatherSunlight = () => {

        console.log("gathering Sunlight")
        if (this.props.storeEverything.resource_sunlight >= this.props.storeEverything.resource_sunlight_max) {
            this.props.dispatch({ type: 'GATHER_SUNLIGHT_MAX', payload: this.props.storeEverything.resource_sunlight_max })
            
        } else if ((this.props.storeEverything.resource_sunlight_reveal === false))  {
            this.props.dispatch({ type: 'GATHER_SUNLIGHT' });
            this.props.dispatch({type: 'TEXT', payload: this.props.storeEverything.resource_sunlight_text })
        } 
        else if ((this.props.storeEverything.upgrade_chlorophyll_reveal === false) && (this.props.storeEverything.resource_sunlight > 99)) {
            this.props.dispatch({ type: 'REVEAL_CHLOROPHYLL' })
            this.props.dispatch({type: 'TEXT', payload: this.props.storeEverything.resource_sap_text });
            this.props.dispatch({type: 'TEXT', payload: this.props.storeEverything.upgrade_chlorophyll_text});
        } else
            this.props.dispatch({ type: 'GATHER_SUNLIGHT', payload: this.props.storeEverything.click_gather_sunlight })
    }

    upgradeRoots = () => {
        console.log("upgrading Roots")

        if (this.props.storeEverything.resource_sap >= this.props.storeEverything.upgrade_roots_cost) {

            this.props.dispatch({ type: 'UPGRADE_ROOTS', payload: (Math.floor(Math.random() * (7 - 1)) + 1) })
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
    }

    upgradeChlorophyll = () => {
        if (this.props.storeEverything.upgrade_roots_reveal === false) {
            this.props.dispatch({ type: 'UPGRADE_CHLOROPHYLL' });
            this.props.dispatch({type: 'TEXT', payload: this.props.storeEverything.upgrade_roots_text})
        }
        else if (this.props.storeEverything.resource_sap >= this.props.storeEverything.upgrade_chlorophyll_cost) {
            this.props.dispatch({ type: 'UPGRADE_CHLOROPHYLL' })
        }
    }

    upgradeBark = () => {
        if (this.props.storeEverything.resource_sap >= this.props.storeEverything.upgrade_bark_cost) {
            this.props.dispatch({ type: 'UPGRADE_BARK' })
        }
    }

    //conditional displays Production Subtab//

    displayRoots = () => {
        if (this.props.storeEverything.upgrade_roots_reveal) {
            return <span class="span" onClick={this.upgradeRoots}
                onMouseOver={this.rootsMouseOver} onMouseOut={this.rootsMouseOver}>
                Deeper Roots</span>
        };
    }

    displayChlorophyll = () => {
        if (this.props.storeEverything.upgrade_chlorophyll_reveal) {
            return <span class="span" onClick={this.upgradeChlorophyll}
                onMouseOver={this.chlorophyllMouseOver} onMouseOut={this.chlorophyllMouseOver}> Greener Leaves</span>
        };
    }


    displayBark = () => {
        if (this.props.storeEverything.upgrade_bark_reveal) {
            return <span class="span" onClick={this.upgradeBark}
                onMouseOver={this.barkMouseOver} onMouseOut={this.barkMouseOver}>
                Thicker Bark</span>
        };
    }
    //PRODUCTION MOUSEOVERS
    sunlightMouseOver = () => {
        this.setState({
            displaySunlight: !this.state.displaySunlight,
            displayRoots: false,
            displayChlorophyll: false,
            displayBark: false,
        })
    }
    rootsMouseOver = () => {
        this.setState({
            displaySunlight: false,
            displayRoots: !this.state.displayRoots,
            displayChlorophyll: false,
            displayBark: false,
        })
    }
    chlorophyllMouseOver = () => {
        this.setState({
            displaySunlight: false,
            displayRoots: false,
            displayChlorophyll: !this.state.displayChlorophyll,
            displayBark: false,
        })
    }
    barkMouseOver = () => {
        this.setState({
            displaySunlight: false,
            displayRoots: false,
            displayChlorophyll: false,
            displayBark: !this.state.displayBark,
        })
    }
    //DISPLAY TEXT ON MOUSEOVERS
    displaySunlightText = () => {
        if (this.state.displaySunlight) {
            return <span class="floatSpan">

                <p>Spread your leaves and gather sunlight.</p>


            </span>
        }
    }
    displayRootsText = () => {
        if (this.state.displayRoots) {
            return <span class="floatSpan">
                <h1> Deeper Roots</h1>
                <p>Connects you to the trees around you.</p>
                <p>Level: {this.props.storeEverything.upgrade_roots}</p>
                <p>Sap Cost: {this.props.storeEverything.upgrade_roots_cost}</p>
                <p>Effect: The trees in your colony provide passive sunlight generation.</p>
            </span>
        }
    }
    displayChlorophyllText = () => {
        if (this.state.displayChlorophyll) {
            return <span class="floatSpan">
                <h1> Greener Leaves</h1>
                <p>Greener leaves take in more sunlight.</p>

                <p>Level: {this.props.storeEverything.upgrade_chlorophyll}</p>
                <p>Sap Cost: {this.props.storeEverything.upgrade_chlorophyll_cost}</p>
                <p>Effect: increase your per click sunlight generation.</p>
            </span>
        }
    }
    displayBarkText = () => {
        if (this.state.displayBark) {
            return <span class="floatSpan">
                <h1> Thicken Bark</h1>
                <p>More bark holds more sunlight.</p>

                <p>Level: {this.props.storeEverything.upgrade_bark}</p>
                <p>Sap Cost: {this.props.storeEverything.upgrade_bark_cost}</p>
                <p>Effect: increase sunlight storage.</p>
            </span>
        }
    }


    //Sub tabs main render//
    displayProduction = () => {
        if (this.props.storeEverything.tab_production_show) {
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
                    <tr>
                        {this.displayBark()}
                    </tr>
                </table>
                {this.displaySunlightText()}
                {this.displayRootsText()}
                {this.displayChlorophyllText()}
                {this.displayBarkText()}
            </div>
        }
    }


    render() {

        return (
            <>
                <div>
                    {this.displayProduction()}
                </div>
            </>
        );
    };
};
const mapReduxStateToProps = (reduxState) => {
    return reduxState;
}

export default connect(mapReduxStateToProps)(Production);