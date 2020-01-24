import { DISH_REQUEST, DISH_SUCCESS, DISH_FAILURE } from "./actionsTypes";
import axios from "../../axios-setup";

export const dishRequest = () => ({ type: DISH_REQUEST });
export const dishSuccess = data => ({ type: DISH_SUCCESS, data });
export const dishFailure = error => ({ type: DISH_FAILURE, error });

export const getDishes = () => {
  return async dispatch => {
    try {
      dispatch(dishRequest());
      const response = await axios.get("/dishes-list.json");
      dispatch(dishSuccess(response.data === null ? {} : response.data));
    } catch (e) {
      dispatch(dishFailure(e));
    }
  };
};

export const removeDish = id => {
  return async dispatch => {
    try {
      await axios.delete(`/dishes-list/${id}.json`);
      dispatch(dishSuccess({}));
    } catch (e) {
      dispatch(dishFailure(e));
    }
  };
};
