import React from 'react';
import renderer from 'react-test-renderer';
import ContactListComponent from '../ContactList.component';

jest.mock('../ContactList.component');
describe('ContactListComponent', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <ContactListComponent navigateTo={jest.fn()} changeLanguage={jest.fn()}/>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
