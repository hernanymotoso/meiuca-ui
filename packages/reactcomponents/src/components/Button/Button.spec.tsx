import React from 'react';
import { render, screen } from '@testing-library/react';

import { Button } from './Button';

describe('Button component', () => {
  it('should render the primary button', () => {
    render(<Button>Button test</Button>);
    expect(screen.getByRole('button')).toBeTruthy();
  });

  it('should render the Button with children = Button test', () => {
    const { getByText } = render(<Button>Button teste</Button>);
    expect(getByText('Button teste')).toBeTruthy();
  });
});
