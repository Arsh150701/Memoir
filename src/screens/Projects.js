import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import Card from '../components/ProjectsCard'
import PROJECTS_DATA from '../assets/data/ProjectsInfo'

export default function Projects() {

    const renderItem = ({item}) => (
        <Card
            projectName={item.projectName}
            projectType={item.projectType}
            iconURL={item.iconURL}
            langUsed={item.langUsed}
        />
    );

    return (
        <>
            <FlatList style={styles.FlatList}
                data={PROJECTS_DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </>
    )
}

const styles = StyleSheet.create({
    FlatList: {
        flex: 1,
    }
})
