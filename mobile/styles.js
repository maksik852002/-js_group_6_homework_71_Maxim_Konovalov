import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ccc",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 50
  },
  dishesContainer: {
    width: "95%"
  },
  list: {
    width: "100%"
  },
  listItem: {
    display: "flex",
    padding: 10,
    marginBottom: 20,
    backgroundColor: "whitesmoke",
    flexDirection: "row",
    alignItems: "center"
  },
  image: {
    width: "70%",
    height: "70%"
  },
  titleWrap: {
    width: "50%"
  },
  imageWrap: {
    width: "30%"
  }
});

export default styles;
