import React from 'react'
import { bindActionCreators } from 'redux'
import { loginAction } from "../store/session/auth/actions/index";
import { connect } from 'react-redux';
import { LoginForm } from "../components/LoginForm";
import { Actions } from 'react-native-router-flux'

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
        this.props.login(email, password);
    }
    componentDidMount() {
        if(this.props.token) {
            return Actions.tasks()
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if(prevProps !== this.props) {
            if(this.props.token) {
                return Actions.tasks()
            }
        }
    }
    render() {
        return (
            <LoginForm
                email={this.state.email}
                password={this.state.password}
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
            />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        token: state.auth.token,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: bindActionCreators(loginAction, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)