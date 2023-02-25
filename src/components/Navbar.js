import React from 'react';
import { UserAuth } from '../context/AuthContext';
import Signin from './Signin';

const Navbar = () => {
  const { user, logOut } = UserAuth();

  const handleSignOut = async () => {
    try {
      await logOut()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='flex justify-between bg-gray-200 w-full p-4'>
      <h1 className='text-center text-2xl font-bold'>
        Please Sign In First
      </h1>
      {user?.displayName ? (
        <button onClick={handleSignOut}>Logout</button>
      ) : (
        <Signin/>
      )}
    </div>
  );
};

export default Navbar;