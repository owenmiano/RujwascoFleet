/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import PushNotification from "react-native-push-notification";

PushNotification.configure({
    onNotification: function (notification) {
        console.log("NOTIFICATION:", notification);
    
      },
      requestPermissions: Platform.OS === 'ios',
})

//  
// creating push notification channel

  PushNotification.createChannel(
    {
      channelId:"employee-id",
      channelName:"My channel"
    },
    (created) => console.log(`createChannel returned '${created}'`)
  )


AppRegistry.registerComponent(appName, () => App);
