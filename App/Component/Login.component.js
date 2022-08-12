import React, {Component} from 'react';
import {Image, Text, View, TouchableOpacity, TextInput, ScrollView, Modal} from 'react-native';
import PropTypes from 'prop-types';
import {result, toLower, size, values, sortedIndexOf} from 'lodash';
import styles from './Login.styles';
import {Formik} from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import { StackActions } from '@react-navigation/native';



class HomeScreenComponent extends React.Component {
  static propTypes = {
    navigation: PropTypes.object,
    contactList: PropTypes.array,
    funcgetContactFromAPI: PropTypes.func,
    funcdeleteContactApi: PropTypes.func
  }
  state={
    filtering: '',
    modalDeleteVisible: false,
    deleteDataModal: {},
  }
  
  goCreate = () => {
    this.props.navigation.navigate('Home');
  }
  
  testApi = (values) => {
    const {navigate} = this.props.navigation;
    const options = {
      method: 'post',
      url: 'http://172.20.10.5:8080/restapi/myChatClient/login',
      data: {username: values.email, password: values.password},
      headers: {
        'content-type': 'application/json'
      }
    };
    axios.request(options).then(function (response) {
      const data = response.data.message;
      console.log('response', response);
      console.log('data', data);
      if (data === '00') {
      navigate('Home');
      }
    }).catch(function (error) {
      console.error(error);
    });
  }

  
  render () {
    
    //validasi login
    const loginValidationSchema = yup.object().shape({
      email: yup
        .string()
        .required('Email Address is Required'),
      password: yup
        .string()
        .min(6, ({ min }) => `Password must be at least ${min} characters`)
        .required('Password is required'),  
    })

    // tembak login


    const {contactList = [], funcgetContactFromAPI} = this.props;
    return (
      <ScrollView contentContainerStyle={styles.bottomContainer} extraHeight={200}>

        <Modal visible={this.state.modalDeleteVisible} animationType='fade'
          transparent={true} >
          
        </Modal>
        <View style={styles.HomePage}>
        

          <Text style={styles.Cobatitle}>Bank Sinarmas</Text>

          <View style={styles.Cobagaris} />

          <Text style={styles.CobaTulisan}>Silahkan Melakukan Login Terlebih Dahulu</Text>

          <View style={styles.Cobacontainer}>
            
          <Formik
            validationSchema={loginValidationSchema}
            initialValues={{ email: '', password: '' }}
            onSubmit={(values, actions) => {
              setTimeout(() => {
                this.testApi(values);
                actions.setSubmitting(false);
              }, 1000);
            }}
          >
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              isValid,
            }) => (
              <>
                <TextInput
                  name="email"
                  placeholder="Email Address"
                  style={styles.cobaTextInput}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                  keyboardType="email-address"
                />
                {errors.email &&
                  <Text style={{ fontSize: 10, color: 'red' }}>{errors.email}</Text>
                }
                <TextInput
                  name="password"
                  placeholder="Password"
                  style={styles.cobaTextInput}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  secureTextEntry
                />
                {errors.password &&
                  <Text style={{ fontSize: 10, color: 'red' }}>{errors.password}</Text>
                }
                
                <TouchableOpacity style={styles.buttonLiveChat} onPress={handleSubmit} title="LOGIN" disabled={!isValid}>
                <Text style={styles.textButton}>Login</Text>
                </TouchableOpacity>
                
              </>
            )}
          </Formik>
        </View>

          </View>


      </ScrollView>
    );
  }
} export default HomeScreenComponent;