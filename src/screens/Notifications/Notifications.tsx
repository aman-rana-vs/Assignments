import {View, Text, FlatList} from 'react-native';
import React from 'react';
import Card from './Card';
import {
  NOTIFICATIONS_DATA,
  EMPTY_DATA,
} from '../../constants/notifications-data';
import {INotification} from '../../types/notification-types';
import TopNav from './TopNav';
import EmptyNotification from './EmptyNotification';

const renderFunction = (item: INotification): JSX.Element => {
  return (
    <Card
      imageType={item.imageType}
      message={item.MessageType}
      time={item.time}
      completed={item.completed}
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
