import React from "react";
import { FlatList, StyleSheet, View, Text, Pressable } from "react-native";

const GoalItems = ({ goals, deleteGoalHandler }) => {
  return (
    <View style={styles.goalsContainer}>
      <FlatList
        alwaysBounceVertical={false}
        data={goals}
        renderItem={(itemData) => {
          return (
            <Pressable onPress={deleteGoalHandler} style={styles.listItem}>
              <Text style={styles.listItemText}>{itemData.item.text}</Text>
            </Pressable>
          );
        }}
        keyExtractor={(item, index) => {
          return item.id;
        }}
      ></FlatList>
    </View>
  );
};

const styles = StyleSheet.create({
  goalsContainer: {
    flex: 4,
  },
  listItem: {
    margin: 10,
    padding: 10,
    backgroundColor: "blue",
    borderRadius: 10,
    color: "#fff",
  },
  listItemText: {
    color: "#fff",
  },
});

export default GoalItems;
