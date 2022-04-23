import React from 'react';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';
import {View} from 'react-native';
import MainRoutes from './Routes/index.routes';
import {getContactFromAPI} from './State/function/generalFunction';

const mapDispatchToProps = (dispatch) => ({
  funcgetContactFromAPI: () => {
    dispatch(getContactFromAPI())
  }
});

class AppComponent extends React.Component {
  static propTypes = {
    funcgetContactFromAPI: PropTypes.func
  }

  componentDidMount(){
    this.props.funcgetContactFromAPI();
  }

  render () {
    const {} = this.props;
    return (
      <View style={{flexGrow: 1}}>
          <MainRoutes />
      </View>
    );
  }
}

export default connect(null, mapDispatchToProps)(AppComponent);
