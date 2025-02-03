import { StateCreator } from 'zustand';
import { AttendeeState } from '../[interfaces]';

export const createAttendeeSlice: StateCreator<AttendeeState> = (set, get) => ({
  firstName: '',
  lastName: '',
  email: '',
  attendanceDate: new Date(),

  setFirstName: (firstName: string) => set({ firstName }),
  setLastName: (lastName: string) => set({ lastName }),
  setEmail: (email: string) => set({ email }),
  setAttendanceDate: (attendanceDate: string) => set({ attendanceDate: new Date(attendanceDate) }),

  resetAttendeeState: () => set({ firstName: '', lastName: '', email: '', attendanceDate: new Date() }),
});
