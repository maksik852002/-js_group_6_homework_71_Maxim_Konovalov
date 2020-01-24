import {
  DISH_REQUEST,
  DISH_FAILURE,
  DISH_SUCCESS
} from "../actions/actionsTypes";

const initialState = {
  dishes: [],
  error: "",
  loading: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case DISH_REQUEST:
      return { ...state, loading: true };
    case DISH_SUCCESS:
      return {
        ...state,
        dishes: (state.dishes = action.data),
        loading: false,
        error: ""
      };
    case DISH_FAILURE:
      return { ...state, error: action.error.toString(), loading: false };
    default:
      return state;
  }
};

export default reducer;
