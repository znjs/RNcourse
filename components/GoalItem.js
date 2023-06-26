import { Pressable, StyleSheet, Text, View } from 'react-native';

export const GoalItem = ({ value, idx, deleteGoal }) => {
  return (
    <View style={styles.listItem}>
      <Pressable
        color="white"
        onPress={() => {
          deleteGoal(idx);
        }}
        style={(props) => {
          console.log(props);
          return { backgroundColor: props.pressed ? '#5e0acc' : '#f2f2f240w' };
        }}
      >
        <Text style={styles.listStylingContent}>{value}</Text>
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  listItem: {
    marginVertical: 10,
    backgroundColor: '#5e0acc',
    borderRadius: 10,
    overflow: 'hidden',
  },
  listStylingContent: {
    padding: 10,
    color: 'white',
    flex: 1,
    borderColor: '#ccc',
    fontSize: 20,
  },
});
