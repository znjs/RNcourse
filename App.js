import { useEffect, useState } from 'react';
import { Button, FlatList, StyleSheet, Text, View } from 'react-native';
import uuid from 'react-native-uuid';
import { GoalInput, GoalItem } from './components';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState(''); // [value, function
  const [goals, setGoals] = useState([
    // { id: '1', value: 'test' },
    // { id: '2', value: 'test2' },
    // { id: '3', value: 'test3' },
  ]);

  useEffect(() => {
    console.log('goals', goals);
  }, [goals]);
  const onTextUpdate = (text) => {
    setEnteredGoal(text);
  };

  const deleteGoal = (id) => {
    setGoals((prev) => prev.filter((goal) => goal.id !== id));
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <View style={styles.inputInnerContainer}>
          <GoalInput onTextUpdate={onTextUpdate} enteredGoal={enteredGoal} />
          <Button
            title="Add Goal"
            onPress={() => {
              console.log(enteredGoal);
              if (enteredGoal !== '') {
                setGoals((prev) => [
                  ...prev,
                  { value: enteredGoal, id: uuid.v4() },
                ]);
                setEnteredGoal('');
              }
            }}
          />
        </View>
      </View>
      <View padding={20} style={styles.goalsContainer}>
        <Text style={styles.heading}>List of Goals...</Text>
        <FlatList
          data={goals}
          renderItem={({ item: { id, value }, index }) => (
            <GoalItem deleteGoal={deleteGoal} idx={index} value={value} />
          )}
          keyExtractor={({ id }) => id}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  heading: {
    fontSize: 20,
  },
  inputContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  inputInnerContainer: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    borderRadius: 10,
    borderBottomWidth: 2,
    backgroundColor: '#f2f2f2',
    borderBottomColor: '#ccc',
  },
  input: {
    padding: 5,
    marginRight: 5,
    backgroundColor: '#fff',
    flex: 1,
  },
  goalsContainer: {
    flex: 5,
    // backgroundColor: '#c0ffee',
  },
  listStyling: {
    padding: 10,
    color: 'white',
    marginVertical: 10,
    backgroundColor: '#5e0acc',
    borderColor: '#ccc',
    overflow: 'hidden',
    borderRadius: 10,
    fontSize: 20,
    marginRight: 10,
  },
  scrollHide: {},
});
