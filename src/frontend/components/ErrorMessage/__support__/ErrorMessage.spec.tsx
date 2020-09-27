/**
 * # Error Message (Test)
 *
 *
 */

import React from 'react';
import { render, screen } from '@testing-library/react';

import { ErrorMessage } from '..';

describe('ErrorMessage', () => {
  it('should display an error message', () => {
    render(<ErrorMessage error={new Error('Test')} />);

    const errorElement = screen.getByRole('alert');
    expect(errorElement).toBeInTheDocument();
  });

  it('should not display something if no error information is available', () => {
    render(<ErrorMessage />);

    const errorElement = screen.queryByRole('alert');
    expect(errorElement).not.toBeInTheDocument();
  });
});
