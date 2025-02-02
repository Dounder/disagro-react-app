import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

import { AttendeeState } from '../[interfaces]';
import { createAttendeeSlice } from './attendee.slice';

type SharedState = AttendeeState;

export const useAttendanceStore = create<SharedState>()(
  devtools((...a) => ({
    ...createAttendeeSlice(...a),
  }))
);
