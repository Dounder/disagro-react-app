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

export interface SelectionStateItem {
  id: number;
  price: string;
}

export interface SelectionState {
  products: SelectionStateItem[];
  services: SelectionStateItem[];

  addProduct: (product: SelectionStateItem) => void;
  removeProduct: (productId: number) => void;

  addService: (service: SelectionStateItem) => void;
  removeService: (serviceId: number) => void;
}
