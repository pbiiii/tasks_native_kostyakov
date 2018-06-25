import React from 'react'
import { Scene, Actions } from 'react-native-router-flux'
import {connect} from "react-redux";
import store from "./store/store";
import {setTokenAction} from "./store/session/auth/actions";
import {storage} from "./store/storage";

class AuthScene extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            ready: props.token !== null
        }
    }
    componentDidMount() {
        storage.token.then((data) => {
            let storeToken = store.getState().auth.token
            if (!storeToken) {
                store.dispatch(setTokenAction(data))
            }
        })
    }
    render() {
        const { token, dispatch, ...props } = this.props
        if (token && this.state.ready) {
            return (
                <Scene
                    {...props}
                >
                    {this.props.children}
                </Scene>
            )
        } else {
            return Actions.login()
        }
    }
}

const mapStateToProps = (state) => {
    return {
        token: state.auth.token.token,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthScene);