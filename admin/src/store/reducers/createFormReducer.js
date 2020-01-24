import {
  FORM_REQUEST,
  FORM_FAILURE,
  FORM_SUCCESS,
  VALUE_CHANGE,
  VALUE_CLEAR
} from "../actions/actionsTypes";

const initialState = {
  loading: false,
  title: "",
  price: "",
  image: "",
  error: ""
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case VALUE_CLEAR:
      return { ...state, title: "", price: "", image: "" };
    case VALUE_CHANGE:
      return {
        ...state,
        [action.event.target.name]: action.event.target.value
      };
    case FORM_REQUEST:
      return { ...state, loading: true };
    case FORM_SUCCESS:
      return {
        ...state,
        title: action.data.title,
        price: action.data.price,
        image: action.data.image,
        loading: false
      };
    case FORM_FAILURE:
      return { ...state, error: action.error.toString(), loading: false };
    default:
      return state;
  }
};

export default reducer;
