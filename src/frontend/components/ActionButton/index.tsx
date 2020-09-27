/**
 * # Action Button
 *
 *
 */

import type { FunctionComponent } from 'react';
import type { FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type ActionButtonContentProps = {
  /**
   * Content
   */
  children: string;
  /**
   * Configuration for an FontAwesome icon
   */
  iconProps: FontAwesomeIconProps;
};

export const ActionButtonContent: FunctionComponent<ActionButtonContentProps> = ({
  iconProps,
  children,
}) => (
  <div className="inline-flex items-center px-2 py-1">
    <FontAwesomeIcon {...iconProps} />
    <span className="ml-2">{children}</span>
  </div>
);

type ActionButtonProps = JSX.IntrinsicElements['button'] & ActionButtonContentProps;

export const ActionButton: FunctionComponent<ActionButtonProps> = ({
  iconProps,
  children,
  ...buttonProps
}) => (
  <button {...buttonProps}>
    <ActionButtonContent iconProps={iconProps}>{children}</ActionButtonContent>
  </button>
);
