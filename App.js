import * as React from 'react';
import {Text, View, Stylesheet, TouchableOpacity} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Insta from './screens/instagram';
import Facebook from './screens/facebook';

export default class App extends React.Component{
  render(){
    return(
      <View>
        <AppContainer/>
      </View>
    )
  }
}

const tabNavigator = createBottomTabNavigator({
  Insta: {screen: Insta},
  Facebook: {screen: Facebook}
})

const AppContainer = createAppContainer(tabNavigator)
