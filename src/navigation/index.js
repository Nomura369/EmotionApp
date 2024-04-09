import { NavigationContainer, useTheme, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Divider, Image, Text, Center } from '@gluestack-ui/themed';
import { TouchableOpacity } from 'react-native';
/*
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem, // 自訂drawer項目用
} from '@react-navigation/drawer';
*/

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeScreen from "../screens/HomeScreen"
import Question1Screen from '../screens/Question1Screen';
import Question2Screen from '../screens/Question2Screen';
import TheTheme from '../theme';

const Stack = createNativeStackNavigator();
//const Tab = createBottomTabNavigator();
//const Drawer = createDrawerNavigator();

const Navigation = () => {
  return (
    <NavigationContainer theme={TheTheme}>
      <HomeStack />
    </NavigationContainer>
  );
}

/*Stack專區-起點*/
// 目前順序：首頁 => Q1 => Q2(working)
const HomeStack = () => {
    const { colors } = useTheme();
    
    return (
      <Stack.Navigator
        initialRouteName="HomeStack"
        screenOptions={{
            headerTintColor: colors.character, // 改變返回鍵與 Header 文字的顏色
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Q1"
          component={Question1Screen}
          options={() => ({
            headerTransparent: true, // 使 Header 透明化

            headerBackTitleVisible: false, // 使 Header 上返回鍵的文字透明化，只適用於 iOS
            headerTitleStyle: { //避免文字透明化沒起效，將顏色設成與背景相同
                color:colors.bg_normal 
            }, 
          })}
        />
        <Stack.Screen
          name="Q2" 
          component={Question2Screen}
          options={() => ({
            headerTransparent: true, // 使 Header 透明化

            headerBackTitleVisible: false, // 使 Header 上返回鍵的文字透明化，只適用於 iOS
            headerTitleStyle: { //避免文字透明化沒起效，將顏色設成與背景相同
                color: colors.bg_normal 
            },
          })}
        />
      </Stack.Navigator>
    );
  }
/*Stack專區-終點*/

export default Navigation;