import React from 'react';
import {Image, Text, View, TouchableOpacity, TextInput, ScrollView, Modal} from 'react-native';
import PropTypes from 'prop-types';
import {result, toLower, size} from 'lodash';
import styles from './Home.styles';
import axios from 'axios';



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
   
  goLogout = () => {
    navigation.navigate('Login');
  }

  goChat = () => {
    this.props.navigation.navigate('Chat');
  }

  goAbout = () => {
    this.props.navigation.navigate('AboutUs');
  }



  testLogout = () => {
    const {navigate} = this.props.navigation;
    console.log('testsblm', this.props.navigation);
    const options = {
      method: 'post',
      url: 'http://172.20.10.5:8080/restapi/myChatClient/logout',
      headers: {
        'content-type': 'application/json'
      }
    };
    axios(options).then(function (response) {
      console.log('response', response);
      const data = response.data.message;
        navigate('Login')
        console.log('test', this.props.navigation);
    }).catch(function (error) {
      console.error('error,', error);
    });
  }

  
  render () {
    const {contactList = [], funcgetContactFromAPI} = this.props;
    return (

          <View style={styles.Cobacontainer}>
            <Text style={styles.Cobatitle}>Bank Sinarmas</Text>

          <View style={styles.Cobagaris} />

          <Text style={styles.CobaTulisan}>Selamat Datang Pelanggan Terhormat, Apa yang ingin anda lakukan ?</Text>


        <TouchableOpacity style={styles.buttonLiveChat} onPress={this.goChat}>
          <Text style={styles.textButton}>Start Live Chat</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonLiveChat} onPress={this.goAbout}>
          <Text style={styles.textButton}>About Us</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonLiveChat} onPress={this.testLogout}>
          <Text style={styles.textButton}>Log Out</Text>
        </TouchableOpacity>

          </View>
    );
  }
}

export default HomeScreenComponent;