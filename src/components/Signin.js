import React, { useEffect } from 'react';
import { GoogleButton } from 'react-google-button';
import { UserAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Signin = () => {
  const { googleSignIn, user } = UserAuth();
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user != null) {
      navigate('/channel');
    }
  }, [user]);

  return (
    <>
    <div className="container-fluid d-flex justify-content-center"
    style={{ backgroundColor: "#eee", height: "100vh" }}>
      <div className='h1 align-items-center mt-3'>
        Please Sign In First
        <div className='ms-5'
        style={{ marginTop: "20rem" }}>
      <GoogleButton onClick={handleGoogleSignIn}/>
      </div>
      </div>

    </div>
        </>
  );
};

export default Signin;