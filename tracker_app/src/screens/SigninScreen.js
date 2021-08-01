import React, { useContext } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { withNavigation, NavigationEvents } from 'react-navigation';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import { Context as AuthContext } from '../contexts/AuthContext';

function SigninScreen() {
    const { state, signIn, clearErrMessage } = useContext(AuthContext);
    return (
        <View style={styles.container}>
            <NavigationEvents
                onWillFocus={clearErrMessage}
            />
            <AuthForm
                headerText="Sign In to Your Account"
                submitButtonText="Sign In"
                errorMessage={state.errMessage}
                onSubmit={signIn}
            />
            <NavLink
                text="Not have account yet? Sign Up"
                routeName="SignUp"
            />
        </View>
    )
}

SigninScreen.navigationOptions = () => ({
    headerShown: false,
})

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
        justifyContent: 'center',
        paddingBottom: 200,
    },


});


export default withNavigation(SigninScreen);