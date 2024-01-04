import React, { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

const GoalInput = ({ onAddGoal }) => {
  const [currentInput, setCurrentInput] = useState("");

  const addGoalHandler = () => {
    if (currentInput.trim() !== "")
      onAddGoal({ text: currentInput, id: Math.random().toString() });
    setCurrentInput("");
  };

  const changeInputHander = (text) => {
    setCurrentInput(text);
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Your course goal!"
        onChangeText={changeInputHander}
        value={currentInput}
      />
      <Button title="Add goal" onPress={addGoalHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    flex: 1,
  },
  textInput: {
    borderColor: "#ccc",
    borderWidth: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    width: "70%",
    marginRight: 8,
  },
});

export default GoalInput;
