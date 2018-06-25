import React from 'react';
import {StyleSheet, Text, View, Button, ActivityIndicator, ScrollView, TextInput, Keyboard, Alert} from 'react-native';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {fetchUserAction, logoutAction} from "../store/session/auth/actions";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

class Menu extends React.Component {
    componentDidMount() {
        if(this.props.userId) {
            this.props.fetchUser(this.props.userId)
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>You name: {this.props.user.username}</Text>
                <Text>You email: {this.props.user.email}</Text>
                <Button
                    title='Logout'
                    onPress={this.props.logout}
                />
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        token: state.auth.token.token,
        userId: state.auth.token.userId,
        user: state.auth.user,
    }
}

const mapDispatchToProps = (dispatch) => ({
    logout: bindActionCreators(logoutAction, dispatch),
    fetchUser: bindActionCreators(fetchUserAction, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);