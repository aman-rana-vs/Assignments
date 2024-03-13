import React from 'react';
import {View, FlatList} from 'react-native';

import ASNotificationCard from '../../components/notification-card/ASNotificationCard';
import ASHeader from '../../components/header/ASHeader';
import EmptyNotification from '../../components/empty-data/ASEmptyData';

import {INotification} from '../../types/notification-types';

import {
  NOTIFICATIONS_DATA,
  EMPTY_DATA,
} from '../../constants/notifications-constants';

const renderFunction = (item: INotification): JSX.Element => {
  return (
    <ASNotificationCard
      imageType={item.imageType}
      message={item.MessageType}
      time={item.time}
      completed={item.isCompleted}
    />
  );
};
const ASNotifications = () => {
  return (
    <View>
      <ASHeader
        title="Notifications"
        emptyView={true}
        imgSrc={require('../../assets/icons/settings.png')}
      />
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

export default ASNotifications;
