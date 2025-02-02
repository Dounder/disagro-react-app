import { api } from '@/api';
import { Attendance, CreateAttendance, SelectionItem } from '../[interfaces]';

export const createAttendanceAction = async (attendance: CreateAttendance): Promise<Attendance> => {
  try {
    const { items, attendanceDate, ...user } = attendance;
    const { products, services } = cleanAndSplitItems(items);

    const { data } = await api.post<Attendance>('/attendances', { user, attendanceDate, products, services });

    return data;
  } catch (error) {
    console.log('Error: ', error);
    throw new Error('Unexpected error');
  }
};

const cleanAndSplitItems = (items: SelectionItem[]) => {
  const products = items
    .filter((item) => item.type === 'producto')
    .map(({ value, price }) => ({ id: value, price: Number(price) }));
  const services = items
    .filter((item) => item.type === 'servicio')
    .map(({ value, price }) => ({ id: value, price: Number(price) }));

  return { products, services };
};
