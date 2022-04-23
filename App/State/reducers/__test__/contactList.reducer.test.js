import contactList from '../contactList.reducer';
import {SAVE_CONTACT_LIST, CLEAR_CONTACT_LIST} from '../../actions/index.actions';

describe('Reducer: contactList', () => {

  it('Should return default state by default', () => {
    expect(contactList([], '')).toEqual([]);
  });

  it('Should set contact list', () => {
    const action = {
      type: SAVE_CONTACT_LIST,
      payload: {test: 'wasd'}
    };
    const expectedResult = {test: 'wasd'};
    expect(contactList([], action)).toEqual(expectedResult);
  });

  it('Should reset contact list', () => {
    const action = {
      type: CLEAR_CONTACT_LIST
    };
    const expectedResult = [];
    expect(contactList([], action)).toEqual(expectedResult);
  });

});
