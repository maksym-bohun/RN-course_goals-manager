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
            <View style={styles.listItem}>
              <Pressable
                android_ripple={{ color: "#ddd" }}
                onPress={deleteGoalHandler.bind(this, itemData.item.id)}
                style={({ pressed }) => pressed && styles.pressed}
              >
                <Text style={styles.listItemText}>{itemData.item.text}</Text>
              </Pressable>
            </View>
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
  pressed: {
    opacity: 0.5,
  },
});

export default GoalItems;
