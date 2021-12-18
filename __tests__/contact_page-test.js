import React from 'react';
import renderer from 'react-test-renderer';
import ContactsPage from '../src/containers/pages/contact_page';

test('renders correctly', () => {
  const tree = renderer.create(<ContactsPage />).toJSON();
  expect(tree).toMatchSnapshot();
});
