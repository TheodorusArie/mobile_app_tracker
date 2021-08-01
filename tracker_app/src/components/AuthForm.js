import React, { useState, useContext } from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { Text, Input, Button } from 'react-native-elements';
import Spacer from './Spacer';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function AuthForm({ headerText, errorMessage, onSubmit, submitButtonText }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPass, setShowPass] = useState(false);

    return (
        <>
            <Spacer>
                <Text h3>{headerText}</Text>
            </Spacer>
            <Spacer />
            <Input label="Email" value={email} onChangeText={setEmail} autoCapitalize="none" autoCorrect={false} />
            <Spacer />
            <Input
                label="Password"
                value={password}
                onChangeText={setPassword}
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry={!showPass}
                rightIcon={
                    <TouchableOpacity onPress={() => setShowPass(!showPass)}>
                        <MaterialIcons name="eye" size={30} />
                    </TouchableOpacity>
                }
            />
            {
                errorMessage ?
                    <Text style={styles.errMessage}> {errorMessage}</Text>

                    : null
            }


            <Spacer>
                <Button title={submitButtonText} onPress={() => onSubmit({ email, password })} />
            </Spacer>


        </>
    )
}
AuthForm.defaultProps = ({
    headerText: "Input headerText here",
    submitButtonText: 'Input submitButtonText here'
})


const styles = StyleSheet.create({
    errMessage: {
        color: 'red',
        marginLeft: 10,
    },
});