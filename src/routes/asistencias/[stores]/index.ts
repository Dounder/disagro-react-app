import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

import { AttendeeState, SelectionState } from '../[interfaces]';
import { createAttendeeSlice } from './attendee.slice';
import { createSelectionSlice } from './selection.slice';

type SharedState = AttendeeState & SelectionState;

export const useAttendanceStore = create<SharedState>()(
  devtools((...a) => ({
    ...createAttendeeSlice(...a),
    ...createSelectionSlice(...a),
  }))
);
