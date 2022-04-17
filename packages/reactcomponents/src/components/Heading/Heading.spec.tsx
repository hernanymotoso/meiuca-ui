import React from 'react';
import { render, screen } from '@testing-library/react';

import { Heading } from './Heading';

describe('Heading component', () => {
  it('should render the Heading', () => {
    render(<Heading>Heading test</Heading>);
    expect(screen.getByRole('heading')).toBeTruthy();
  });

  it('should render the Heading with children = Heading test', () => {
    const { getByText } = render(<Heading>Heading teste</Heading>);
    expect(getByText('Heading teste')).toBeTruthy();
  });
});
