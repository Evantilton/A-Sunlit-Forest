import React, { Component } from 'react';

import { connect } from 'react-redux';
import Production from './Production/Production'
import Research from './Research/Research';
import Garden from './Garden/Garden';
class Tabs extends Component {
//this component did mount will run a number of functions, 
//many are needed for when they are unlocked, they run once per second
    componentDidMount() {
        setInterval(() => {
            this.treeFarm();
            this.research();
        }, 1000);

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
        } else if ((this.props.storeEverything.resource_science > this.props.storeEverything.resource_science_max)) {
            this.props.dispatch({ type: 'RESEARCH_MAX'})
        }
    }

    //Click on tabs to show information
    productionShow = () => {
        this.props.dispatch({ type: 'TAB_PRODUCTION_SHOW'})
    }
    researchShow = () => {
        this.props.dispatch({ type: 'TAB_RESEARCH_SHOW'})
    }
    gardenShow = () => {
        this.props.dispatch({ type: 'TAB_GARDEN_SHOW'})
    }
    
    //conditional render tabs
    displayResearchTab = () => {
        if (this.props.storeEverything.resource_science_reveal) {
            console.log(this.state)
            return <td><span class="tabSpan" onClick={() => this.researchShow()}>Research - </span></td>
        }
    }
    displayGardenTab = () => {
        if (this.props.storeEverything.resource_science_reveal) {
            console.log(this.state)
            return <td><span class="tabSpan" onClick={() => this.gardenShow()}>Garden - </span></td>
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
                        <table> <td><span class="tabSpan" onClick={() => this.productionShow()} >Production - </span></td> {this.displayResearchTab()} {this.displayGardenTab()} </table> </div>
                    
                    <Production/>
                    <Research/>
                    <Garden/>
                </div>
            </>
        );
    };
};
const mapReduxStateToProps = (reduxState) => {
    return reduxState;
}

export default connect(mapReduxStateToProps)(Tabs);