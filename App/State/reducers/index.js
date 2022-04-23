import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import contactList from './contactList.reducer';

const appReducers = combineReducers({
  form: formReducer,
  contactList
});

const rootReducer = (state, action) => {
  return appReducers(state, action);
};

export default rootReducer;
