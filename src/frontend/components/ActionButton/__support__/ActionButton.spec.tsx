/**
 * # Action Button (Test)
 *
 *
 */

import React from 'react';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { ActionButton } from '..';

const mockClickHandler = jest.fn();

beforeEach(() => {
  render(
    <ActionButton
      iconProps={{
        icon: faPlusSquare,
      }}
      onClick={mockClickHandler}
    >
      Example
    </ActionButton>,
  );
});

describe('ActionButton', () => {
  it('should display a button with content', () => {
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveTextContent('Example');
  });

  it('should handle a click', () => {
    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);

    expect(mockClickHandler).toHaveBeenCalledTimes(1);
  });
});
