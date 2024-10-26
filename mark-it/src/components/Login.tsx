import { firebaseApp } from '../firebase';
import { useEffect, useState } from 'react';
import { FirebaseError } from 'firebase/app';
import { useAuthStore } from '../ZustandStore';
import type { User } from '../ZustandStore';
import Button from './Button';
import { handleLogOut } from '../auth/logout';

const BETA_PASSWORD = 'TulsaTime'; // TODO: Move to .env and github secrets

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
  const [showModal, setShowModal] = useState(false); // State for modal visibility
  const [betaPassword, setBetaPassword] = useState(''); // State for beta password input

  const handleBetaPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBetaPassword(e.target.value);
  };

  const validateBetaPassword = () => {
    if (betaPassword === BETA_PASSWORD) {
      setShowModal(false);
      signUp(); // Only call signUp if the beta password is correct
    } else {
      alert('Incorrect Beta Password');
    }
  };

  async function signUp() {
    const { createUserWithEmailAndPassword, getAuth } = await import(
      'firebase/auth'
    );
    const auth = getAuth(firebaseApp);

    const userCredential = await createUserWithEmailAndPassword(
      auth,
      loginData.email,
      loginData.password
    ).catch((err) => {
      if (err.constructor !== FirebaseError) {
        alert('fix this');
        throw new Error('this is broke in a special way');
      }
      if (err.code === 'auth/email-already-in-use') alert('Email in use');
      if (err.code === 'auth/invalid-email') alert('Invalid Email');
      if (err.code === 'auth/weak-password') alert('Weak Password');
      console.log(err);
    });

    if (userCredential && userCredential.user) {
      // Construct the User object expected by setUser
      const userData: User = {
        uid: userCredential.user.uid,
        email: userCredential.user.email,
        username: userCredential.user.displayName,
      };
      setUser(userData); // Pass the User object to setUser
    }
  }

  async function signIn() {
    setSigningIn(true);
    const { signInWithEmailAndPassword, getAuth } = await import(
      'firebase/auth'
    );
    const auth = getAuth(firebaseApp);

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
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setLoginData((prevData) => ({ ...prevData, [name]: value }));
  };

  useEffect(() => {
    if (signingIn) {
      const intervalId = setInterval(() => {
        setDots((prevDots) => (prevDots.length >= 3 ? '' : prevDots + '.'));
      }, 500);
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
              <Button text='Sign Up' onClick={() => setShowModal(true)}></Button>
              <Button text='Login' onClick={signIn}></Button>
            </div>
            <p id='login-message'></p>
          </div>
        </div>
        {/* Modal for beta password */}
        {showModal && (
          <div className='fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75'>
            <div className='bg-white p-6 rounded-md text-center'>
              <h2 className='text-xl font-semibold mb-4'>
                We are in closed Beta. What is the password?
              </h2>
              <input
                type='password'
                value={betaPassword}
                onChange={handleBetaPasswordChange}
                placeholder='Enter Beta Password'
                className='px-4 py-2 border rounded-md mb-4'
              />
              <Button text='Submit' onClick={validateBetaPassword} />
              <Button
                text='Cancel'
                onClick={() => setShowModal(false)}
              />
            </div>
          </div>
        )}
      </div>
    );
  }
};

export default Login;
