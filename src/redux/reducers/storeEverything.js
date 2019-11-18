// Used to store the database information returned from the server


const storeEverything = (state = {}, action) => {
  switch (action.type) {
    case 'STORE_GET_EVERYTHING':
      return action.payload[0];
    case 'GATHER_SUNLIGHT':
      return {...state,resource_sunlight: state.resource_sunlight+action.payload};
    default:
      return state;
  }
}
// user will be on the redux state at:
// state.user
export default storeEverything;
