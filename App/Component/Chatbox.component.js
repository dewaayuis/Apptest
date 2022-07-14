import React, { useState, useCallback, useEffect } from 'react'
import { GiftedChat } from 'react-native-gifted-chat'
import {Image, Text, View, TouchableOpacity, TextInput, ScrollView, Modal} from 'react-native';
import PropTypes from 'prop-types';
import {result, toLower, size} from 'lodash';
import styles from './Chatbox.styles';




class ChatboxComponent extends React.Component {
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
  
  render () {
    const {contactList = [], funcgetContactFromAPI} = this.props;
    return (
      <ScrollView contentContainerStyle={styles.bottomContainer} extraHeight={200}>
        <Modal visible={this.state.modalDeleteVisible} animationType='fade'
          transparent={true} >

        </Modal>

          


      </ScrollView>
    );
  }
}

export default ChatboxComponent;


