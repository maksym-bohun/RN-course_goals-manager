import React, { useState } from "react";
import {
  Button,
  Image,
  Modal,
  StyleSheet,
  TextInput,
  View,
} from "react-native";

const GoalInput = ({ onAddGoal, modalIsVisible, setModalIsVisible }) => {
  const [currentInput, setCurrentInput] = useState("");

  const addGoalHandler = () => {
    if (currentInput.trim() !== "") {
      onAddGoal({ text: currentInput, id: Math.random().toString() });
      setCurrentInput("");
      setModalIsVisible(false);
    }
  };

  const changeInputHander = (text) => {
    setCurrentInput(text);
  };

  return (
    <Modal visible={modalIsVisible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          source={require("../assets/images/goal.png")}
          style={styles.image}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal!"
          onChangeText={changeInputHander}
          value={currentInput}
        />
        <View style={styles.buttonsContainer}>
          <Button title="Add goal" onPress={addGoalHandler} />
          <Button title="Cancel" onPress={() => setModalIsVisible(false)} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "column",
    justifyContent: "center",
    gap: 20,
    alignItems: "center",
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
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
});

export default GoalInput;
