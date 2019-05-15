// Test away
import React from 'react';
import rendered from 'react-test-renderer';
import Dashboard from './Dashboard';

//tests passed
describe('<Dashboard />', () => {
  it('runs the tests', () => {
    expect(true).toBe(true)
  });
  // 2. write this test
  it('matches snapshot', () => {
    const tree = rendered.create(<Dashboard />); // generates a DOM tree

    // snapshots are a JSON representation of the DOM tree
    expect(tree.toJSON()).toMatchSnapshot();
  });

  

});