/**
 * # Interactive Label (Test)
 *
 *
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { InteractiveLabel } from '..';

describe('InteractiveLabel', () => {
  it('should display an element with content', () => {
    render(<InteractiveLabel>Example Content</InteractiveLabel>);

    const element = screen.getByRole('term');
    expect(element).toBeInTheDocument();
  });

  it('should invoke a delete action when the provided handler is triggered', () => {
    const mockSubmitHandler = jest.fn();
    render(<InteractiveLabel onDelete={mockSubmitHandler}>Example Content</InteractiveLabel>);

    const deleteElement = screen.getByRole('button', {
      name: 'Delete',
    });
    userEvent.click(deleteElement);

    expect(mockSubmitHandler).toBeCalledTimes(1);
  });
});
