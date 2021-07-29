import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { TeamsStackNavigator } from './TeamsStackNavigator';




const Drawer = createDrawerNavigator()



export const DrawerMenu = () => {
    return(
        <Drawer.Navigator>
            <Drawer.Screen name="TeamsStackNavigator" component={TeamsStackNavigator}/>
        </Drawer.Navigator>
    )
}