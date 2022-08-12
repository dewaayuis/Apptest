import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {result} from 'lodash';
import AboutUsComponent from '../Component/AboutUs.component';
import {saveContactApi, editContactApi} from '../State/function/generalFunction';

class AboutUsComponentScreen extends React.Component {
  static propTypes = {
    navigation: PropTypes.object,
    funcsaveContactApi: PropTypes.func,
    funceditContactApi: PropTypes.func
  }
  gotoFuncSaveContactApi=(data={})=>{
    this.props.funcsaveContactApi(data, this.props)
  }
  gotoFuncEditContactApi=(data={})=>{
    this.props.funceditContactApi(data, this.props)
  }

  render() {
      const {navigation} = this.props;
      const editingData = result(this.props, 'route.params.dataEditing', {});
    return (
      <AboutUsComponent navigation={navigation} gotoFuncSaveContactApi={this.gotoFuncSaveContactApi} editingData={editingData} gotoFuncEditContactApi={this.gotoFuncEditContactApi}/>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  funcsaveContactApi:(data, navigationOption) => dispatch(saveContactApi(data, navigationOption)),
  funceditContactApi:(data, navigationOption) => dispatch(editContactApi(data, navigationOption)),
});

export default connect(null, mapDispatchToProps)(AboutUsComponentScreen);