import {SAVE_CONTACT_LIST, CLEAR_CONTACT_LIST} from '../actions/index.actions';

export default function contactList (state = [], action) {
  switch (action.type) {
  case SAVE_CONTACT_LIST: {
    return action.payload;
  }
  case CLEAR_CONTACT_LIST: {
    return [];
  }
  default: {
    return state;
  }
  }
}
