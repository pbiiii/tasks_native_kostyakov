import React from 'react';
import {StyleSheet, Text, View, Button, ActivityIndicator, ScrollView, TextInput, Keyboard, Alert} from 'react-native';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { logoutAction } from "../store/session/auth/actions";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

class Menu extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            email: '',
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>You name: {this.state.username}</Text>
                <Text>You email: {this.state.username}</Text>
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
        token: state.auth.token,
    }
}

const mapDispatchToProps = (dispatch) => ({
    logout: bindActionCreators(logoutAction, dispatch)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Menu);