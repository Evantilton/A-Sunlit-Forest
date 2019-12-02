// Used to store the database information returned from the server


const storeEverything = (state = {}, action) => {
  switch (action.type) {
    case 'STORE_GET_EVERYTHING':
      return action.payload[0];
    case 'GATHER_SUNLIGHT':
      return { ...state, resource_sunlight_reveal: true, resource_sunlight: state.resource_sunlight + state.click_gather_sunlight };
    case 'GATHER_SUNLIGHT_MAX':
      return { ...state, upgrade_bark_reveal: true, resource_sunlight: state.resource_sunlight_max }
    case 'BUY_SAP':
      return { ...state, resource_sap: state.resource_sap + 1, resource_sunlight: (state.resource_sunlight) - (state.resource_sap_cost) };
    case 'REVEAL_CHLOROPHYLL':
      return { ...state, upgrade_chlorophyll_reveal: true, resource_sap_reveal: true };
    case 'UPGRADE_CHLOROPHYLL':
      return { ...state, resource_sap: state.resource_sap - state.upgrade_chlorophyll_cost, upgrade_roots_reveal: true, upgrade_chlorophyll: state.upgrade_chlorophyll + 1, click_gather_sunlight: state.click_gather_sunlight + 1,  upgrade_chlorophyll_cost: state.upgrade_chlorophyll_cost +2};
    case 'UPGRADE_ROOTS':
      return { ...state, resource_population_reveal: true, resource_population: state.resource_population + action.payload, resource_sap: state.resource_sap - state.upgrade_roots_cost, upgrade_roots: state.upgrade_roots + 1, upgrade_roots_cost: state.upgrade_roots_cost + 1 };
    case 'UPGRADE_BARK':
      return { ...state, resource_sunlight_max: state.resource_sunlight_max + 100, resource_sap: state.resource_sap - (state.upgrade_bark_cost), upgrade_bark: state.upgrade_bark + 1, upgrade_bark_cost: state.upgrade_bark_cost + 1 }
    case 'TREE_FARM':
      return { ...state, resource_sunlight: ((state.resource_sunlight) + (state.resource_population * .5) + (state.resource_farmer * 5)) - (state.resource_treefolk * 2) };
    case 'TREE_FARM_MIN':
      return { ...state, resource_sunlight: 0 };
    case 'GET_SOIL':
      return { ...state, resource_soil_reveal: true, resource_soil: state.resource_soil + (state.resource_gardener * 1) };
    case 'SOIL_MAX':
      return { ...state, resource_soil: state.resource_soil_max };
    case 'RESEARCH':
      return { ...state, resource_science: state.resource_science + (state.resource_scientist * state.resource_scientist_modifier) }
    case 'RESEARCH_MAX':
      return { ...state, resource_science: state.resource_science_max }
    case 'RESOURCE_SUNSTONE':
      return { ...state, resource_sunstone_reveal: true, resource_sunstone: state.resource_sunstone + 1 };
    case 'BUY_TREEFOLK':
      return { ...state, resource_treefolk_reveal: true, resource_sunstone: state.resource_sunstone - 1, resource_treefolk_unassigned: state.resource_treefolk_unassigned + 4, resource_treefolk: state.resource_treefolk + 4 };
    case 'SUBTRACT_THINKER':
      return { ...state, resource_treefolk_unassigned: state.resource_treefolk_unassigned + 1, resource_scientist: state.resource_scientist - 1 };
    case 'ADD_THINKER':
      return { ...state, resource_treefolk_unassigned: state.resource_treefolk_unassigned - 1, resource_science_reveal: true, resource_scientist: state.resource_scientist + 1 };
    case 'SUBTRACT_FARMER':
      return { ...state, resource_treefolk_unassigned: state.resource_treefolk_unassigned + 1, resource_farmer: state.resource_farmer - 1 };
    case 'ADD_FARMER':
      return { ...state, resource_treefolk_unassigned: state.resource_treefolk_unassigned - 1, resource_farmer: state.resource_farmer + 1 };
    case 'SUBTRACT_GARDENER':
      return { ...state, resource_treefolk_unassigned: state.resource_treefolk_unassigned + 1, resource_gardener: state.resource_gardener - 1 };
    case 'ADD_GARDENER':
      return { ...state, resource_soil_reveal: true, resource_treefolk_unassigned: state.resource_treefolk_unassigned - 1, resource_gardener: state.resource_gardener + 1 };
    case 'SUBTRACT_EXPLORER':
      return { ...state, resource_treefolk_unassigned: state.resource_treefolk_unassigned + 1, resource_explorer: state.resource_explorer - 1 };
    case 'ADD_EXPLORER':
      return { ...state, resource_treefolk_unassigned: state.resource_treefolk_unassigned - 1, resource_explorer: state.resource_explorer + 1 };
    case 'TAB_PRODUCTION_SHOW':
      return { ...state, tab_production_show: true, tab_research_show: false, tab_garden_show: false, tab_population_show: false, tab_exploration_show: false }
    case 'TAB_RESEARCH_SHOW':
      return { ...state, tab_production_show: false, tab_research_show: true, tab_garden_show: false, tab_population_show: false, tab_exploration_show: false }
    case 'TAB_GARDEN_SHOW':
      return { ...state, tab_production_show: false, tab_research_show: false, tab_garden_show: true, tab_population_show: false, tab_exploration_show: false }
    case 'TAB_OCCUPATION_SHOW':
      return { ...state, tab_production_show: false, tab_research_show: false, tab_garden_show: false, tab_population_show: true, tab_exploration_show: false }
    case 'TAB_EXPLORATION_SHOW':
      return { ...state, tab_production_show: false, tab_research_show: false, tab_garden_show: false, tab_population_show: false, tab_exploration_show: true }
    case 'BUY_GARDEN_BUSH':
      return { ...state, resource_sap_max: state.resource_sap_max + 10, resource_soil: state.resource_soil - (state.garden_bush_cost), garden_bush_cost: state.garden_bush_cost + 1 }
    case 'BUY_GARDEN_FERN':
      return { ...state, resource_science_max: state.resource_science_max + 10, resource_soil: state.resource_soil - (state.garden_fern_cost), garden_bush_cost: state.garden_fern_cost + 1 }
    case 'BUY_GARDEN_FLOWER':
      return { ...state, resource_sunlight_max: state.resource_sunlight_max + 10, resource_soil: state.resource_soil - (state.garden_flower_cost), garden_bush_cost: state.garden_flower_cost + 1 }
    case 'RESEARCH_IRRIGATION':
      return { ...state, resource_farmer_reveal: true, resource_science: state.resource_science - state.research_irrigation_cost, research_irrigation: true}
    case 'RESEARCH_HORTICULTURE':
      return { ...state, resource_gardener_reveal: true, resource_science: state.resource_science - state.research_horticulture_cost, research_horticulture: true}
    case 'RESEARCH_MATHEMATICS':
      return { ...state, resource_science: state.resource_science - state.research_mathematics_cost, research_mathematics: true}
    case 'EXPEDITION':
      return {...state, exploration_reveal: true}
    case 'RESEARCH_MOBILITY':
      return { ...state, resource_explorer_reveal: true, resource_science: state.resource_science - state.research_mobility_cost, research_mobility: true}
    case 'EXPLORE':
      return {...state, exploration_forest: state.exploration_forest +1, exploration_reveal: false, expedition_timer: 0}
    case 'EXPEDITION':
      return {...state, exploration_reveal: true}
    case 'EXPLORE_TIMER':
      return {...state, expedition_timer: state.expedition_timer + state.resource_explorer}
    case 'CHANGE_SEASON_WINTER':
      return { ...state, season: 1, year: state.year + 1 }
    case 'CHANGE_SEASON_SPRING':
      return { ...state, season: 2 }
    case 'CHANGE_SEASON_SUMMER':
      return { ...state, season: 3 }
    case 'CHANGE_SEASON_FALL':
      return { ...state, season: 4 }
    default:
      return state;
  }
}
// user will be on the redux state at:
// state.user
export default storeEverything;
