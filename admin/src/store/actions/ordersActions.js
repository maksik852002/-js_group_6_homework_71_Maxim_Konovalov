import {
  ORDERS_REQUEST,
  ORDERS_SUCCESS,
  ORDERS_FAILURE,
  VALUE_CLEAR
} from "./actionsTypes";
import axios from "../../axios-setup";

export const ordersRequest = () => ({ type: ORDERS_REQUEST });
export const ordersSuccess = data => ({ type: ORDERS_SUCCESS, data });
export const ordersFailure = error => ({ type: ORDERS_FAILURE, error });
export const valueClear = () => ({ type: VALUE_CLEAR });

export const getOrders = () => {
  return async dispatch => {
    try {
      dispatch(ordersRequest());
      const response = await axios.get("/dishes-orders.json");
      dispatch(ordersSuccess(response.data === null ? [] : response.data));
    } catch (e) {
      dispatch(ordersFailure(e));
    }
  };
};

export const completeOrder = id => {
  return async dispatch => {
    try {
      await axios.delete(`/dishes-orders/${id}.json`);
      dispatch(ordersSuccess({}));
    } catch (e) {
      dispatch(ordersFailure(e));
    }
  };
};
