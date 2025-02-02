import { SelectionItem } from './selection.interface';

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
  items: SelectionItem[];

  addItem: (item: SelectionItem) => void;
  removeItem: (itemId: string) => void;
}

export interface CreateAttendance {
  firstName: string;
  lastName: string;
  email: string;
  attendanceDate: Date;
  items: SelectionItem[];
}
