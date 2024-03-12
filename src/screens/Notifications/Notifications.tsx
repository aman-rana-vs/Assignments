import {View, Text, FlatList} from 'react-native';
import React from 'react';
import Card from './NotificationCard';
import {
  NOTIFICATIONS_DATA,
  EMPTY_DATA,
} from '../../constants/notifications-constants';
import {INotification} from '../../types/notification-types';
import TopNav from './NotificationHeader';
import EmptyNotification from './EmptyData';

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
