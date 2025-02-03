export class DateUtil {
  static getDateAndTime(date: string | Date): { date: string; time: string } {
    const formattedDate = new Date(date);
    const dateStr = formattedDate.toISOString().split('T')[0];
    const timeStr = formattedDate.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' });

    return { date: dateStr, time: timeStr };
  }
}
