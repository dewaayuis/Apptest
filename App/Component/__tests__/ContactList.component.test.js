import React from 'react';
import renderer from 'react-test-renderer';
import ContactListComponent from '../Login.component';

jest.mock('../Login.component');
describe('LoginComponent', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <LoginComponent navigateTo={jest.fn()} changeLanguage={jest.fn()}/>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
