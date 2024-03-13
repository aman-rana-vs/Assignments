export enum imageTypes {
  REFLECTION = 'Reflection',
  REMINDER = 'Reminder',
  D_ACTIVE = 'D-Active',
}
export interface INotification {
  imageType: imageTypes;
  MessageType: string;
  time: Date | number;
  isCompleted: boolean;
}
