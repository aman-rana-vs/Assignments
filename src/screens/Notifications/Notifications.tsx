import React from 'react';
import {View, Text, FlatList} from 'react-native';

import Card from './NotificationCard';
import TopNav from './NotificationHeader';
import EmptyNotification from './EmptyData';
import {INotification} from '../../types/notification-types';

import {
  NOTIFICATIONS_DATA,
  EMPTY_DATA,
} from '../../constants/notifications-constants';

const renderFunction = (item: INotification): JSX.Element => {
  return (
    <Card
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
      <TopNav />
      <FlatList
        showsVerticalScrollIndicator={false}
        data={NOTIFICATIONS_DATA}
        contentContainerStyle={{flexGrow: 1}}
        renderItem={({item}) => renderFunction(item)}
        ListEmptyComponent={<EmptyNotification />}
      />
    </View>
  );
};

export default Notifications;
