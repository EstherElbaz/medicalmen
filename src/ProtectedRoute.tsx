
import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { UserContext } from './context/UserContext';

const ProtectedRoute: React.FC = () => {
    const userContext = useContext(UserContext);

    if (!userContext) {
        throw new Error('UserContext must be used within a UserProvider');
    }

    const { user } = userContext;

    return user ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoute;