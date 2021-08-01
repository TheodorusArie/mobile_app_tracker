import React, { useContext } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { withNavigation, SafeAreaView } from 'react-navigation'
import { Button } from 'react-native-elements';
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../contexts/AuthContext';


function ProfileScreen() {
    const { signOut } = useContext(AuthContext)
    return (
        <SafeAreaView forceInset={{ top: 'always' }}>
            <Text>ProfileScreen</Text>
            <Spacer>
                <Button title="Sign Out" onPress={signOut} />
            </Spacer>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({});

export default withNavigation(ProfileScreen);