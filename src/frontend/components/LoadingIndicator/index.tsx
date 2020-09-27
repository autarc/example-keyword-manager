/**
 * # Loading Indicator
 *
 *
 */

import type { FunctionComponent } from 'react';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

export const LoadingIndicator: FunctionComponent = () => {
  return <FontAwesomeIcon className="animate-spin" icon={faSpinner} />;
};
