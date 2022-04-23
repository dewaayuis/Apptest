// In App.js in a new project

import * as React from 'react';;
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ContactListPage from '../Pages/ContactList.page';

// this page dual mode, for editing and add new contact
import ContactFormPage from '../Pages/ContactForm.page';

const Stack = createNativeStackNavigator();

function  MainRoutes () {
  return (
    <NavigationContainer>
      <Stack.Navigator     
        initialRouteName='Home'>
        <Stack.Screen
          name='Home'
          component={ContactListPage}
          options={{ title: 'Contact List' }}
        />
        <Stack.Screen
          name='CreateAccount'
          component={ContactFormPage}
          options={{ title: 'Add Contact' }}
        />
        <Stack.Screen
          name='EditAccount'
          component={ContactFormPage}
          options={{ title: 'Edit Contact' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainRoutes;