import React from 'react';
import {Image, Text, View, TouchableOpacity, TextInput, ScrollView, Modal} from 'react-native';
import PropTypes from 'prop-types';
import {result, toLower, size} from 'lodash';
import styles from './Home.styles';




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
  


  // goEdit = (dataEditing = {}) => () => {
  //   this.props.navigation.navigate('EditAccount', {dataEditing});
  // }
  // goDelete = (dataDelete = {}) => () => {
  //   this.setState({deleteDataModal: dataDelete});
  //   this.setState({modalDeleteVisible: true});
  // }

  // renderMappingContact = (data, i) => {
  //   const nameContactFirstName = result(data, 'firstName', '');
  //   const nameContactLastName = result(data, 'lastName', '');
  //   const ageContact = result(data, 'age', '');
  //   const urlContact = result(data, 'photo', '');
  //   // for simple filtering
  //   const filterName = String(toLower(result(data, 'firstName', ''))).indexOf(toLower(this.state.filtering));
  //   const filterNameLast = String(toLower(result(data, 'lastName', ''))).indexOf(toLower(this.state.filtering));
  //   const checkFilter = this.state.filtering !== '';
  //   const indexOffilter = (filterName !== -1 || filterNameLast !== -1) && checkFilter;

  //   if (!checkFilter || indexOffilter) {
  //     return (
  //       <View key={i}> 
  //         <View style={styles.containercollcection}>
  //           <TouchableOpacity style={styles.cardContact}>
  //             <View style={styles.flexArea}>
  //               <View>
  //                 <Text style={styles.contactNameAge}>{nameContactFirstName + ' ' + nameContactLastName}</Text>
  //               </View>
  //               <View>
  //                 <Text style={styles.contactNameAge}>Age : {ageContact}</Text>
  //               </View>

  //               <View style={styles.containerEditDelete}>
  //                 <View style={styles.paddingDeleteEditBox}>
  //                   <TouchableOpacity onPress={this.goEdit({...data, type: 'editing'})}>
  //                     <Text style={styles.editText}>EDIT</Text>
  //                   </TouchableOpacity>
  //                 </View>
  //                 <TouchableOpacity onPress={this.goDelete(data)}>
  //                   <Text style={styles.deleteText}>DELETE</Text>
  //                 </TouchableOpacity>
  //               </View>
  //             </View>
  //             <View>
  //               <Image source={{uri: urlContact}} style={styles.contactImage}/>
  //             </View>
  //           </TouchableOpacity>
  //         </View>
  //       </View>
  //     );
  //   } else {
  //     return null;
  //   }
  // }

  goCreate = () => {
    this.props.navigation.navigate('CreateAccount');
  }
  
  // onChangeText=(nextTexttype = '') => {
  //   this.setState({filtering: nextTexttype});
  // }
  // executeDelete=() => {
  //   this.setState({modalDeleteVisible: false});
  //   this.props.funcdeleteContactApi(result(this.state, 'deleteDataModal', {}));
  // }
  // closeModal=() => {
  //   this.setState({modalDeleteVisible: false});
  // }
  render () {
    const {contactList = [], funcgetContactFromAPI} = this.props;
    return (
      <ScrollView contentContainerStyle={styles.bottomContainer} extraHeight={200}>

        <Modal visible={this.state.modalDeleteVisible} animationType='fade'
          transparent={true} >
          {/* <View style={styles.containerModal}>
            <View style={styles.containerModalInner}>
              <View style={styles.containerBoxWrapper}>
                <View style={styles.conatinerBoxTitle}>
                  <Text style={styles.conatinerBoxTitleText}>Are You Sure to Delete this Contact</Text>
                </View>
                <View style={styles.conatinerBoxTitleValue}>
                  <Text style={styles.conatinerBoxTitleTextValue}>Name : {result(this.state, 'deleteDataModal.firstName', '')} {result(this.state, 'deleteDataModal.lastName', '')}</Text>
                  <Text style={styles.conatinerBoxTitleTextValue}>Age : {String(result(this.state, 'deleteDataModal.age', ''))}</Text>
                </View>
                <View style={styles.containerWrapperButtonBox}>
                  <View style={styles.buttonOneBoxContainer}>
                    <TouchableOpacity style={styles.buttonOneBox} onPress={this.closeModal}>
                      <Text style={styles.buttonOneBoxText}>Close</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.buttonTwoBoxContainer}>
                    <TouchableOpacity style={styles.buttonTwoBox} onPress={this.executeDelete}>
                      <Text style={styles.buttonTwoBoxText}>Delete</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </View> */}

        </Modal>
        
        {/* <View style={styles.containerContactTitle}>
          <Text style={styles.contactTitle}>Contact List</Text>
    </View> */}

        {/* <View style={styles.containerSearch}>
          <View style={styles.containerSearchText}>
            <Text style={styles.searchText}>Search or Filter</Text>
          </View> */}

          <View style={styles.Cobacontainer}>
            <Text style={styles.Cobatitle}>Bank Sinarmas</Text>

          <View style={styles.Cobagaris} />

          <Text style={styles.CobaTulisan}>Selamat Datang Pelanggan Terhormat, Apa yang ingin anda lakukan ?</Text>

         
          {/* <TextInput
            style={styles.cobaTextInput}
            onChangeText={this.onChangeText} placeholder='Input Your Username'
          />
          
          <TextInput
            style={styles.cobaTextInput}
            onChangeText={this.onChangeText} placeholder='Input Your Password'
            secureTextEntry={true}
          /> */}
          
          {/* <View style ={styles.isi}> */}


{/* 
          <TouchableOpacity style={styles.buttonLiveChat}>
            <Text style={styles.textButton}>Login</Text>
          </TouchableOpacity> */}


        <TouchableOpacity style={styles.buttonLiveChat} onPress={this.goCreate}>
          <Text style={styles.textButton}>Start Live Chat</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonLiveChat} onPress={this.goCreate}>
          <Text style={styles.textButton}>About Us</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonLiveChat} onPress={this.goCreate}>
          <Text style={styles.textButton}>Log Out</Text>
        </TouchableOpacity>

          </View>


        {/* <View>
          { contactList.map(this.renderMappingContact) }
        </View>
        {size(contactList) === 0 &&
        <View style={styles.containerButtonShow}>            
          <TouchableOpacity style={styles.buttonShowMore} onPress={funcgetContactFromAPI}>
            <Text style={styles.showmoreText}>Reload</Text>
          </TouchableOpacity>
        </View>
  } */}
      </ScrollView>
    );
  }
}

export default HomeScreenComponent;