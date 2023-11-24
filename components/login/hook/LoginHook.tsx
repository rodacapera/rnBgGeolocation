import React, { useState } from 'react'
import { User } from '../../geolocation/types/locationTypes';
type UserData = { user: string, password: string }
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginHook = ({ setIsLogged }: { setIsLogged: (e: boolean) => void }) => {
    const [userData, setUserData] = useState<UserData>({ user: '', password: '' });

    const handleInput = (text: string, type: string) => {
        const userClone = { ...userData }
        if (type === 'user') {
            userClone.user = text
        } else {
            userClone.password = text
        }
        setUserData(userClone);
    }


    const handleLogin = async () => {
        try {
            const response = await fetch('http://35.209.193.223/custom/login/', {
                method: 'POST',
                credentials: 'omit',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    "username": userData.user,
                    "password": userData.password,
                }),
            });

            if (!response.ok) {
                console.error('Error en la solicitud:', response.statusText);
                return;
            }

            const responseData = await response.json();
            setIsLogged(true);
            await AsyncStorage.setItem("@user", JSON.stringify(responseData));
        } catch (error) {
            console.error('Error al realizar la solicitud:', error);
        }
    };

    return { handleInput, userData, handleLogin }
}

export default LoginHook