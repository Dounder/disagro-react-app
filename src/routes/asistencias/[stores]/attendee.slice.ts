import { StateCreator } from 'zustand';
import { AttendeeState } from '../[interfaces]';

export const createAttendeeSlice: StateCreator<AttendeeState> = (set) => ({
  firstName: 'test',
  lastName: 'test',
  email: 'kafij48917@eluxeer.com',
  attendanceDate: new Date(),

  setFirstName: (firstName: string) => set({ firstName }),
  setLastName: (lastName: string) => set({ lastName }),
  setEmail: (email: string) => set({ email }),
  setAttendanceDate: (attendanceDate: string) => set({ attendanceDate: new Date(attendanceDate) }),
});
