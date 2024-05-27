import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/user/Login';

export default function RoutesMap() {

return (

    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login />} />
        </ Routes>
    </BrowserRouter>

)
}