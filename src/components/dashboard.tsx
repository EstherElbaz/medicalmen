
import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { Link } from 'react-router-dom';

const Dashboard: React.FC = () => {
    const userContext = useContext(UserContext);

    if (!userContext) {
        throw new Error('UserContext must be used within a UserProvider');
    }

    const { user } = userContext;

    return (
        <div className="dashboard">
            <h1>שלום {user?.firstName}</h1>
            {user ? (
                <div>
                    <h2>Hello, {user.firstName}!</h2>
                    <p>Email: {user.emailAddress}</p>
                </div>
            ) : (
                <p>Loading user information...</p>
            )}
            <Link to="/">
                <button className="btn">Log out</button>
            </Link>
        </div>
    );
};

export default Dashboard;