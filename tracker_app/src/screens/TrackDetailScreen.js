import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { withNavigation } from 'react-navigation'

function TrackDetailScreen() {
    return (
        <View>
            <Text>TrackDetailScreen</Text>
        </View>
    )
}

const styles = StyleSheet.create({});

export default withNavigation(TrackDetailScreen);