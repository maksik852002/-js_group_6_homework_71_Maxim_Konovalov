import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getFormData,
  valueChanged,
  createDish,
  editDish,
  valueClear
} from "../../store/actions/createFormActions";
import Button from "../UI/Button/Button";
import Spinner from "../UI/Spinner/Spinner";

class CreateDishesForm extends Component {
  async componentDidMount() {
    const id = this.props.match.params.id;
    if (this.props.match.url === `/${id}/edit`) {
      this.props.getFormData(id);
    }
  }

  componentWillUnmount() {
    this.props.valueClear();
  }

  submitHandler = async e => {
    e.preventDefault();
    const id = this.props.match.params.id;
    const dish = {
      title: this.props.title,
      price: this.props.price,
      image: this.props.image
    };
    this.props.match.url !== `/${id}/edit`
      ? await this.props.createDish(dish)
      : await this.props.editDish(id, dish);
    this.props.history.push("/");
  };

  cancelHandler = () => {
    this.props.history.goBack();
  };

  render = () => {
    const isTrue = this.props.match.url !== "/create";
    return (
      <div className="container">
        <h4 className="text-center mb-5">
          {!isTrue
            ? "Введите данные для создания блюда"
            : "Введите данные для изменения блюда"}
        </h4>
        {this.props.loading ? (
          <Spinner />
        ) : (
          <form className="w-75 m-auto">
            <div className="form-group row">
              <label htmlFor="inputTitle" className="col-sm-2 col-form-label">
                Title
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  id="inputTitle"
                  name="title"
                  value={this.props.title}
                  onChange={this.props.valueChanged}
                />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="inputPrice" className="col-sm-2 col-form-label">
                Price
              </label>
              <div className="col-sm-10">
                <input
                  type="number"
                  className="form-control"
                  id="inputPrice"
                  name="price"
                  value={this.props.price}
                  onChange={this.props.valueChanged}
                />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="inputImage" className="col-sm-2 col-form-label">
                Image
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  id="inputPrice"
                  name="image"
                  value={this.props.image}
                  onChange={this.props.valueChanged}
                />
              </div>
            </div>
            <div className="form-group row">
              <div className="w-100 d-flex justify-content-between">
                <Button
                  type="submit"
                  label={!isTrue ? "Create" : "Edit"}
                  addClass="secondary"
                  click={this.submitHandler}
                />
                <Button
                  type="button"
                  label="Cancel"
                  addClass="secondary"
                  click={this.cancelHandler}
                />
              </div>
            </div>
          </form>
        )}
      </div>
    );
  };
}

const mapStateToProps = state => {
  return {
    title: state.form.title,
    price: state.form.price,
    image: state.form.image,
    loading: state.form.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getFormData: id => dispatch(getFormData(id)),
    createDish: data => dispatch(createDish(data)),
    editDish: (id, dish) => dispatch(editDish(id, dish)),
    valueChanged: e => dispatch(valueChanged(e)),
    valueClear: () => dispatch(valueClear())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateDishesForm);
