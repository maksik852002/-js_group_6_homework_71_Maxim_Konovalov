import axios from "../axios-setup";

export const DISH_REQUEST = "DISH_REQUEST";
export const DISH_SUCCESS = "DISH_SUCCESS";
export const DISH_FAILURE = "DISH_FAILURE";
export const DISH_ADD = "DISH_ADD";
export const DISH_REMOVE = "DISH_REMOVE";
export const MODAL_SHOW = "MODAL_SHOW";
export const CLEAR_VALUE = "CLEAR_VALUE";

export const dishRequest = () => ({ type: DISH_REQUEST });
export const dishSuccess = data => ({ type: DISH_SUCCESS, data });
export const dishFailure = error => ({ type: DISH_FAILURE, error });
export const dishAdd = (id, price) => ({ type: DISH_ADD, id, price });
export const dishRemove = (id, price) => ({ type: DISH_REMOVE, id, price });
export const modalShow = () => ({ type: MODAL_SHOW });
export const clearValue = () => ({ type: CLEAR_VALUE });

export const getDishes = () => {
  return async dispatch => {
    try {
      dispatch(dishRequest());
      const response = await axios.get("/dishes-list.json");
      dispatch(dishSuccess(response.data === null ? [] : response.data));
    } catch (e) {
      dispatch(dishFailure(e));
    }
  };
};

export const postOrder = cart => {
  return async dispatch => {
    try {
      dispatch(dishRequest());
      await axios.post(`/dishes-orders/.json`, cart);
      dispatch(clearValue());
    } catch (e) {
      dispatch(dishFailure(e));
    }
  };
};
