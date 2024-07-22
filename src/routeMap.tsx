import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/user/Login';
import SignUp from './components/user/SignUp';
import Dashboard from './components/dashboard'; // נניח שיש לך קומפוננטה כזו
import ProtectedRoute from './ProtectedRoute';

const RoutesMap: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />

                דוגמה לניתוב מוגן - למשתמש רשום בלבד:
                <Route element={<ProtectedRoute />}>
                    <Route path="/dashboard" element={<Dashboard />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default RoutesMap;