/**
 * # Inline Form
 *
 * In place single input form.
 */

import type { FunctionComponent, ReactNode } from 'react';
import type { FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

import type { UseInlineFormParams } from './hooks';
import { useInlineForm } from './hooks';
import { ActionButton } from '~/frontend/components/ActionButton';
import { LoadingIndicator } from '~/frontend/components/LoadingIndicator';
import { ErrorMessage } from '~/frontend/components/ErrorMessage';

type InlineFormProps = UseInlineFormParams & {
  /**
   * Content of the trigger
   */
  triggerContent: ReactNode;
  /**
   * Props for the input field
   */
  inputProps?: JSX.IntrinsicElements['input'];
};

const confirmIconProps: FontAwesomeIconProps = {
  icon: faCheck,
  className: 'text-green-700',
};

const cancelIconProps: FontAwesomeIconProps = {
  icon: faTimes,
  className: 'text-red-700',
};

export const InlineForm: FunctionComponent<InlineFormProps> = ({
  triggerContent,
  fieldName,
  onSubmit,
  inputProps,
}) => {
  const {
    isFormActive,
    activateForm,
    handleSubmit,
    isSubmitPending,
    deactivateForm,
    error,
  } = useInlineForm({
    fieldName,
    onSubmit,
  });

  if (isFormActive === false) {
    return (
      <button
        className="py-2 bg-gray-200 border border-gray-400 rounded-sm hover:bg-gray-300"
        onClick={activateForm}
      >
        {triggerContent}
      </button>
    );
  }

  return (
    <>
      <form className="inline-flex flex-wrap items-center" onSubmit={handleSubmit}>
        <input
          className="p-2 mr-8 border outline-none"
          disabled={isSubmitPending}
          name={fieldName}
          required
          /* eslint-disable-next-line jsx-a11y/no-autofocus -- temporary enabled for the flow */
          autoFocus
          {...inputProps}
        />
        <div className="inline-flex py-2">
          {isSubmitPending ? (
            <LoadingIndicator />
          ) : (
            <>
              <ActionButton type="submit" iconProps={confirmIconProps}>
                Confirm
              </ActionButton>
              <ActionButton className="ml-3" iconProps={cancelIconProps} onClick={deactivateForm}>
                Cancel
              </ActionButton>
            </>
          )}
        </div>
      </form>
      <ErrorMessage error={error} />
    </>
  );
};
