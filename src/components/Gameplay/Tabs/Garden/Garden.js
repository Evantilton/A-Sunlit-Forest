import React, { Component } from 'react';

import { connect } from 'react-redux';

class Garden extends Component {
    state = {
        displayBush: false,
        displayFern: false,
        displayFlower: false,
    }

    // Logic for buttons in Research Subtab
    buyBush = () => {
        if (this.props.storeEverything.resource_soil > this.props.storeEverything.garden_bush_cost) {
            this.props.dispatch({ type: 'BUY_GARDEN_BUSH' })
        }
    }
    buyFern = () => {
        console.log("buying fern");
        if (this.props.storeEverything.resource_soil > this.props.storeEverything.garden_fern_cost) {
            this.props.dispatch({ type: 'BUY_GARDEN_FERN' })
        }
    }
    buyFlower = () => {
        console.log("buying flower");
        if (this.props.storeEverything.resource_soil > this.props.storeEverything.garden_flower_cost) {
            this.props.dispatch({ type: 'BUY_GARDEN_FLOWER' })
        }
    }
    //research mouseover
    bushMouseOver = () => {
        this.setState({
            displayBush: !this.state.displayBush,
            displayFern: false,
            displayFlower: false,
        })
    }
    fernMouseOver = () => {
        this.setState({
            displayBush: false,
            displayFern: !this.state.displayFern,
            displayFlower: false,
        })
    }
    flowerMouseOver = () => {
        this.setState({
            displayBush: false,
            displayFern: false,
            displayFlower: !this.state.displayFlower,
        })
    }

    //Research Display Text on mouseover
    displayBushText = () => {
        if (this.state.displayBush) {
            return <span class="floatSpan">
                <h1>Sap Bush</h1>
                <p>This bush is efficient and storing sap.</p>
                <p>cost: Soil {this.props.storeEverything.garden_bush_cost}</p>
                <p>Effects: +10 sap storage</p>
                <p class="flavor">flavor text</p>
            </span>
        }
    }
    displayFernText = () => {
        if (this.state.displayFern) {
            return <span class="floatSpan">
                <h1>Delicate Fern</h1>
                <p>Hivemind, ferns help process ideas.</p>
                <p>cost: Soil {this.props.storeEverything.garden_fern_cost}</p>
                <p>Effects: +10 research storage</p>
                <p class="flavor">Quick to grow, quick to learn</p>
            </span>
        }
    }
    displayFlowerText = () => {
        if (this.state.displayFlower) {
            return <span class="floatSpan">
                <h1>Mountain Flower</h1>
                <p>Each holds a little bit of sunlight.</p>
                <p>cost: Soil {this.props.storeEverything.garden_fern_cost}</p>
                <p>Effects: +10 to sunlight storage.</p>
                <p class="flavor">Praise the sun!</p>

            </span>
        }
    }






    displayGarden = () => {
        if (this.props.storeEverything.tab_garden_show) {
            return <div>
                <table>
                    <tr><span class="span" onClick={this.buyBush}
                        onMouseOver={this.bushMouseOver} onMouseOut={this.bushMouseOver}>
                        Sap Bush </span></tr>
                    <tr><span class="span" onClick={this.buyFern}
                        onMouseOver={this.fernMouseOver} onMouseOut={this.fernMouseOver}>
                        Delicate Fern </span> </tr>
                    <tr><span class="span" onClick={this.buyFlower}
                        onMouseOver={this.flowerMouseOver} onMouseOut={this.flowerMouseOver}>
                        Mountain Flower </span> </tr>

                </table>
                {this.displayBushText()}
                {this.displayFernText()}
                {this.displayFlowerText()}

            </div>
        }
    }

    render() {

        return (
            <>
                <div>
                    {this.displayGarden()}
                </div>
            </>
        );
    };
};
const mapReduxStateToProps = (reduxState) => {
    return reduxState;
}

export default connect(mapReduxStateToProps)(Garden);