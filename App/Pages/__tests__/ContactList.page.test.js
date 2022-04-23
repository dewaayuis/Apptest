import React from 'react';
import renderer from 'react-test-renderer';
import ContactListPage from '../ContactList.page';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

jest.mock('../ContactList.page');
const store = createStore(() => ({}));

describe('ContactListPage : ContactListPage', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <ContactListPage/>
      </Provider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
