import React, { Component } from "react";
import { connect } from "react-redux";
import { getDishes, removeDish } from "../../store/actions/dishesActions";
import Dish from "../../components/Dish/Dish";
import Button from "../../components/UI/Button/Button";
import Spinner from "../../components/UI/Spinner/Spinner";

class Dishes extends Component {
  componentDidMount() {
    this.props.getDishes();
  }

  startCreateForm = () => {
    this.props.history.push("/create");
  };

  removeHandler = async id => {
    await this.props.removeDish(id);
    this.props.getDishes();
  };

  editHandler = id => {
    this.props.history.push(`/${id}/edit`);
  };

  render() {
    const { dishes, loading, error } = this.props;
    return (
      <div className="container">
        <div className="d-flex justify-content-between">
          <h2>Dishes</h2>
          <Button
            label="Add new Dish"
            addClass="secondary"
            click={this.startCreateForm}
          />
        </div>
        <div className="mt-3">
          <div className="border border-secondary rounded p-2">
            {error.length > 0 ? (
              <p className="text-center">{error}</p>
            ) : loading ? (
              <Spinner />
            ) : (
              Object.keys(dishes).map(id => (
                <Dish
                  key={id}
                  id={id}
                  title={dishes[id].title}
                  price={dishes[id].price}
                  img={dishes[id].image}
                  remove={() => this.removeHandler(id)}
                  edit={() => this.editHandler(id)}
                />
              ))
            )}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    dishes: state.dish.dishes,
    loading: state.dish.loading,
    error: state.dish.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getDishes: () => dispatch(getDishes()),
    removeDish: id => dispatch(removeDish(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dishes);
