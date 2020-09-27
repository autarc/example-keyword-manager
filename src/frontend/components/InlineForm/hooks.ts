/**
 * # Inline Form (Hooks)
 *
 *
 */

import type { MouseEvent, FormEvent } from 'react';
import { useState, useCallback } from 'react';

export type UseInlineFormParams = {
  /**
   * Property name for the input field
   */
  fieldName: string;
  /**
   * Handler to process the input - it has to return a promise for being aware of async operations
   *
   * @param value - input content
   */
  onSubmit(value: string): Promise<unknown>;
};

/**
 *
 *
 */
export function useInlineForm({ fieldName, onSubmit }: UseInlineFormParams) {
  const [isFormActive, setIsFormActive] = useState(false);
  const [isSubmitPending, setIsSubmitPending] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const activateForm = useCallback(() => {
    setIsFormActive(true);
  }, []);

  const deactivateForm = useCallback((event?: MouseEvent) => {
    if (event) {
      event.preventDefault();
    }

    setError(null);
    setIsFormActive(false);
  }, []);

  const handleSubmit = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      const formData = new FormData(event.currentTarget);
      const value = formData.get(fieldName) as string;

      try {
        setIsSubmitPending(true);

        await onSubmit(value);

        deactivateForm();
      } catch (error) {
        setError(error);
      } finally {
        setIsSubmitPending(false);
      }
    },
    [fieldName, onSubmit],
  );

  return {
    isFormActive,
    isSubmitPending,
    error,
    activateForm,
    deactivateForm,
    handleSubmit,
  };
}
