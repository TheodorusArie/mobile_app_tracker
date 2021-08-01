import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { withNavigation } from 'react-navigation'

function TrackListScreen({ navigation }) {
    return (
        <>
            <Text>TrackListScreen</Text>
            <Button title="Go To Track Detail" onPress={() => navigation.navigate('TrackDetail')} />
        </>
    )
}

const styles = StyleSheet.create({});

export default withNavigation(TrackListScreen);