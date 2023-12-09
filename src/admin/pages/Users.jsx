import React, { useState } from 'react';
import { useEffect } from 'react';
import { getAllUsers, updateRole } from '../../apiCalls/users';
import { FaUser } from "react-icons/fa";
import { RiAdminFill } from "react-icons/ri";

const Users = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const data = await getAllUsers();
    setUsers(data.usersData)
  }

  useEffect(() => {
    
    getUsers();

  }, [])

  const handleMakeAdmin = async (userId) => {
    await updateRole({ userId, role: "admin" });

    getUsers();
  }

  const handleMakeUser = async (userId) => {
    await updateRole({ userId, role: "user" });

    getUsers();
  }


  return (
    <div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1 overflow-x-auto">
      <strong className="text-gray-700 font-medium">View Users</strong>
      <div className="border-x border-gray-200 rounded-sm mt-3 overflow-x-auto sticky top-0 h-[95vh]">
        <table className="w-full text-gray-700">
          <thead>
            <tr>
              <th className="py-2">ID</th>
              <th className="py-2">Name</th>
              <th className="py-2">Email</th>
              <th className="py-2">Role</th>
              <th className="py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user._id}>
                <td>{user._id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td className='text-xl'>
                  {
                    user.role === "admin" &&
                    <RiAdminFill className='text-red-600' />
                  }
                  {
                    user.role === "user" &&
                    <FaUser className='text-blue-600' />
                  }
                </td>
                <td>
                  {
                    user.role === "admin" &&
                    <button onClick={() => handleMakeUser(user._id)} className='py-1 rounded text-xs w-20 lg:w-24 lg:text-sm bg-blue-600 text-white'>Make User</button>
                  }
                  {
                    user.role === "user" &&
                    <button onClick={() => handleMakeAdmin(user._id)} className='py-1 rounded text-xs w-20 lg:w-24 lg:text-sm bg-red-600 text-white'>Make Admin</button>
                  }
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
