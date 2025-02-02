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
