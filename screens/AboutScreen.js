import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const AboutScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>some info about me</Text>
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}//-> go to the first screen in the stack (in this case conincidentally also home, switch them and see what happens)
      />
    </View>
  );
}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
export default AboutScreen;