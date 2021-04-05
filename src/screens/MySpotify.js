import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import SONG_DATA from '../assets/data/PlaylistInfo'
import Card from '../components/SpotifyLinksCard'
import SpotifyIntro from '../components/SpotifyIntro'

export default function MySpotify() {
    
    const renderItem = ({ item }) => (
        <Card tagline={item.tagline} name={item.name} desc={item.desc} spotifyURL={item.spotifyURL} />
      );

    return (
        <>
            <SpotifyIntro/>
            <FlatList style={styles.FlatList}
                data={SONG_DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </>
    )
}

const styles = StyleSheet.create({
    FlatList: {
        flex: 1,
    },
})
