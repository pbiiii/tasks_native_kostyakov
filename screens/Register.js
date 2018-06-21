import React  from 'react';
import { bindActionCreators } from 'redux'
import { registerAction } from "../store/session/auth/actions/index";
import { connect } from 'react-redux';
import { RegisterForm } from "../components/RegisterForm";
import { Actions } from 'react-native-router-flux'

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        }
    }
    handleChange = ({ name, value }) => {
        this.setState({ [name]: value });
    }
    handleSubmit = () => {
        const { email, password } = this.state;
        this.props.register(email, password);
    }
    componentDidUpdate(prevProps, prevState) {
        if(prevProps !== this.props) {
            if(this.props.registerSuccess || this.props.userAlreadyExists) {
                return Actions.login({
                    registerSuccess: this.props.registerSuccess,
                    userAlreadyExists: this.props.userAlreadyExists
                })
            }
        }
        // if(this.props.registerSuccess) {
        //     Message({
        //         message: 'Register success',
        //         type: 'success'
        //     })
        // }
        // if(this.props.userAlreadyExists) {
        //     Message({
        //         message: `User with email ${this.state.email} already registered`,
        //         type: 'warning'
        //     })
        // }
    }
    render() {
        return (
            <RegisterForm
                email={this.state.email}
                password={this.state.password}
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
            />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        registerSuccess: state.auth.register.registerSuccess,
        userAlreadyExists: state.auth.register.userAlreadyExists
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        register: bindActionCreators(registerAction, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)