import React from 'react'
import {NavLink} from "react-router-dom";

export const GuestLinks = () => (
    <span>
        <NavLink to="/login">
            Вход
        </NavLink>
        <NavLink to="/register">
            Регистрация
        </NavLink>
    </span>
)