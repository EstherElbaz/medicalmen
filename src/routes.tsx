import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/user/Login';
import SignUp from './components/user/SignUp';

export default function RoutesMap() {

return (

    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />

        </ Routes>
    </BrowserRouter>

)
}