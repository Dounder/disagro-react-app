import { api } from '@/api';
import { UserAttendanceList } from '../[interfaces]';

export const getAttendancesByUserAction = async (userId: number): Promise<UserAttendanceList[]> => {
  try {
    const { data } = await api.get<UserAttendanceList[]>(`/attendances/user/${userId}`);

    return data;
  } catch (error) {
    console.log('Error: ', error);
    throw new Error('Unexpected error');
  }
};
