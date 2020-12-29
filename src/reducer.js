export const initialState = {
  services: [],
  user: null
};

const reducer = (state, action) => {
  
	//console.log("REDUCER>>>",action);
  
	switch (action.type) {
    case "ADD_SERVICES":
		return {
        ...state,
        services:[...state.services, action.service],
	};
    
    case "SET_USER":
      return {
        ...state,
        user: action.user
      };
	
    default:
      return state;
  }
};

export default reducer;