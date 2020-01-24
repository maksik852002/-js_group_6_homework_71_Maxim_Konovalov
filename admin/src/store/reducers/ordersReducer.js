import {
  ORDERS_REQUEST,
  ORDERS_FAILURE,
  ORDERS_SUCCESS,
  VALUE_CLEAR
} from "../actions/actionsTypes";

const initialState = {
  dishes: [],
  orders: [],
  error: "",
  loading: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case VALUE_CLEAR:
      return { ...state, dishes: {}, orders: {} };
    case ORDERS_REQUEST:
      return { ...state, loading: true };
    case ORDERS_SUCCESS:
      return {
        ...state,
        orders: (state.orders = action.data),
        loading: false,
        error: ""
      };
    case ORDERS_FAILURE:
      return { ...state, error: action.error.toString(), loading: false };
    default:
      return state;
  }
};

export default reducer;
