import {imageTypes, INotification} from '../types/notification-types';
export const EMPTY_DATA = [];
export const NOTIFICATIONS_DATA: Array<INotification> = [
  {
    imageType: imageTypes.REFLECTION,
    MessageType:
      'Reminder of the day Unlocked Complete exercises for bonus points!',
    time: new Date(),
    isCompleted: true,
  },
  {
    imageType: imageTypes.REFLECTION,
    MessageType:
      'Reminder of the day Unlocked Complete exercises for bonus points!',
    time: Date.now() - 2 * 60 * 1000,
    isCompleted: true,
  },
  {
    imageType: imageTypes.REMINDER,
    MessageType:
      'Reminder of the day Unlocked Complete exercises for bonus points!',
    time: Date.now() - 60 * 60 * 1000,
    isCompleted: false,
  },
  {
    imageType: imageTypes.REMINDER,
    MessageType:
      'Reminder of the day Unlocked Complete exercises for bonus points!',
    time: Date.now() - 24 * 60 * 60 * 1000,
    isCompleted: false,
  },
  {
    imageType: imageTypes.D_ACTIVE,
    MessageType:
      'Reminder of the day Unlocked Complete exercises for bonus points!',
    time: Date.now() - 3 * 24 * 60 * 60 * 1000,
    isCompleted: false,
  },
  {
    imageType: imageTypes.D_ACTIVE,
    MessageType:
      'Reminder of the day Unlocked Complete exercises for bonus points!',
    time: Date.now() - 30 * 24 * 60 * 60 * 1000,
    isCompleted: false,
  },
  {
    imageType: imageTypes.REFLECTION,
    MessageType:
      'Reminder of the day Unlocked Complete exercises for bonus points!',
    time: new Date(),
    isCompleted: false,
  },
  {
    imageType: imageTypes.REFLECTION,
    MessageType:
      'Reminder of the day Unlocked Complete exercises for bonus points!',
    time: new Date(),
    isCompleted: false,
  },
  {
    imageType: imageTypes.REFLECTION,
    MessageType:
      'Reminder of the day Unlocked Complete exercises for bonus points!',
    time: new Date(),
    isCompleted: false,
  },
];

export const images = {
  Reflection: require('../assets/icons/reflection.png'),
  Reminder: require('../assets/icons/reminder.png'),
  'D-Active': require('../assets/icons/dactive.png'),
};
