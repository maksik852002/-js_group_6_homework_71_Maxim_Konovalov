import React from "react";
import Button from "../UI/Button/Button";

const OrdersItem = props => {
  const { orders, dishes } = props;
  let totalPrice = 150;
  Object.entries(orders).map(
    ([key, value]) => (totalPrice += parseInt(dishes[key].price * value))
  );
  return (
    <div className="card mb-2">
      <div className="card-header">Order #: {props.id}</div>
      <div className="card-body d-flex">
        <div className="col-9">
          {Object.entries(orders).map(([key, value]) => (
            <div key={key} className="d-flex">
              <p className="col-8">
                {value} x {dishes[key].title}
              </p>
              <p className="col-4">{value * dishes[key].price} KGS</p>
            </div>
          ))}
          <div className="d-flex">
            <p className="col-8">Delivery</p>
            <p className="col-4">150 KGS</p>
          </div>
        </div>
        <div className="col-3 d-flex flex-column align-items-start">
          <p>Order total:</p>
          <p>{totalPrice} KGS</p>
          <Button
            style={{ textDecoration: "underline", fontSize: "15px" }}
            addClass="close"
            label="Complete Order"
            click={props.click}
          />
        </div>
      </div>
    </div>
  );
};

export default OrdersItem;
