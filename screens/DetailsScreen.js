import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const DetailsScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>about me Screen</Text>
      <Button
        title="Go to About"
        onPress={() => navigation.navigate('About')}//-> go to About
      />
      <Text>Details Screen</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.navigate('Details')}//-> already on details so nothing will happen
      />
      <Button
        title="Go to Details... again"
        onPress={() => navigation.push('Details')}//-> already on details, will still navigate
      />
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}//-> go to HomeScreen
      />
      <Button
        title="Go back"
        onPress={() => navigation.goBack()}//-> back to previous screen
      />
      <Button
        title="Go to Details... again"
        onPress={() => navigation.navigate('Details')}//-> already on details so nothing will happen
      />

      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}//-> go to the first screen in the stack
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
export default DetailsScreen;