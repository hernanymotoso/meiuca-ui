import React from 'react';
import { render } from '@testing-library/react';

import { Shape } from './Shape';

describe('Shape component', () => {
  it('should render the Shape with children = Shape test', () => {
    const { getByText } = render(<Shape>Shape teste</Shape>);
    expect(getByText('Shape teste')).toBeTruthy();
  });
});
