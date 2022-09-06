import React, { useContext } from 'react';
import { Route, Navigate, Outlet } from 'react-router-dom';
import { isEmpty } from 'lodash';
import { useAppContext } from '../../services/appContext';
import DefaultLayout from '../layouts/DefaultLayout';
import Path from '../../path';

const PrivateRoute = () => {
    const {
        state: { userDetails },
    } = useAppContext();

    // If authorized, return an outlet that will render child elements
    // If not, return element that will navigate to login page
    return !isEmpty(userDetails) ? <DefaultLayout children={<Outlet />} /> : <Navigate to={Path.admin.login} />;
}

export default PrivateRoute;