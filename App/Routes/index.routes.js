// // In App.js in a new project

// import * as React from 'react';;
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import ContactListPage from '../Pages/ContactList.page';

// // this page dual mode, for editing and add new contact
// import ContactFormPage from '../Pages/ContactForm.page';

// const Stack = createNativeStackNavigator();

// function  MainRoutes () {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator     
//         initialRouteName='Home'>
//         <Stack.Screen
//           name='Home'
//           component={ContactListPage}
//           options={{ title: 'Contact List' }}
//         />
//         <Stack.Screen
//           name='CreateAccount'
//           component={ContactFormPage}
//           options={{ title: 'Add Contact' }}
//         />
//         <Stack.Screen
//           name='EditAccount'
//           component={ContactFormPage}
//           options={{ title: 'Edit Contact' }}
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// export default MainRoutes;











// In App.js in a new project

import * as React from 'react';;
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from '../Pages/Home.page';
import ContactListPage from '../Pages/Login.page';
import ChatboxPage from '../Pages/Chatbox.page';

// this page dual mode, for editing and add new contact
import AboutUsPage from '../Pages/AboutUs.page';

const Stack = createNativeStackNavigator();

function  MainRoutes () {
  return (
    <NavigationContainer>
      <Stack.Navigator     
        initialRouteName='Home'>
        <Stack.Screen
          name='Login'
          component={ContactListPage}
          options={{ title: 'Login Page' }}
        />
        <Stack.Screen
          name='Home'
          component={HomePage}
          options={{ title: 'Home' }}
        />
        <Stack.Screen
          name='AboutUs'
          component={AboutUsPage}
          options={{ title: 'About Us' }}
        />
        <Stack.Screen
          name='EditAccount'
          component={AboutUsPage}
          options={{ title: 'Edit Contact' }}
        />
        <Stack.Screen
          name='Chatbox'
          component={ChatboxPage}
          options={{ title: 'Chat' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainRoutes;