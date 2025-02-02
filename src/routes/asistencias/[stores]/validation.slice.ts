import { ZodError } from 'zod';
import { StateCreator } from 'zustand';
import { ValidationState } from '../[interfaces]';
import { attendeeSchema } from '../[schemas]';

export const createValidationSlice: StateCreator<ValidationState> = (set, get) => ({
  validate: () => {
    try {
      const state = get();
      attendeeSchema.parse(state);

      return { isValid: true, errors: {} };
    } catch (error) {
      let errors: Record<string, string> = {};

      if (error instanceof ZodError) {
        errors = error.errors.reduce(
          (acc, curr) => {
            acc[curr.path[0]] = curr.message;
            return acc;
          },
          {} as Record<string, string>
        );

        return { isValid: false, errors };
      }

      return { isValid: false, errors };
    }
  },
});
