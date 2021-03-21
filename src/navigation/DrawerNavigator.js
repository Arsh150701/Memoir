import React from 'react'
import {createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList} from '@react-navigation/drawer'

import HomeScreen from '../screens/HomeScreen'
import ExtraCurriculars from '../screens/ExtraCurriculars'
import MyProjects from '../screens/Projects'
import FunSection from '../screens/FunSection'
import BlogPeek from '../screens/BlogPeek'
import MySpotify from '../screens/MySpotify'
import ThemeSelector from '../screens/ThemeSelector'
import ReasonToMake from '../screens/ReasonToMake'

import { useWindowDimensions, View, Text, Image } from 'react-native'
import DrawerInfoCard from '../components/DrawerInfoCard'

const Drawer = createDrawerNavigator()

function CustomDrawerContent(props) {
    console.log(props)
    return (
        <DrawerContentScrollView {...props}>
            <DrawerInfoCard/>
            <Text style={{padding: 15,
                fontWeight: "bold",
                fontSize: 20,
                alignItems: 'center',
                fontFamily: 'Times New Roman'}}>Ma Liste:</Text>
            <DrawerItemList {...props} />
        </DrawerContentScrollView>
    );
  }

export default function DrawerNavigator() {
    const screenDimension = useWindowDimensions()
    return (
    <Drawer.Navigator 
        initialRouteName="Home"
        backBehavior="initialRoute"
        drawerContent={props => <CustomDrawerContent {...props} />}
        drawerStyle={{
            width: screenDimension.width * 0.75,
            // backgroundColor: '#FFFFFF',
            // opacity: 1,
        }}
    >
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="My Projects" component={MyProjects} />
        <Drawer.Screen name="Extra Curriculars" component={ExtraCurriculars} />
        <Drawer.Screen name="Sneak peek onto my blog" component={BlogPeek} />
        <Drawer.Screen name="Fun Section" component={FunSection} />
        <Drawer.Screen name="Good Music (my spotify)" component={MySpotify} />
        <Drawer.Screen name="Why I made this app?" component={ReasonToMake} />
        <Drawer.Screen name="Don't like the theme?" component={ThemeSelector} />
    </Drawer.Navigator>
    )
}
