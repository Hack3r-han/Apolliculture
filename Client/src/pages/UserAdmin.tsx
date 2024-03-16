import { useState, useEffect } from 'react';
import usersData from '../../api/mockUser.json';
import backgroundImage from "../assets/images/BgLogin.svg";
import userImage from "../assets/images/Beethoven.jpeg";

interface User {
    id: string;
    username: string;
    password: string;
    first_name: string;
    last_name: string;
    email: string;
    admin: number;
}

const UserAdmin = () => {
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        setUsers(usersData);
    }, []);

    return (
        <div style={{ backgroundImage: `url(${backgroundImage})` }}>
            <h1 className="text-center text-3xl font-bold my-10">USERS</h1>
            <div className="px-20 py-4 overflow-x-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {users.map((user: User) => (
                        <div key={user.id} className="bg-amber-200 border-2 border-amber-300 rounded">
                            <div className="p-4">
                                <div className="flex justify-center md:justify-start mb-4">
                                    <img className="w-16 h-16 rounded-full" src={userImage} alt="" />
                                </div>
                                <div>
                                    <p><strong>Name:</strong> <input type="text" className="bg-amber-200" value={user.first_name} /></p>
                                    <p><strong>Surname:</strong> <input type="text" className="bg-amber-200" value={user.last_name} /></p>
                                    <p><strong>Username:</strong> <input type="text" className="bg-amber-200" value={user.username} /></p>
                                    <p><strong>Email:</strong> <input type="email" className="bg-amber-200" value={user.email} /></p>
                                    <p><strong>Role:</strong>
                                        <select className="bg-amber-200">
                                            <option value={0}>User</option>
                                            <option value={1}>Admin</option>
                                        </select>
                                    </p>
                                </div>
                            </div>
                            <div className="p-4 flex justify-end">
                                <button type="button" className="mr-3 text-sm bg-amber-500 hover:bg-amber-300 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Save</button>
                                <button type="button" className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Delete</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default UserAdmin;
