/**
 * # Interactive Label
 *
 *
 */

import type { ReactNode, FunctionComponent } from 'react';
import type { FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faMinusCircle } from '@fortawesome/free-solid-svg-icons';
import clsx from 'clsx';

import { ActionButton } from '~/frontend/components/ActionButton';

import styles from './styles.module.css';

const deleteIconProps: FontAwesomeIconProps = {
  icon: faMinusCircle,
  className: 'text-red-700',
};

type InteractiveLabelProps = {
  children: ReactNode;
  onDelete?(): unknown;
};

export const InteractiveLabel: FunctionComponent<InteractiveLabelProps> = ({
  children,
  onDelete,
}) => {
  return (
    <div className="flex flex-wrap items-center">
      <div className={clsx('flex-auto', styles['label'])} role="term">
        {children}
      </div>
      <div className={clsx('px-4', styles['label-menu'])}>
        {onDelete && (
          <ActionButton iconProps={deleteIconProps} onClick={onDelete}>
            Delete
          </ActionButton>
        )}
      </div>
    </div>
  );
};
