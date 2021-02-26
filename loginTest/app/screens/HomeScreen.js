import * as React from 'react';
import { createStackNavigator} from '@react-navigation/stack';
import HomeMain from './homeComponents/HomeMain';
import MyClub from './homeComponents/MyClub';
import ClubNoticeBoard from './homeComponents/ClubNoticeBoard';


const HomeStack = createStackNavigator();

export default function HomeScreen() {

  return (
      <HomeStack.Navigator screenOptions = {{headerShown: false}} >
        <HomeStack.Screen name = "HomeMain" component={HomeMain}  />
        <HomeStack.Screen name = "MyClub" component={MyClub}/>
        <HomeStack.Screen name = "ClubNoticeBoard" component={ClubNoticeBoard}/>
      
      </HomeStack.Navigator>
  );
}
