import React from 'react';
import { render, screen } from '@testing-library/react';
import CardContent from '..';

describe('CardContent', () => {
  it('teste', async () => {
    render(
      <CardContent
        newContent={{
          content: 'Content test for create an content',
          description: 'Description test for create an description',
          title: 'Title test for create an title',
          url: 'https://www.hernanymotoso.com.br/',
        }}
      />,
    );

    expect(screen.getByText('Content test for create an content')).toBeTruthy();
    expect(
      screen.getByText('Description test for create an description'),
    ).toBeTruthy();
    expect(screen.getByText('Title test for create an title')).toBeTruthy();
  });
});
