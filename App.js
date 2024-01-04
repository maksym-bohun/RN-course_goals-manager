import { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  FlatList,
} from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItems from "./components/GoalItems";

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [goals, setGoals] = useState([]);

  const addGoalHandler = (enteredText) => {
    setGoals((prevGoals) => [enteredText, ...prevGoals]);
  };

  const deleteGoalHandler = (id) => {
    console.log(id);
    setGoals((currentGoals) => currentGoals.filter((goal) => goal.id !== id));
  };

  return (
    <View style={styles.container}>
      {!modalIsVisible && (
        <>
          <Button
            title="Add new goal"
            color="#5e0acc"
            onPress={() => setModalIsVisible(true)}
          />
          <GoalItems goals={goals} deleteGoalHandler={deleteGoalHandler} />
        </>
      )}
      {modalIsVisible && (
        <GoalInput
          modalIsVisible={modalIsVisible}
          setModalIsVisible={setModalIsVisible}
          onAddGoal={addGoalHandler}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 70,
    paddingHorizontal: 16,
    flex: 1,
  },
});
