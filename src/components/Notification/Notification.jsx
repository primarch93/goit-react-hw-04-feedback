import React from 'react';
import { NotificationWrapp } from '../Notification/Notification.styled';

const Notification = () => {
return (
<NotificationWrapp className="notificationBlock">
<p className="notificationText">There is no feedback</p>
</NotificationWrapp>
);
};

export default Notification;