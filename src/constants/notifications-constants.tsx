import {imageTypes, INotification} from '../types/notification-types';
export const EMPTY_DATA = [];

const currTimeStamp = Date.now();
const TimeStamps = {
  currentTime: currTimeStamp,
  Time2MinAgo: currTimeStamp - 2 * 60 * 1000,
  Time1HrAgo: currTimeStamp - 60 * 60 * 1000,
  Time2HrAgo: currTimeStamp - 2 * 60 * 60 * 1000,
  Time1DayAgo: currTimeStamp - 24 * 60 * 60 * 1000,
  Time3DayAgo: currTimeStamp - 3 * 24 * 60 * 60 * 1000,
  Time1MonthAgo: currTimeStamp - 30 * 24 * 60 * 60 * 1000,
};

export const NOTIFICATIONS_DATA: Array<INotification> = [
  {
    imageType: imageTypes.REFLECTION,
    MessageType:
      'Reminder of the day Unlocked Complete exercises for bonus points!',
    time: TimeStamps.currentTime,
    isCompleted: true,
  },
  {
    imageType: imageTypes.REFLECTION,
    MessageType:
      'Reminder of the day Unlocked Complete exercises for bonus points!',
    time: TimeStamps.Time2MinAgo,
    isCompleted: true,
  },
  {
    imageType: imageTypes.REMINDER,
    MessageType:
      'Reminder of the day Unlocked Complete exercises for bonus points!',
    time: TimeStamps.Time1HrAgo,
    isCompleted: false,
  },
  {
    imageType: imageTypes.REMINDER,
    MessageType:
      'Reminder of the day Unlocked Complete exercises for bonus points!',
    time: TimeStamps.Time2HrAgo,
    isCompleted: false,
  },
  {
    imageType: imageTypes.D_ACTIVE,
    MessageType:
      'Reminder of the day Unlocked Complete exercises for bonus points!',
    time: TimeStamps.Time1DayAgo,
    isCompleted: false,
  },
  {
    imageType: imageTypes.D_ACTIVE,
    MessageType:
      'Reminder of the day Unlocked Complete exercises for bonus points!',
    time: TimeStamps.Time1DayAgo,
    isCompleted: false,
  },
  {
    imageType: imageTypes.REFLECTION,
    MessageType:
      'Reminder of the day Unlocked Complete exercises for bonus points!',
    time: TimeStamps.Time3DayAgo,
    isCompleted: false,
  },
  {
    imageType: imageTypes.REFLECTION,
    MessageType:
      'Reminder of the day Unlocked Complete exercises for bonus points!',
    time: TimeStamps.Time1MonthAgo,
    isCompleted: false,
  },
  {
    imageType: imageTypes.REFLECTION,
    MessageType:
      'Reminder of the day Unlocked Complete exercises for bonus points!',
    time: TimeStamps.Time1MonthAgo,
    isCompleted: false,
  },
];

export const images = {
  Reflection: require('../assets/icons/reflection.png'),
  Reminder: require('../assets/icons/reminder.png'),
  'D-Active': require('../assets/icons/dactive.png'),
};
