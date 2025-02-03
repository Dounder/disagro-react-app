import { api } from '@/api';
import { AttendanceById } from '../[interfaces]';

export const getAttendanceByIdAction = async (attendanceId: number): Promise<AttendanceById> => {
  try {
    const { data } = await api.get<AttendanceById>(`/attendances/${attendanceId}`);

    return data;
  } catch (error) {
    console.log('Error: ', error);
    throw new Error('Unexpected error');
  }
};
