import React, { Component } from 'react';

import { connect } from 'react-redux';
import Production from './Production/Production'
import Research from './Research/Research';
import Garden from './Garden/Garden';
import Occupation from './Occupation/Occupation';
import Exploration from './Exploration/Exploration';
class Tabs extends Component {
    //this component did mount will run a number of functions, 
    //many are needed for when they are unlocked, they run once per second
    componentDidMount() {
        setInterval(() => {
            this.treeFarm();
            this.research();
            this.gardenerGetSoil();
        }, 1000);

    }

    //auto functions that run onmount//
    treeFarm = () => {
        // if (this.props.storeEverything.resource_sunlight >= this.props.storeEverything.resource_sunlight_max) {
        //     this.props.dispatch({ type: 'GATHER_SUNLIGHT_MAX', payload: this.props.storeEverything.resource_sunlight_max })
        // }
        if (((this.props.storeEverything.resource_sunlight) + (this.props.storeEverything.resource_population * .5) + (this.props.storeEverything.resource_farmer * 5)) - (this.props.storeEverything.resource_treefolk * 2) > this.props.storeEverything.resource_sunlight_max) {
            this.props.dispatch({ type: 'GATHER_SUNLIGHT_MAX', payload: this.props.storeEverything.resource_sunlight_max })
        } else if (((this.props.storeEverything.resource_sunlight) + (this.props.storeEverything.resource_population * .5) + (this.props.storeEverything.resource_farmer * 5)) - (this.props.storeEverything.resource_treefolk * 2) < 0) {
            console.log("IN TREEFARM MIN")
            this.props.dispatch({ type: 'TREE_FARM_MIN' })
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
            this.props.dispatch({ type: 'RESEARCH_MAX' })
        }
    }

    gardenerGetSoil = () => {
        
        
        if ((this.props.storeEverything.resource_soil > this.props.storeEverything.resource_soil_max)) {
            this.props.dispatch({ type: 'SOIL_MAX' })
        } else if ((this.props.storeEverything.resource_gardener > 0) && ((this.props.storeEverything.resource_soil + (this.props.storeEverything.resource_gardener * 1)) > this.props.storeEverything.resource_soil_max)) {
            this.props.dispatch({ type: 'SOIL_MAX' })
        } else if ((this.props.storeEverything.resource_gardener > 0) && (this.props.storeEverything.resource_soil < this.props.storeEverything.resource_soil_max)) {
            this.props.dispatch({ type: 'GET_SOIL' })
        }
    }
    //Click on tabs to show information
    productionShow = () => {
        this.props.dispatch({ type: 'TAB_PRODUCTION_SHOW' })
    }
    researchShow = () => {
        this.props.dispatch({ type: 'TAB_RESEARCH_SHOW' })
    }
    gardenShow = () => {
        this.props.dispatch({ type: 'TAB_GARDEN_SHOW' })
    }
    occupationShow = () => {
        this.props.dispatch({ type: 'TAB_OCCUPATION_SHOW' })
    }
    explorationShow = () => {
        this.props.dispatch({ type: 'TAB_EXPLORATION_SHOW' })
    }


    //conditional render tabs
    displayResearchTab = () => {
        if (this.props.storeEverything.resource_science_reveal) {
            return <td><span className="tabSpan" onClick={() => this.researchShow()}>Research </span></td>
        }
    }
    displayGardenTab = () => {
        if (this.props.storeEverything.research_horticulture) {
            return <td><span className="tabSpan" onClick={() => this.gardenShow()}>Garden </span></td>
        }
    }

    displayOccupationTab = () => {
        if (this.props.storeEverything.resource_treefolk_reveal) {
            return <td><span className="tabSpan" onClick={() => this.occupationShow()}>Occupation </span></td>
        }
    }
    displayExplorationTab = () => {
        //this one belowis the correct one, I just need to make sure it's working
        // if (this.props.storeEverything.resource_explorer_reveal) {
        if (this.props.storeEverything.research_mobility) {
            return <td><span className="tabSpan" onClick={() => this.explorationShow()}>Exploration </span></td>
        }
    }


    render() {

        return (
            <>
                <div className="column" id="middle-container">
                    <div className="bigTab">
                        <span className="tabSpan">A Sunlit Forest </span>
                    </div>
                    <div className="smallTab">
                        <table> <td><span className="tabSpan" onClick={() => this.productionShow()} >Production </span>
                        </td> {this.displayResearchTab()} {this.displayGardenTab()} {this.displayOccupationTab()} {this.displayExplorationTab()}</table> </div>

                    <Production />
                    <Research />
                    <Garden />
                    <Occupation />
                    <Exploration />
                </div>
            </>
        );
    };
};
const mapReduxStateToProps = (reduxState) => {
    return reduxState;
}

export default connect(mapReduxStateToProps)(Tabs);