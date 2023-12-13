import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const App = (): React.JSX.Element => {
  return (
    <View>
      <Text style={styles.text}>Hello World</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    fontFamily: 'Helvetica',
    fontWeight: 'bold',
  },
});

export default App;
