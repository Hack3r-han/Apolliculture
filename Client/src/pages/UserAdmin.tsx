import { useState, useEffect } from 'react';
import usersData from '../../api/users.json';
import AdminNavbar from '../components/adminnavbar/AdminNavbar';
import backgroundImage from "../assets/images/BgLogin.svg";

interface User {
    id: number;
    name: string;
    email: string;
    role: string;
    imageUrl: string; 
}

const UserAdmin = () => {
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        setUsers(usersData);
    }, []);

    return (
        <div style={{backgroundImage: `url(${backgroundImage})`}}>
            <AdminNavbar />
            <h1 className="text-center text-3xl font-bold my-10">USERS</h1>
            <div className="px-3 py-4 flex justify-center">
               <table className="w-2/3 text-md bg-amber-200 border-2 border-amber-300 rounded mb-10">
                    <tbody>
                        <tr>
                            <th className="text-left p-3 px-5"></th>
                            <th className="text-left p-3 px-5">Name</th>
                            <th className="text-left p-3 px-5">Email</th>
                            <th className="text-left p-3 px-5">Role</th>
                        </tr>
                        {users.map((user: User) => (
                            <tr key={user.id} className="border-b hover:bg-amber-100 bg-gray-100">
                                <td className="p-3 px-5">
                                    <div className="flex-shrink-0 w-16 h-16 hidden sm:table-cell">
                                        <img className="w-full h-full rounded-full"
                                            src={user.imageUrl}
                                            alt="" />
                                    </div>
                                </td>
                                <td className="p-3 px-5"><input type="text" value={user.name} className="bg-transparent" /></td>
                                <td className="p-3 px-5"><input type="text" value={user.email} className="bg-transparent" /></td>
                                <td className="p-3 px-5">
                                    <select value={user.role} className="bg-transparent">
                                        <option value="user">user</option>
                                        <option value="admin">admin</option>
                                    </select>
                                </td>
                                <td className="p-3 px-5 flex justify-end">
                                    <button type="button" className="mr-3 text-sm bg-amber-500 hover:bg-amber-300 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Save</button>
                                    <button type="button" className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UserAdmin;
