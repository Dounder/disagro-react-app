export interface UserAttendanceList {
  id: number;
  attendanceDate: Date;
  services_discount_rate: string;
  products_discount_rate: string;
  final_total: string;
  createdAt: Date;
  deletedAt: Date | null;
  user: User;
}

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
}
