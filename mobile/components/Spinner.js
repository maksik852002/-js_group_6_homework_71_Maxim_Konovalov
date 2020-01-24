import React from "react";
import { ActivityIndicator, View, StyleSheet } from "react-native";

const Spinner = () => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
    },
    horizontal: {
      flexDirection: "row",
      justifyContent: "space-around"
    }
  });

  return (
    <View style={[styles.container, styles.horizontal]}>
      <ActivityIndicator size="100%" color="#0000ff" />
    </View>
  );
};

export default Spinner;
