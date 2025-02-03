import { User } from './user-attendance.interface';

export interface AttendanceById {
  id: number;
  attendanceDate: Date;
  services_original_total: string;
  services_discount_amount: string;
  services_discount_rate: string;
  services_final_total: string;
  products_original_total: string;
  products_discount_amount: string;
  products_discount_rate: string;
  products_final_total: string;
  final_total: string;
  createdAt: Date;
  deletedAt: Date | null;
  user: User;
  attendanceProducts: AttendanceProduct[];
  attendanceServices: AttendanceService[];
}

export interface AttendanceProduct {
  id: number;
  price: string;
  product: Product;
}

export interface Product {
  id: number;
  name: string;
}

export interface AttendanceService {
  id: number;
  price: string;
  service: Product;
}
