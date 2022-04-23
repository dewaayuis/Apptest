import React from 'react';
import {Image, Text, View, TouchableOpacity, TextInput, ScrollView} from 'react-native';
import PropTypes from 'prop-types';
import {result} from 'lodash';
import styles from './ContactForm.styles';

class ContactFormComponent extends React.Component {
  static propTypes = {
    navigation: PropTypes.object,
    gotoFuncSaveContactApi: PropTypes.func,
    editingData: PropTypes.object,
    gotoFuncEditContactApi: PropTypes.func
  }

  state={
    firstName: '',
    lastName: '',
    valueAge: '',
    urlPhoto: '',
    errorValueAge: false,
    errorValueFirstName: false,
    errorValueLastName: false
  }

  
  onChangeFirstNameText=(firstNameType = '') => {
    if (firstNameType.length < 4) {
      this.setState({errorValueFirstName: true});        
    } else {
      this.setState({errorValueFirstName: false});    
    }
    this.setState({firstName: firstNameType});
  }
  onChangeLastNameText=(lastNametype = '') => {
    if (lastNametype.length < 4) {
      this.setState({errorValueLastName: true});        
    } else {
      this.setState({errorValueLastName: false});    
    }
    this.setState({lastName: lastNametype});
  }
  onChangeTextAge=(Agetype = '') => {
    if (Number(Agetype) < 1 || Number(Agetype) > 100 || isNaN(Agetype)) {
      this.setState({errorValueAge: true});        
    } else {
      this.setState({errorValueAge: false});    
    }
    this.setState({valueAge: Agetype});
  }
  onChangePhotoText=(urlPhototype = '') => {
    this.setState({urlPhoto: urlPhototype});
  }

  onSubmitForm=() => {
    const {editingData} = this.props;
    const isEditing = result(editingData, 'type', '');
    const isEditingID = result(editingData, 'id', '');
    if (isEditing === 'editing') {
      this.props.gotoFuncEditContactApi({firstName: this.state.firstName, lastName: this.state.lastName, valueAge: this.state.valueAge, urlPhoto: this.state.urlPhoto, id: isEditingID});      
    } else {
      this.props.gotoFuncSaveContactApi({firstName: this.state.firstName, lastName: this.state.lastName, valueAge: this.state.valueAge, urlPhoto: this.state.urlPhoto});
    }
  }
  componentDidMount=() => {
    const {editingData} = this.props;
    const isEditing = result(editingData, 'type', '');
    const isfirstName = result(editingData, 'firstName', '');
    const islastName = result(editingData, 'lastName', '');
    const isAge = String(result(editingData, 'age', ''));
    const isPhoto = result(editingData, 'photo', '');
    if (isEditing === 'editing') {
      this.onChangeFirstNameText(isfirstName);
      this.onChangeLastNameText(islastName);
      this.onChangeTextAge(isAge);
      this.onChangePhotoText(isPhoto);
    }
  }
  render () {
    const {editingData} = this.props;
    const isEditing = result(editingData, 'type', '');
    return (
      <ScrollView contentContainerStyle={styles.bottomContainer} extraHeight={200}>
        <View>
          <View style={styles.containerContactTitle}>
            <Text style={styles.contactTitle}>{isEditing === 'editing' ? 'Edit Contact' : 'Add Contact'}</Text>
          </View>

          <View style={styles.containerSearch}>
            <View style={styles.containerSearchText}>
              <Text style={styles.searchText}>First Name<Text style={styles.strictRed}>*</Text></Text>
            </View>
            <TextInput
            style={styles.textBoxSearch}
            onChangeText={this.onChangeFirstNameText} placeholder='First Name, max 30 char'
            maxLength={30}
            value={this.state.firstName}
          />
          </View>
          {this.state.errorValueFirstName && this.state.firstName !== '' && <View style={styles.errorContainer}><Text style={styles.errorText}>First Name must at least 3 characters, max 30 characters</Text></View>}

          <View style={styles.containerSearch}>
            <View style={styles.containerSearchText}>
              <Text style={styles.searchText}>Last Name<Text style={styles.strictRed}>*</Text></Text>
            </View>
            <TextInput
            style={styles.textBoxSearch}
            onChangeText={this.onChangeLastNameText} placeholder='Last Name, max 30 char'
            maxLength={30}
            value={this.state.lastName}
          />
          </View>
          {this.state.errorValueLastName && this.state.lastName !== '' && <View style={styles.errorContainer}><Text style={styles.errorText}>Last Name must at least 3 characters, max 30 characters</Text></View>}
          <View style={styles.containerSearch}>
            <View style={styles.containerSearchText}>
              <Text style={styles.searchText}>Age<Text style={styles.strictRed}>*</Text></Text>
            </View>
            <TextInput
            style={styles.textBoxSearch}
            onChangeText={this.onChangeTextAge} placeholder='between 1 - 100'
            keyboardType='numeric'
            maxLength={3}
            value={this.state.valueAge}
          />
          </View>
          {this.state.errorValueAge && this.state.valueAge !== '' && <View style={styles.errorContainer}><Text style={styles.errorText}>Age must between 1-100</Text></View>}
          <View style={styles.containerSearch}>
            <View style={styles.containerSearchText}>
              <Text style={styles.searchText}>URL Photo<Text style={styles.strictRed}>*</Text></Text>
            </View>
            <TextInput
            style={styles.textBoxSearch}
            onChangeText={this.onChangePhotoText} placeholder='Type URL Photo'
            value={this.state.urlPhoto}
          />
 
          </View>
        </View>
        <View>
          <View style={styles.containerNote}>
            <Text style={styles.searchText}><Text style={styles.strictRed}>*</Text>: must be fill</Text>
          </View>
          <View style={styles.containerButtonShow}>            
            <TouchableOpacity style={styles.buttonShowMore} disabled={this.state.errorValueAge || this.state.firstName === '' || this.state.lastName === '' || this.state.Agetype === '' || this.state.urlPhoto === ''} onPress={this.onSubmitForm}>
              <Text style={styles.showmoreText}>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }
}





export default ContactFormComponent;