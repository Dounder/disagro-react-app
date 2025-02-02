import { z } from 'zod';

export const ItemTypeSchema = z.enum(['producto', 'servicio']);
export type ItemType = z.infer<typeof ItemTypeSchema>;

export const SelectionItemSchema = z.object({
  id: z.string().min(1, { message: 'El ID es requerido' }),
  value: z.any(),
  name: z.string().min(1, { message: 'El nombre es requerido' }),
  price: z.coerce.number().min(1, { message: 'El precio debe ser mayor a 0' }),
  type: ItemTypeSchema,
});

// Infer the type for the selection item
export type SelectionItem = z.infer<typeof SelectionItemSchema>;

export const attendeeSchema = z.object({
  firstName: z.string().nonempty({ message: 'El nombre es requerido' }),
  lastName: z.string().nonempty({ message: 'El apellido es requerido' }),
  email: z.string().email({ message: 'El correo electrónico no es válido' }),
  attendanceDate: z.date({ required_error: 'La fecha de asistencia es requerida' }),
  items: z.array(SelectionItemSchema).min(1, { message: 'Debe seleccionar al menos un producto o servicio' }),
});

export type AttendeeType = z.infer<typeof attendeeSchema>;
