import {imageTypes, INotification} from '../types/notification-types';
export const EMPTY_DATA = [];
export const NOTIFICATIONS_DATA: Array<INotification> = [
  {
    imageType: imageTypes.REFLECTION,
    MessageType:
      'Reminder of the day Unlocked Complete exercises for bonus points!',
    time: new Date(),
    completed: true,
  },
  {
    imageType: imageTypes.REFLECTION,
    MessageType:
      'Reminder of the day Unlocked Complete exercises for bonus points!',
    time: Date.now() - 2 * 60 * 1000,
    completed: true,
  },
  {
    imageType: imageTypes.REFLECTION,
    MessageType:
      'Reminder of the day Unlocked Complete exercises for bonus points!',
    time: Date.now() - 60 * 60 * 1000,
    completed: false,
  },
  {
    imageType: imageTypes.REFLECTION,
    MessageType:
      'Reminder of the day Unlocked Complete exercises for bonus points!',
    time: Date.now() - 24 * 60 * 60 * 1000,
    completed: false,
  },
  {
    imageType: imageTypes.REFLECTION,
    MessageType:
      'Reminder of the day Unlocked Complete exercises for bonus points!',
    time: Date.now() - 3 * 24 * 60 * 60 * 1000,
    completed: false,
  },
  {
    imageType: imageTypes.REFLECTION,
    MessageType:
      'Reminder of the day Unlocked Complete exercises for bonus points!',
    time: Date.now() - 30 * 24 * 60 * 60 * 1000,
    completed: false,
  },
  {
    imageType: imageTypes.REFLECTION,
    MessageType:
      'Reminder of the day Unlocked Complete exercises for bonus points!',
    time: new Date(),
    completed: false,
  },
  {
    imageType: imageTypes.REFLECTION,
    MessageType:
      'Reminder of the day Unlocked Complete exercises for bonus points!',
    time: new Date(),
    completed: false,
  },
  {
    imageType: imageTypes.REFLECTION,
    MessageType:
      'Reminder of the day Unlocked Complete exercises for bonus points!',
    time: new Date(),
    completed: false,
  },
];
