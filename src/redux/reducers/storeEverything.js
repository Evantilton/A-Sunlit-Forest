// Used to store the database information returned from the server


const storeEverything = (state = {}, action) => {
  switch (action.type) {
    case 'STORE_GET_EVERYTHING':
      return action.payload[0];
    case 'GATHER_SUNLIGHT':
      return {...state,resource_sunlight: state.resource_sunlight+action.payload};
    case 'GATHER_SUNLIGHT_MAX':
      return{...state, resource_sunlight: state.resource_sunlight_max}
    case 'BUY_SAP':
      return {...state,resource_sap: state.resource_sap+1, resource_sunlight: state.resource_sunlight - state.resource_sap_price};
    default:
      return state;
  }
}
// user will be on the redux state at:
// state.user
export default storeEverything;
