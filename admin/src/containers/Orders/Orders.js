import React, { Component } from "react";
import { connect } from "react-redux";
import { getDishes } from "../../store/actions/dishesActions";
import {
  getOrders,
  completeOrder,
  valueClear
} from "../../store/actions/ordersActions";
import Spinner from "../../components/UI/Spinner/Spinner";
import OrdersItem from "../../components/OrdersItem/OrdersItem";

class Orders extends Component {
  async componentDidMount() {
    await this.props.getDishes();
    await this.props.getOrders();
  }

  componentWillUnmount() {
    this.props.valueClear();
  }

  completeOrderHandler = async id => {
    await this.props.completeOrder(id);
    await this.props.getOrders();
    await this.props.getDishes();
  };

  render() {
    const { orders, loading, dishes, error } = this.props;

    let result = (
      <div className="container">
        {orders.length === 0 ? (
          <p className="text-center">No orders</p>
        ) : loading ? (
          <Spinner />
        ) : (
          Object.keys(orders).map(id => (
            <OrdersItem
              key={id}
              id={id}
              dishes={dishes}
              orders={orders[id]}
              click={() => this.completeOrderHandler(id)}
            />
          ))
        )}
      </div>
    );
    error.length > 0 && (result = <p className="text-center">{error}</p>);
    return result;
  }
}

const mapStateToProps = state => {
  return {
    dishes: state.dish.dishes,
    orders: state.ord.orders,
    loading: state.ord.loading,
    error: state.ord.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getDishes: () => dispatch(getDishes()),
    getOrders: () => dispatch(getOrders()),
    completeOrder: id => dispatch(completeOrder(id)),
    valueClear: () => dispatch(valueClear())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Orders);
