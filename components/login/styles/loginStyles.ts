import { StyleSheet } from "react-native";

export const loginStyles = StyleSheet.create({
    loginContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0', // Light gray background
        padding: 20,
        width: '100%', // Make it take up the entire width
    },
    inputContainer: {
        marginBottom: 20,
        width: '100%', // Make it take up the entire width
    },
    inputLabel: {
        fontSize: 18,
        marginBottom: 5,
        color: '#333', // Dark gray text color
    },
    inputField: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        paddingLeft: 10,
        marginBottom: 10,
        width: '100%', // Make the input field take up the entire width
        color: 'black', // Change the text color to black
    },
    loginButton: {
        backgroundColor: 'green', // Change the background color to green
        padding: 10,
        borderRadius: 5,
        width: '100%', // Make the button take up the entire width
    },
    loginButtonText: {
        color: '#fff',
        fontSize: 18,
        textAlign: 'center',
    },
});
