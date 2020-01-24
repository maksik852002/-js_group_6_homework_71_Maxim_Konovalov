import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

import styles from "../styles";

const Dish = ({ title, price, image, qty, press }) => {
  return (
    <TouchableOpacity
      onPress={press}
      style={styles.listItem}
      underlayColor="#FFFF"
    >
      <View style={styles.imageWrap}>
        <Image style={{ width: 80, height: 80 }} source={{ uri: `${image}` }} />
      </View>
      <View style={styles.titleWrap}>
        <Text>
          {title} {qty > 0 ? qty : ""}
        </Text>
      </View>
      <View style={styles.col}>
        <Text>{price} KGS</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Dish;
