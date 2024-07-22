import './App.css';
import React from 'react';
import { UserProvider } from './context/UserContext';
import RoutesMap from './routeMap';

const App: React.FC = () => {
    return (
        <UserProvider>
            <RoutesMap />
        </UserProvider>
    );
};

export default App;
