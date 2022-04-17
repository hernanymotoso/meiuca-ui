import React from 'react';
import { render, screen } from '@testing-library/react';

import { Paragraph } from './Paragraph';

describe('Paragraph component', () => {
  it('should render the Paragraph', () => {
    render(<Paragraph aria-label="Paragraph Test">Paragraph test</Paragraph>);
    expect(screen.getByLabelText(/paragraph test/i)).toBeTruthy();
  });

  it('should render the Paragraph with children = Paragraph test', () => {
    const { getByText } = render(<Paragraph>Paragraph teste</Paragraph>);
    expect(getByText('Paragraph teste')).toBeTruthy();
  });
});
