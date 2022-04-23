import React from 'react';
import renderer from 'react-test-renderer';
import ContactFormComponent from '../ContactForm.component';

jest.mock('../ContactForm.component');
describe('ContactFormComponent', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <ContactFormComponent navigateTo={jest.fn()} changeLanguage={jest.fn()}/>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
