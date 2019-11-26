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
      return { ...state, upgrade_chlorophyll_reveal: true, upgrade_roots_reveal: true, resource_sap_reveal: true };
    case 'UPGRADE_CHLOROPHYLL':
      return { ...state, upgrade_chlorophyll: state.upgrade_chlorophyll + 1, click_gather_sunlight: state.click_gather_sunlight + 1, upgrade_chlorophyll_cost: state.upgrade_chlorophyll_cost * 1.2 };
    case 'UPGRADE_ROOTS':
      return { ...state, resource_population_reveal: true, resource_population: state.resource_population + action.payload, upgrade_roots: state.upgrade_roots + 1, upgrade_roots_cost: state.upgrade_roots_cost + 1 };
    case 'TREE_FARM':
      return { ...state, resource_sunlight: state.resource_sunlight + (state.resource_population * .5) };
    case 'RESOURCE_SUNSTONE':
      return { ...state, resource_sunstone_reveal: true, resource_sunstone: state.resource_sunstone + 1 };
    case 'BUY_TREEFOLK':
      return { ...state, resource_treefolk_reveal: true, resource_sunstone: state.resource_sunstone - 1, resource_treefolk_unassigned: state.resource_treefolk_unassigned + 1, resource_treefolk: state.resource_treefolk + 1 };
    case 'SUBTRACT_THINKER':
      return { ...state, resource_treefolk_unassigned: state.resource_treefolk_unassigned + 1, resource_scientist: state.resource_scientist - 1 };
    case 'ADD_THINKER':
      return { ...state, resource_treefolk_unassigned: state.resource_treefolk_unassigned - 1, resource_science_reveal: true, resource_scientist: state.resource_scientist + 1 };
    case 'RESEARCH':
      return { ...state, resource_science: state.resource_science + (state.resource_scientist * state.resource_scientist_modifier) }
    case 'RESEARCH_MAX':
      return { ...state, resource_science: state.resource_science_max }
    case 'CHANGE_SEASON_WINTER':
      return { ...state, season: 1, year: state.year + 1 }
    case 'CHANGE_SEASON_SPRING':
      return { ...state, season: 2 }
    case 'CHANGE_SEASON_SUMMER':
      return { ...state, season: 3 }
    case 'CHANGE_SEASON_FALL':
      return { ...state, season: 4 }
    case 'SUBTRACT_FARMER':
      return { ...state, resource_treefolk_unassigned: state.resource_treefolk_unassigned + 1, resource_farmer: state.resource_farmer - 1 };
    case 'ADD_FARMER':
      return { ...state, resource_treefolk_unassigned: state.resource_treefolk_unassigned - 1, resource_farmer: state.resource_farmer + 1 };
    case 'TAB_PRODUCTION_SHOW':
      return { ...state, tab_production_show: true, tab_research_show: false, tab_garden_show: false, tab_population_show: false, tab_exploration_show: false }
    case 'TAB_RESEARCH_SHOW':
      return { ...state, tab_production_show: false, tab_research_show: true, tab_garden_show: false, tab_population_show: false, tab_exploration_show: false }
    case 'TAB_GARDEN_SHOW':
      return { ...state, tab_production_show: false, tab_research_show: false, tab_garden_show: true, tab_population_show: false, tab_exploration_show: false }
    default:
      return state;
  }
}
// user will be on the redux state at:
// state.user
export default storeEverything;
