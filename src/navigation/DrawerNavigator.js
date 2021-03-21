import React from 'react'
import {createDrawerNavigator} from '@react-navigation/drawer'

import HomeScreen from '../screens/HomeScreen'
import NotificationsScreen from '../screens/NotificationsScreen'


const Drawer = createDrawerNavigator()

export default function DrawerNavigator() {
    return (
    <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
    </Drawer.Navigator>
    )
}
