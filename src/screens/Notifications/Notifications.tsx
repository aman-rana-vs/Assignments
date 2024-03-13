import React from 'react';
import {View, FlatList} from 'react-native';

import EmptyNotification from '../../components/empty-data/EmptyData';
import NotificationHeader from './NotificationHeader';
import NotificationCard from '../../components/notification-card/NotificationCard';
import {INotification} from '../../types/notification-types';

import {
  NOTIFICATIONS_DATA,
  EMPTY_DATA,
} from '../../constants/notifications-constants';

const renderFunction = (item: INotification): JSX.Element => {
  return (
    <NotificationCard
      imageType={item.imageType}
      message={item.MessageType}
      time={item.time}
      completed={item.isCompleted}
    />
  );
};
const Notifications = () => {
  return (
    <View>
      <NotificationHeader />
      <FlatList
        showsVerticalScrollIndicator={false}
        data={[]}
        contentContainerStyle={{flexGrow: 1}}
        renderItem={({item}) => renderFunction(item)}
        ListEmptyComponent={<EmptyNotification />}
      />
    </View>
  );
};

export default Notifications;
