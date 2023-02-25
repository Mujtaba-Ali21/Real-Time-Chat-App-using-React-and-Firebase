import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Protected from './components/Protected';
import { AuthContextProvider } from './context/AuthContext';
import { auth } from './firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import Channel from './components/Channel';
import Signin from './components/Signin';
import './style.css'

function App() {
  const [ user ] = useAuthState(auth);

  return (
    <div>
      <AuthContextProvider>
        <Routes>
          <Route path='/' element={<Signin />} />
          <Route
            path='/channel'
            element={
              <Protected>
                { user ? <Channel /> : null }
              </Protected>
            }
          />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;