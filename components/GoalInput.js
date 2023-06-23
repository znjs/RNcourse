import { StyleSheet, TextInput } from 'react-native';

export const GoalInput = ({ onTextUpdate, enteredGoal }) => {
  return (
    <TextInput
      onChangeText={onTextUpdate}
      value={enteredGoal}
      style={styles.input}
      placeholder="your course goal"
    />
  );
};

const styles = StyleSheet.create({
  input: {
    padding: 5,
    marginRight: 5,
    backgroundColor: '#fff',
    flex: 1,
  },
});
