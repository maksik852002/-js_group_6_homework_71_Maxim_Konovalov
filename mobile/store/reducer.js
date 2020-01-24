import {
  DISH_REQUEST,
  DISH_FAILURE,
  DISH_SUCCESS,
  DISH_ADD,
  DISH_REMOVE,
  MODAL_SHOW,
  CLEAR_VALUE
} from "../store/action";

const initialState = {
  dishes: [],
  cart: [],
  totalPrice: 150,
  error: "",
  loading: false,
  modal: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CLEAR_VALUE:
      return {
        ...state,
        cart: [],
        modal: false,
        totalPrice: 150,
        loading: false
      };
    case MODAL_SHOW:
      return { ...state, modal: !state.modal };
    case DISH_ADD:
      return {
        ...state,
        totalPrice: state.totalPrice + parseInt(action.price),
        cart: {
          ...state.cart,
          [action.id]:
            state.cart[action.id] === undefined
              ? (state.cart[action.id] = 0 + 1)
              : state.cart[action.id] + 1
        }
      };
    case DISH_REMOVE:
      return {
        ...state,
        totalPrice: state.totalPrice - parseInt(action.price),
        cart: { ...state.cart, [action.id]: state.cart[action.id] - 1 }
      };
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
