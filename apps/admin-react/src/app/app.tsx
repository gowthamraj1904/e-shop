import { useEffect, useState } from 'react';
import { ReactHeader } from '@libs/react/header';
import { Route, Routes, Link } from 'react-router-dom';
import { User } from '@libs/interfaces';
import axios, { AxiosResponse } from 'axios';
// import { ReactHeader } from '../../../../libs/react/header/src/index';

interface UserProps {
    user: User;
}

const baseUrl = 'http://localhost:3000/api/v1/';

export function App() {
    const [users, setUsers] = useState<User[]>([]);

    const getUsers = async (): Promise<AxiosResponse<User[]>> => {
        const users: AxiosResponse<User[]> = await axios.get(baseUrl + 'users');
        return users;
    };

    useEffect(() => {
        getUsers()
            .then((response: AxiosResponse<User[]>) => setUsers(response.data))
            .catch((err: Error) => console.error(err));
    }, []);

    return (
        <div>
            <ReactHeader title='Admin' />
            <div role='navigation'>
                <ul>
                    <li>
                        <Link to='/dashboard'>Dashboard</Link>
                    </li>
                    <li>
                        <Link to='/users'>Users</Link>
                    </li>
                </ul>
            </div>
            <Routes>
                <Route path='/' element={<div>Dashboard</div>} />
                <Route path='/dashboard' element={<div>Dashboard</div>} />
                <Route
                    path='/users'
                    element={
                        <div>
                            User List
                            {users?.map((user: User) => (
                                <div key={user.id}>
                                    <div>{user.name}</div>
                                    <div>{user.email}</div>
                                    <div>{user.apartment}</div>
                                    <div>{user.street}</div>
                                    <div>{user.city}</div>
                                    <div>{user.country}</div>
                                    <div>{user.zip}</div>
                                </div>
                            ))}
                        </div>
                    }
                />
            </Routes>
        </div>
    );
}

export default App;
