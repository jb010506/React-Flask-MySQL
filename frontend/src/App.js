
import Menu from './component/Menu';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Products } from './component/Products';
import NoMatch from './component/NoMatch';
import { Users } from './component/Users';
import Login from './component/Login';
import { Profile } from './component/Profile';
import Signup from './component/Signup';


function App() {
    return (
        <BrowserRouter>
            <Menu />

            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/" element={<Products />} />
                <Route path="/users" element={<Users />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="*" element={<NoMatch />} />
            </Routes>

        </BrowserRouter>
    );
}

export default App;
