import * as React from 'react';
import { createStackNavigator} from '@react-navigation/stack';
import MyClubMain from './BoardComponents/MyClubMain';
import BoardScreen from './BoardComponents/BoardScreen';
import MakingBoardScreen from './BoardComponents/MakingBoardScreen';
import ContentScreen from './BoardComponents/ContentScreen';
import FixContentScreen from './BoardComponents/FixContentScreen';





const ClubStack = createStackNavigator();

export default function MyClub({route}) {
  const club_id = route.params.id
  const img = route.params.img
  return (

      <ClubStack.Navigator screenOptions = {{headerShown: false}}>
        <ClubStack.Screen name = "MyClubMain">
          {(props)=> <MyClubMain {...props} club_id = {club_id} club_img = {img}/>}
        </ClubStack.Screen>
        <ClubStack.Screen name = "BoardScreen" component={BoardScreen}/>
        <ClubStack.Screen name = "makingboard" component={MakingBoardScreen}/>
        <ClubStack.Screen name = "contentscreen" component={ContentScreen}/>
        <ClubStack.Screen name ="fixcontentscreen" component={FixContentScreen}/>
        
      </ClubStack.Navigator>
  );
}
