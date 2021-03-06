import React from "react";
import { View, StyleSheet } from "react-native";
import Box from "../../helpers/Box";

export default class Centering extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Box backgroundColor="blue" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
