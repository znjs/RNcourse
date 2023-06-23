import { StyleSheet, Text, View } from 'react-native';

export const GoalItem = ({ value, idx, deleteGoal }) => {
  return (
    <View>
      <Text style={styles.listStyling}>{value}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
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
});
