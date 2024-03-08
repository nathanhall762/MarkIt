import { firebaseApp } from '../firebase';
import { useEffect, useState } from 'react';
import { FirebaseError } from 'firebase/app';
import { useAuthStore } from '../ZustandStore';
import type { User } from '../ZustandStore';

interface LoginData {
  email: string;
  password: string;
}

interface LoginProps {
  message?: string;
}

const Login: React.FC<LoginProps> = ({ message }) => {
  const user = useAuthStore((state) => state.user);
  const setUser = useAuthStore((state) => state.setUser);
  const [signingIn, setSigningIn] = useState(false);
  const [dots, setDots] = useState('');
  const [loginData, setLoginData] = useState<LoginData>({
    email: '',
    password: '',
  });

  async function signIn() {
    setSigningIn(true);
    console.log(firebaseApp);
    const { signInWithEmailAndPassword, getAuth } = await import(
      'firebase/auth'
    );
    const auth = getAuth(firebaseApp);
    console.log(auth);

    const userCredential = await signInWithEmailAndPassword(
      auth,
      loginData.email,
      loginData.password
    ).catch((err) => {
      setSigningIn(false);
      if (err.constructor !== FirebaseError) {
        alert('fix this');
        throw new Error('this is broke in a special way');
      }
      if (err.code === 'auth/invalid-email') alert('Invalid Email');
      if (err.code === 'auth/missing-password') alert('Missing Password');
      if (err.code === 'auth/wrong-password') alert('Incorrect Password');
      if (err.code === 'auth/too-many-requests') {
        alert(
          'Access to this account has been temporarily disabled due to many failed login attempts.'
        );
      }
      console.log(err);
    });

    if (userCredential && userCredential.user) {
      // Construct the User object expected by setUser
      const userData: User = {
        uid: userCredential.user.uid,
        email: userCredential.user.email,
        username: userCredential.user.displayName,
      };
      setSigningIn(true);
      setUser(userData); // Pass the User object to setUser
    } else {
      // Handle case where sign in fails and no user is returned
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setLoginData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleLogOut = async () => {
    const { getAuth } = await import('firebase/auth');
    const auth = getAuth(firebaseApp);

    auth.signOut();
    setUser(null);
  };

  useEffect(() => {
    if (signingIn) {
      const intervalId = setInterval(() => {
        setDots((prevDots) => (prevDots.length >= 3 ? '' : prevDots + '.'));
      }, 500);

      // Clear the interval when the component unmounts
      return () => clearInterval(intervalId);
    }
  });

  if (user && user.uid) {
    return (
      <div className='flex justify-center items-center h-screen'>
        <div className='text-center'>
          {/* <h3 className='text-xl'>
            Logged in as {user.userCredential.user.email}
          </h3> */}
          <button
            onClick={handleLogOut}
            className='mt-4 px-4 py-2 bg-blue-500 text-white rounded-md'>
            Logout
          </button>
        </div>
      </div>
    );
  } else if (signingIn) {
    return (
      <div className='flex justify-center items-center h-screen'>
        <div className='text-center'>
          <div className='text-xl'>Signing You In{dots}</div>
        </div>
      </div>
    );
  } else {
    return (
      <div className='flex justify-center items-center h-screen'>
        <div className='text-center flex flex-col '>
          <div className='mb-4'>{message}</div>
          <div className='flex flex-col'>
            <input
              type='email'
              name='email'
              placeholder='email'
              value={loginData.email}
              onChange={handleInputChange}
              className='px-4 py-2 border rounded-md mb-2'
            />
            <input
              type='password'
              name='password'
              placeholder='password'
              minLength={6}
              value={loginData.password}
              onChange={handleInputChange}
              className='px-4 py-2 border rounded-md mb-2'
            />
            <div>
              {/* <button
                onClick={signUp}
                className='mr-2 px-4 py-2 bg-blue-500 text-white rounded-md'>
                Sign Up
              </button> */}
              <button
                onClick={signIn}
                className='px-4 py-2 bg-blue-500 text-white rounded-md'>
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Login;
