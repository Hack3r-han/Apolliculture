import { useState, useEffect } from 'react';
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

    // FETCH USERS
    useEffect(() => {
        const fetchUsers = async () => {
          try {
            const response = await fetch('http://localhost:3000/Users'); //END POINT
            if (response.ok) {
              const data = await response.json();
              setUsers(data);
            } else {
              throw new Error('Error obtaining the users.');
            }
          } catch (error) {
            console.error(error);
          }
        };

        fetchUsers();
      }, []);
    
    // HANDLE EDIT
    const handleEdit = (index: number, updatedUser: Partial<User>) => {
        const updatedUsers = [...users];
        updatedUsers[index] = { ...updatedUsers[index], ...updatedUser };
        setUsers(updatedUsers);
    };

    // HANDLE PUT REQUEST
    const handleSubmit = async (index: number, user: User) => {
        try {
            const response = await fetch(`http://localhost:3000/Users/${user.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user),
            });

            if (response.ok) {
                console.log('User updated successfully');
            } else {
                throw new Error('Failed to update user');
            }
        } catch (error) {
            console.error('Error updating user:', error);
        }
    };

    // HANDLE DELETE REQUEST
    const handleDelete = async (userId: string) => {
        try {
            const response = await fetch(`http://localhost:3000/Users/${userId}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                setUsers(users.filter(user => user.id !== userId));
                console.log('User deleted successfully');
            } else {
                throw new Error('Failed to delete user');
            }
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    };

    // RENDER ON SCREEN 
    return (
        <div style={{ backgroundImage: `url(${backgroundImage})` }}>
            <h1 className="text-center text-3xl font-bold my-10">USERS</h1>
            <div className="px-20 py-4 overflow-x-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {users.map((user: User, index: number) => (
                        <div key={user.id} className="bg-amber-200 border-2 border-amber-300 rounded">
                            <div className="p-4">
                                <div className="flex justify-center md:justify-start mb-4">
                                    <img className="w-16 h-16 rounded-full" src={userImage} alt="" />
                                </div>
                                <div>
                                    <p><strong>Name:</strong> <input type="text" className="bg-amber-200" value={user.first_name} onChange={(e) => handleEdit(index, { first_name: e.target.value })} /></p>
                                    <p><strong>Surname:</strong> <input type="text" className="bg-amber-200" value={user.last_name} onChange={(e) => handleEdit(index, { last_name: e.target.value })} /></p>
                                    <p><strong>Username:</strong> <input type="text" className="bg-amber-200" value={user.username} onChange={(e) => handleEdit(index, { username: e.target.value })} /></p>
                                    <p><strong>Email:</strong> <input type="email" className="bg-amber-200" value={user.email} onChange={(e) => handleEdit(index, { email: e.target.value })} /></p>
                                    <p><strong>Role:</strong>
                                        <select className="bg-amber-200" value={user.admin} onChange={(e) => handleEdit(index, { admin: parseInt(e.target.value) })}>
                                            <option value={0}>User</option>
                                            <option value={1}>Admin</option>
                                        </select>
                                    </p>
                                </div>
                            </div>
                            <div className="p-4 flex justify-end">
                                <button type="button" className="mr-3 text-sm bg-amber-500 hover:bg-amber-300 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline" onClick={() => handleSubmit(index, user)}>Save</button>
                                <button type="button" className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline" onClick={() => handleDelete(user.id)}>Delete</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default UserAdmin;
