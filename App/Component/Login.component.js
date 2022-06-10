import React, {Component} from 'react';
import {Image, Text, View, TouchableOpacity, TextInput, ScrollView, Modal} from 'react-native';
import PropTypes from 'prop-types';
import {result, toLower, size} from 'lodash';
import styles from './Login.styles';
import {Formik} from 'formik';
import * as yup from 'yup';



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
    this.props.navigation.navigate('CreateAccount');
  }
  
  
  
  render () {
    
    //validasi login
    const loginValidationSchema = yup.object().shape({
      email: yup
        .string()
        .email("Please enter valid email")
        .required('Email Address is Required'),
      password: yup
        .string()
        .min(8, ({ min }) => `Password must be at least ${min} characters`)
        .required('Password is required'),  
    })


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
            onSubmit={values => console.log(values)}
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
                 
                 <TouchableOpacity style={styles.buttonLiveChat} onPress={this.goCreate}>
                    <Text style={styles.textButton}>Start Live Chat</Text>
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