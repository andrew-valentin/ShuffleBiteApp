import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './screens/home';
import {ChoicesScreen, FinalChoiceScreen} from './screens/choices';

{/* Start with homepage and add other pages to stack */}
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{title: 'Shuffle Bite',
                    headerTitleAlign: 'center',
                    headerStyle: {backgroundColor: '#ecd0a1'},
                    headerTitleStyle: {color: '#5f471f'}
                  }}
        />
        <Stack.Screen 
          name="Choices" 
          component={ChoicesScreen}
          options={{title: 'Choose One', 
                    headerTitleAlign: 'center',
                    headerStyle: {backgroundColor: '#ecd0a1'},
                    headerTitleStyle: {color: '#5f471f'},
                    headerTintColor: '#5f471f'
                  }} 
        />
        <Stack.Screen 
          name="FinalChoice" 
          component={FinalChoiceScreen} 
          options={{title: 'Enjoy!', 
                    headerTitleAlign: 'center',
                    headerStyle: {backgroundColor: '#ecd0a1'},
                    headerTitleStyle: {color: '#5f471f'},
                    headerTintColor: '#5f471f'
                  }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;
