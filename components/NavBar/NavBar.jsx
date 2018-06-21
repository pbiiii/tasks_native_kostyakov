import React from 'react'
import {NavLink, withRouter} from 'react-router-dom'
import { Layout } from 'element-react'
import './NavBar.scss'
import {connect} from "react-redux";
import {compose} from "ramda";
import { GuestLinks } from "./components/GuestLinks";
import { UserLinks } from "./components/UserLinks";
import {logoutAction} from "../../../store/session/auth/actions";
import {bindActionCreators} from "redux";

class NavBarComponent extends React.Component {
    render() {
        return (
            <Layout.Row>
                <nav>
                    <NavLink to="/">
                        Главная
                    </NavLink>
                    { this.props.token ? <UserLinks onClick={this.props.logout}/> : <GuestLinks/> }
                </nav>
            </Layout.Row>
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
        logout: bindActionCreators(logoutAction, dispatch),
    }
}

const withStore = connect(mapStateToProps, mapDispatchToProps);
const enhance = compose(
    withRouter,
    withStore
);

export const NavBar = enhance(NavBarComponent);