import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import ROUTES from './routes';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {ROUTES.map(({ name, component: C }) => (
          <Stack.Screen key={name} name={name} component={C} />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
