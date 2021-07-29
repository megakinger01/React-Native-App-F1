import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import {LogBox, Text  } from 'react-native'
import { DrawerMenu } from './src/navigations/DrawerMenu';




LogBox.ignoreLogs(['Reanimated 2']);

const App = () => {
  return (
    <NavigationContainer>
      <DrawerMenu />
    </NavigationContainer>
  )
}

export default App
