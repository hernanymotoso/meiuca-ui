import React from 'react';
import { render, screen } from '@testing-library/react';

import { Subtitle } from './Subtitle';

describe('Subtitle component', () => {
  it('should render the Subtitle', () => {
    render(<Subtitle>Subtitle test</Subtitle>);
    expect(screen.getByRole('heading')).toBeTruthy();
  });

  it('should render the Subtitle with children = Subtitle test', () => {
    const { getByText } = render(<Subtitle>Subtitle teste</Subtitle>);
    expect(getByText('Subtitle teste')).toBeTruthy();
  });
});
