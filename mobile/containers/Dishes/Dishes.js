import React, { useEffect } from "react";
import { ScrollView, View, Button, Text, Modal } from "react-native";
import {
  getDishes,
  dishAdd,
  dishRemove,
  postOrder,
  modalShow
} from "../../store/action";
import styles from "../../styles";
import { connect } from "react-redux";

import Dish from "../../components/Dish";
import Cart from "../../components/Cart";
import Spinner from "../../components/Spinner";

const Dishes = ({
  loading,
  dishes,
  getDishes,
  dishAdd,
  cart,
  totalPrice,
  postOrder,
  modalShow,
  modal,
  dishRemove
}) => {
  useEffect(() => {
    getDishes();
  }, []);

  return (
    <View style={styles.container}>
      <Modal
        style={{ width: "90%" }}
        animationType="slide"
        transparent={false}
        visible={modal}
      >
        {loading ? (
          <Spinner />
        ) : (
          <View style={{ marginTop: 22 }}>
            <View style={{ textAlign: "center", marginBottom: 50 }}>
              <Text>You order: </Text>
            </View>
            <ScrollView style={{ height: 300 }}>
              {Object.keys(cart).map(
                id =>
                  cart[id] > 0 && (
                    <Cart
                      key={id}
                      id={id}
                      title={dishes[id].title}
                      price={dishes[id].price}
                      qty={cart[id]}
                      press={() => dishRemove(id, dishes[id].price)}
                    />
                  )
              )}
              <View>
                <Text style={{ textAlign: "center" }}>Delivery: 150 KGS </Text>
                <Text style={{ textAlign: "center" }}>
                  Total: {totalPrice} KGS
                </Text>
              </View>
            </ScrollView>
            <View>
              <View style={{ marginBottom: 10 }}>
                <Button title="Cancel" onPress={() => modalShow()} />
              </View>
              <View>
                <Button
                  title="Order"
                  onPress={() => postOrder(cart)}
                  disabled={totalPrice > 150 ? false : true}
                />
              </View>
            </View>
          </View>
        )}
      </Modal>
      {loading ? (
        <Spinner />
      ) : (
        <View style={styles.dishesContainer}>
          <Text
            style={{
              textAlign: "center",
              paddingBottom: 30,
              borderBottomWidth: 3,
              borderBottomColor: "#fff",
              marginBottom: 20
            }}
          >
            Turtle Pizza
          </Text>
          <ScrollView style={styles.list}>
            {Object.keys(dishes).map(
              id =>
                dishes[id] && (
                  <Dish
                    key={id}
                    id={id}
                    title={dishes[id].title}
                    price={dishes[id].price}
                    image={dishes[id].image}
                    qty={cart[id]}
                    press={() => dishAdd(id, dishes[id].price)}
                  />
                )
            )}
          </ScrollView>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              borderTopWidth: 3,
              borderTopColor: "#fff",
              paddingTop: 30
            }}
          >
            <View style={{ width: "70%", marginLeft: "auto" }}>
              <Text>Order total:{totalPrice} KGS</Text>
            </View>
            <View style={{ width: "30%", marginRigth: "auto" }}>
              <Button
                title="Checkout"
                color="blue"
                disabled={false}
                onPress={() => modalShow()}
              />
            </View>
          </View>
        </View>
      )}
    </View>
  );
};

const mapStateToProps = state => ({
  loading: state.loading,
  dishes: state.dishes,
  cart: state.cart,
  totalPrice: state.totalPrice,
  modal: state.modal
});

const mapDispatchToProps = dispatch => ({
  getDishes: () => dispatch(getDishes()),
  dishAdd: (id, price) => dispatch(dishAdd(id, price)),
  dishRemove: (id, price) => dispatch(dishRemove(id, price)),
  postOrder: cart => dispatch(postOrder(cart)),
  modalShow: () => dispatch(modalShow())
});

export default connect(mapStateToProps, mapDispatchToProps)(Dishes);
