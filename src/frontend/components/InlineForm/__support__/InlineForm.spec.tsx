/**
 * # Inline Form (Test)
 *
 *
 */

import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { InlineForm } from '..';

const mockSubmitHandler = jest.fn();

beforeEach(() => {
  render(
    <InlineForm
      triggerContent={<div>Example Content</div>}
      fieldName="exampleName"
      onSubmit={mockSubmitHandler}
    />,
  );
});

describe('InlineForm', () => {
  it('should display a trigger with content', () => {
    const triggerElement = screen.getByRole('button');
    expect(triggerElement).toBeInTheDocument();
    expect(triggerElement).toHaveTextContent('Example Content');
  });

  it('should display an input with controls when activated', () => {
    const triggerElement = screen.getByRole('button');
    userEvent.click(triggerElement);

    const inputElement = screen.getByRole('textbox');
    expect(inputElement).toBeInTheDocument();

    const confirmElement = screen.getByRole('button', {
      name: 'Confirm',
    });
    expect(confirmElement).toBeInTheDocument();

    const cancelElement = screen.getByRole('button', {
      name: 'Cancel',
    });
    expect(cancelElement).toBeInTheDocument();
  });

  it('should display again the trigger when canceled', () => {
    let triggerElement = screen.getByRole('button');
    userEvent.click(triggerElement);

    const cancelElement = screen.getByRole('button', {
      name: 'Cancel',
    });
    userEvent.click(cancelElement);

    triggerElement = screen.getByRole('button', {
      name: 'Example Content',
    });
    expect(triggerElement).toBeInTheDocument();
  });

  it('should display an loading indicator while the submission is pending', async () => {
    const triggerElement = screen.getByRole('button');
    userEvent.click(triggerElement);

    const inputElement = screen.getByRole('textbox');
    await userEvent.type(inputElement, 'Example Value');

    const confirmElement = screen.getByRole('button', {
      name: 'Confirm',
    });
    userEvent.click(confirmElement);

    await waitFor(() => {
      expect(
        screen.getByRole('img', {
          hidden: true,
        }),
      ).toBeInTheDocument();
    });
  });

  it('should invoke a form submit when confirmed', async () => {
    const triggerElement = screen.getByRole('button');
    userEvent.click(triggerElement);

    const inputElement = screen.getByRole('textbox');
    await userEvent.type(inputElement, 'Example Value');

    const confirmElement = screen.getByRole('button', {
      name: 'Confirm',
    });
    userEvent.click(confirmElement);

    await screen.findByRole('button', {
      name: 'Example Content',
    });

    expect(mockSubmitHandler).toHaveBeenCalledTimes(1);
    expect(mockSubmitHandler).toHaveBeenCalledWith('Example Value');
  });

  it('should display an error if one occurs as part of the submission', async () => {
    mockSubmitHandler.mockReturnValueOnce(Promise.reject(new Error('Example Error')));

    const triggerElement = screen.getByRole('button');
    userEvent.click(triggerElement);

    const inputElement = screen.getByRole('textbox');
    await userEvent.type(inputElement, 'Insufficient Value');

    const confirmElement = screen.getByRole('button', {
      name: 'Confirm',
    });
    userEvent.click(confirmElement);

    await screen.findByRole('alert');

    const errorElement = screen.getByRole('alert');
    expect(errorElement).toHaveTextContent('Example Error');
  });
});
