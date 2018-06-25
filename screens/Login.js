import React from 'react'
import { bindActionCreators } from 'redux'
import { loginAction } from "../store/session/auth/actions/index";
import { connect } from 'react-redux';
import { LoginForm } from "../components/LoginForm";
import { Actions } from 'react-native-router-flux'
import { Container, Content } from "native-base";
import { Keyboard } from 'react-native'

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
        }
    }
    handleChange = ({name, value}) => {
        this.setState({ [name]: value });
    }
    handleSubmit = () => {
        const { email, password } = this.state;
        this.props.login(email, password)
        Keyboard.dismiss()
    }
    checkAuth() {
        if(this.props.token) {
            return Actions.tasks()
        }
    }
    componentDidMount() {
        this.checkAuth()
    }
    componentDidUpdate(prevProps, prevState) {
        if(prevProps !== this.props) {
            if(this.props.email && this.props.password) {
                this.setState({
                    email: this.props.email,
                    password: this.props.password
                })
            }
            this.checkAuth()
        }
    }
    render() {
        return (
            <Container>
                <Content>
                    <LoginForm
                        email={this.state.email}
                        password={this.state.password}
                        onChange={this.handleChange}
                        onSubmit={this.handleSubmit}
                    />
                </Content>
            </Container>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        token: state.auth.token.token,
        badCredentials: state.auth.login.badCredentials,
        loginSuccess: state.auth.login.loginSuccess
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: bindActionCreators(loginAction, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)