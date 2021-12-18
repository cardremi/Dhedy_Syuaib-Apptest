import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {ContactsPage} from '../../containers/pages';

const Stack = createNativeStackNavigator();
const Router = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: 'white',
        headerStyle: {backgroundColor: 'tomato'},
      }}>
      <Stack.Screen
        component={ContactsPage}
        name="ContactsPage"
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
export default Router;
