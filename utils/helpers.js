import { AsyncStorage } from 'react-native';
import { Notifications, Permissions } from 'expo';


const NOTIFICATION_KEY = 'practise:notifcation';

export function clearNotifcation() {
    return AsyncStorage.removeItem(NOTIFICATION_KEY)
        .then(Notifications.cancelAllScheduledNotificationsAsync)
}

function createNotification() {
    return {
        title: `Do a quiz`,
        body: `Don't forget to do a quiz today`,
        android:{
            sound:true,
            priority: `high`,
            sticky: false,
            vibrate: true
        } 
    }
}

export function setLocalNotfication() {
    AsyncStorage.getItem(NOTIFICATION_KEY)
        .then(JSON.parse)
        .then(data => {
            if(data === null) {
                Permissions.askAsync(Permissions.NOTIFICATIONS)
                    .then( status => {
                        if( status.permissions.notifications.status === 'granted') {
                            Notifications.cancelAllScheduledNotificationsAsync()
                            let tomorrow = new Date();
                            tomorrow.setDate(tomorrow.getDate() + 1)
                            tomorrow.setHours(20)
                            tomorrow.setMinutes(0)
                            Notifications.scheduleLocalNotificationAsync(createNotification(),
                                {
                                    time: tomorrow,
                                    repeat: 'day'
                                })
                                AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
                        }
                    })
            }
        })
}