/**
 * # Error Message
 *
 *
 */

import type { FunctionComponent } from 'react';
import React from 'react';

type ErrorMessageProps = {
  /**
   * Error descriptor
   */
  error?: Error | null;
};

export const ErrorMessage: FunctionComponent<ErrorMessageProps> = ({ error }) => {
  if (!error) {
    return null;
  }

  return (
    <div className="py-4 text-red-400" role="alert">
      {error.message}
    </div>
  );
};
