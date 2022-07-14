import React from 'react';
import renderer from 'react-test-renderer';
import HomePage from '../Home.page';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

jest.mock('../Home.page');
const store = createStore(() => ({}));

describe('HomePage : HomePage', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <HomePage/>
      </Provider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
