export const initialState = {
  digimonList: [],
  team: [],
  loading: false,
  error: null
};

// action is an object that contains all the information necessary to update the state
// payload = the data being passed to the state
export const digimonReducer = (state, action) => {
  switch (action.type) {
    case "SET_LIST":
      return {
        ...state,
        digimonList: action.payload,
        loading: false
      };
    case "ADD_TO_TEAM":
      if (state.team.find(d => d.id === action.payload.id))
        return state;
      return {
        ...state,
        team: [...state.team, action.payload]
      };
    case "REMOVE_FROM_TEAM":
      return {
        ...state,
        team: state.team.filter(d => d.id !== action.payload)
      };
    case "SET_LOADING":
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};