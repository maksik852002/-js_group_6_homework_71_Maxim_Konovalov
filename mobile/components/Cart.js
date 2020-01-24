import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const Cart = ({ title, price, qty, press }) => {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        marginBottom: 10,
        justifyContent: "space-evenly",
        alignItems: "center"
      }}
    >
      <View style={{ flexBasis: "50%" }}>
        <Text style={{ marginLeft: 20 }}>
          {title} x {qty}
        </Text>
      </View>
      <View style={{ flexBasis: "30%" }}>
        <Text>{price * qty} KGS</Text>
      </View>
      <View style={{ flexBasis: "20%" }}>
        <TouchableOpacity onPress={press}>
          <MaterialIcons name="delete-forever" size={32} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Cart;
