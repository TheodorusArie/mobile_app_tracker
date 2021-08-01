import React, { useContext } from 'react'
import { View, StyleSheet } from 'react-native'
import { withNavigation, NavigationEvents } from 'react-navigation';
import { Context as AuthContext } from '../contexts/AuthContext'
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

function SignupScreen({ navigation }) {

    const { state, signUp, clearErrMessage } = useContext(AuthContext);

    return (
        <View style={styles.container}>
            <NavigationEvents
                onWillFocus={clearErrMessage}
            />
            <AuthForm
                headerText="Sign Up For Tracker"
                errorMessage={state.errMessage}
                onSubmit={signUp}
                submitButtonText="Sign Up"
            />
            <NavLink
                text="Already have account ? Sign In"
                routeName="SignIn"
            />

        </View>
    )
}

SignupScreen.navigationOptions = () => ({
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

export default withNavigation(SignupScreen);