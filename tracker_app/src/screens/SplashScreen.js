import React, { useContext, useEffect } from 'react'
import { View, ActivityIndicator, StyleSheet } from 'react-native'
import { Context as AuthContext } from '../contexts/AuthContext';

export default function SplashScreen() {
    const { tryLocalSignIn } = useContext(AuthContext);

    useEffect(() => {
        setTimeout(() => {
            tryLocalSignIn()
        }, 1500)

    }, [])

    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" color="#dedede" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    }
})