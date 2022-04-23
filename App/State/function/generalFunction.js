import * as actionCreators from '../actions/index.actions';
import {result} from 'lodash';
import {
      ToastAndroid,
      Platform,
      Alert
    } from 'react-native';

export function getContactFromAPI () {
  return (dispatch, getState) => {
    const state = getState();
    return fetch('https://simple-contact-crud.herokuapp.com/contact').then((response) => response.json()).then((realResponse) => {
      const finalResult= result(realResponse, 'data', []);
      dispatch(actionCreators.updateContactList(finalResult));
    }).catch(() => {
      
    });
  };
}

export function saveContactApi (data={}, navigateOption) {
  return (dispatch, getState) => {
    const state = getState();
    const firstName = result(data, 'firstName', '');
    const lastName = result(data, 'lastName', '');
    const age = result(data, 'valueAge', '');
    const photo = result(data, 'urlPhoto', '');
    const payload = {firstName, lastName, age, photo}
    const saveContact = 'https://simple-contact-crud.herokuapp.com/contact';
    return fetch(saveContact,
      {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(payload)
}).then((response) => response.json()).then((realResponse) => {
    if (Platform.OS === 'android') {
    ToastAndroid.show(result(realResponse,'message',''), ToastAndroid.LONG)
  } else {
    Alert.alert(result(realResponse,'message',''));
  }
  const checkStatus = result(realResponse, 'statusCode', '');
  if(checkStatus !== 400){
      dispatch(getContactFromAPI());
      dispatch(navigateOption.navigation.goBack());
  }
    }).catch(() => {
    });
  };
}

export function editContactApi (data ={}, navigateOption) {
  return (dispatch, getState) => {
    const state = getState();
    const firstName = result(data, 'firstName', '');
    const lastName = result(data, 'lastName', '');
    const age = result(data, 'valueAge', '');
    const photo = result(data, 'urlPhoto', '');
    const id = result(data, 'id', '');
    const payload = {firstName, lastName, age, photo}
    const saveContact = 'https://simple-contact-crud.herokuapp.com/contact' + '/' + id;
    return fetch(saveContact,
      {
  method: 'PUT',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(payload)
}).then((response) => response.json()).then((realResponse) => {
  if (Platform.OS === 'android') {
    ToastAndroid.show(result(realResponse,'message',''), ToastAndroid.LONG)
  } else {
    Alert.alert(result(realResponse,'message',''));
  }
  const checkStatus = result(realResponse, 'statusCode', '');
  if(checkStatus !== 400){
      dispatch(getContactFromAPI());
      dispatch(navigateOption.navigation.goBack());
  }
    }).catch(() => {
    });
  };
}

export function deleteContactApi (data={}) {
  return (dispatch) => {
    const id = result(data, 'id', '');
    const saveContact = 'https://simple-contact-crud.herokuapp.com/contact' + '/' + id;
    return fetch(saveContact,
      {
  method: 'DELETE',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
}).then((response) => response.json()).then((realResponse) => {
  if (Platform.OS === 'android') {
    ToastAndroid.show(result(realResponse,'message',''), ToastAndroid.LONG)
  } else {
    Alert.alert(result(realResponse,'message',''));
  }
  const checkStatus = result(realResponse, 'statusCode', '');
  if(checkStatus !== 400){
      dispatch(getContactFromAPI());
  }
    }).catch(() => {

    });
  };
}
