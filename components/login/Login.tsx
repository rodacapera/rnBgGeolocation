import React, { useState } from 'react'
import { Button, SafeAreaView, Text, TextInput, View } from 'react-native'
import { loginStyles } from './styles/loginStyles';
import LoginHook from './hook/LoginHook';

const Login = ({ setIsLogged }: { setIsLogged: (e: boolean) => void }) => {
    const { handleInput, handleLogin } = LoginHook({ setIsLogged });
    return (
        <SafeAreaView style={loginStyles.loginContainer}>
            <View style={loginStyles.inputContainer}>
                <Text style={loginStyles.inputLabel}>Usuario</Text>
                <TextInput
                    style={loginStyles.inputField}
                    onChangeText={text => handleInput(text, 'user')}
                />
            </View>
            <View style={loginStyles.inputContainer}>
                <Text style={loginStyles.inputLabel}>Contraseña</Text>
                <TextInput
                    style={loginStyles.inputField}
                    onChangeText={text => handleInput(text, 'password')}
                    secureTextEntry={true}
                />
            </View>
            <Button
                onPress={handleLogin}
                title="Login"
                color="green"
            />
        </SafeAreaView>
    );
}

export default Login;