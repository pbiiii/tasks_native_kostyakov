import React from 'react'
import {View, Button, TextInput, Text, StyleSheet} from 'react-native'
export const LoginForm = ({password, email, onChange, onSubmit}) => (
    <View style={styles.container}>
        <Text style={styles.text}>
            Ваш e-mail
        </Text>
        <TextInput
            style={styles.text}
            value={email}
            editable
            autoFocus={true}
            multiline={false}
            keyboardType="email-address"
            onChangeText={(text) => {onChange({name: 'email', value: text.toLowerCase()})}}
        />
        <Text>
            Пароль
        </Text>
        <TextInput
            style={styles.text}
            value={password}
            editable
            multiline={false}
            secureTextEntry={true}
            onChangeText={(text) => {onChange({name: 'password', value: text.toLowerCase()})}}
        />
        <Button
            style={styles.text}
            onPress={onSubmit}
            title="Войти"
        />
    </View>
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'stretch',
        justifyContent: 'flex-start',
        padding: 25,

    },
});