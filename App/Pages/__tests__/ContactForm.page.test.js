import React from 'react';
import renderer from 'react-test-renderer';
import ContactFormPage from '../ContactForm.page';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

jest.mock('../ContactForm.page');
const store = createStore(() => ({}));

describe('ContactForm : ContactForm', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <ContactFormPage/>
      </Provider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
