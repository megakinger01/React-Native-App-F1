import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'


import { TeamsF1Screen } from '../screens/stacks/TeamsF1Screen'
import { TeamF1DetailsScreen } from '../screens/stacks/TeamF1DetailsScreen'


const StackTeam = createStackNavigator()

export const TeamsStackNavigator = () => {
    return (
        <StackTeam.Navigator>
            <StackTeam.Screen name="TeamsF1Screen" component={TeamsF1Screen}/>
            <StackTeam.Screen name="TeamF1DetailsScreen" component={TeamF1DetailsScreen}/>
        </StackTeam.Navigator>
    )
}
