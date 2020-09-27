/**
 * # Loading Indicator (Test)
 *
 *
 */

import React from 'react';
import { render, screen } from '@testing-library/react';

import { LoadingIndicator } from '..';

describe('LoadingIndicator', () => {
  it('should display a visual element', () => {
    render(<LoadingIndicator />);

    const element = screen.getByRole('img', {
      hidden: true,
    });
    expect(element).toBeInTheDocument();
  });
});
