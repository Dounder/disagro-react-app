import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

import { AttendeeState, SelectionState, ValidationState } from '../[interfaces]';
import { createAttendeeSlice } from './attendee.slice';
import { createSelectionSlice } from './selection.slice';
import { createValidationSlice } from './validation.slice';

type SharedState = AttendeeState & SelectionState & ValidationState;

export const useAttendanceStore = create<SharedState>()(
  devtools((...a) => ({
    ...createAttendeeSlice(...a),
    ...createSelectionSlice(...a),
    ...createValidationSlice(...a),
  }))
);
