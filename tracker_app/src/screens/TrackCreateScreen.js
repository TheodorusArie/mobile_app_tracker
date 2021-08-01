import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Text } from 'react-native-elements'
import { withNavigation, SafeAreaView } from 'react-navigation'
import Map from '../components/Map';

function TrackCreateScreen() {
    return (
        <SafeAreaView forceInset={{ top: 'always' }} >
            <Text h3>TrackCreateScreen</Text>
            <Map />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({});

export default withNavigation(TrackCreateScreen);