import React from 'react';
import renderer from 'react-test-renderer';

import { Button } from '../index';

describe('Button', () => {
  it('should render default button', () => {
    const tree = renderer.create(<Button>Default Button</Button>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
