import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {result} from 'lodash';
import HomeScreenComponent from '../Component/ContactList.component';
import {getContactFromAPI, deleteContactApi} from '../State/function/generalFunction';

class HomeScreen extends React.Component {
  static propTypes = {
    contactList: PropTypes.array,
    navigation: PropTypes.object,
    funcgetContactFromAPI: PropTypes.func,
    funcdeleteContactApi: PropTypes.func
  }

  render() {
      const {contactList, navigation, funcgetContactFromAPI, funcdeleteContactApi} = this.props;
    return (
      <HomeScreenComponent contactList={contactList} navigation={navigation} funcgetContactFromAPI={funcgetContactFromAPI} funcdeleteContactApi={funcdeleteContactApi}/>
    );
  }
}

const mapStateToProps = (state) => {
  const contactList = result(state,'contactList', []);
  return {
    contactList
  };
};
const mapDispatchToProps = (dispatch) => ({
  funcgetContactFromAPI: () => {
    dispatch(getContactFromAPI())
  },
  funcdeleteContactApi: (id) => {
    dispatch(deleteContactApi(id))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);