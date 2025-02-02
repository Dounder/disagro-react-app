import { ItemSelection } from './selection.interface';

export interface AttendeeState {
  firstName: string;
  lastName: string;
  email: string;
  attendanceDate: Date;

  setFirstName: (firstName: string) => void;
  setLastName: (lastName: string) => void;
  setEmail: (email: string) => void;
  setAttendanceDate: (attendanceDate: string) => void;
}

export interface SelectionState {
  items: ItemSelection[];

  addItem: (item: ItemSelection) => void;
  removeItem: (itemId: string) => void;
}
