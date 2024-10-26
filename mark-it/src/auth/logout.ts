import { firebaseApp } from '../firebase';
import { useAuthStore } from '../ZustandStore';

export const handleLogOut = async () => {
  const { getAuth } = await import('firebase/auth');
  const auth = getAuth(firebaseApp);

  auth.signOut();
  useAuthStore.getState().setUser(null);
};
