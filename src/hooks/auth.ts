import { useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

// utilities
import {
  setAuthorizationToken,
  validateToken,
} from '../utility/tokenValidation';
import { useAppDispatch, useAppSelector } from '../redux/hook';
import { selectUser, setAuthData, setIsLoggedIn } from '../slices/userSlice';

function useAuth(Component: any) {
  const [loading, setLoading] = useState(true);
  const { push } = useRouter();
  const dispatch = useAppDispatch();
  const { isLoggedIn } = useAppSelector(selectUser);

  const unAuthorize = useCallback(async () => {
    await dispatch(setIsLoggedIn(false));
    await dispatch(setAuthData(null));
    if (Component.auth) {
      push('/login');
      localStorage.removeItem('token');
      setLoading(false);
    } else {
      setLoading(false);
    }
  }, [Component.auth, dispatch, push]);

  const authorize = useCallback(
    async (token: string) => {
      try {
        const authData = validateToken(token);
        setAuthorizationToken(token);
        await dispatch(setIsLoggedIn(!!authData));
        await dispatch(setAuthData(authData || null));
        if (Component.auth && !authData?.completedOnboarding) {
          push('/onboard');
          setLoading(false);
        } else {
          setLoading(false);
        }
      } catch (error) {
        setLoading(false);
      }
    },
    [Component.auth, dispatch, push],
  );

  useEffect(() => {
    const isTokenValid = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          await unAuthorize();
        }
        if (token) {
          await authorize(token);
        }
      } catch (error) {
        await unAuthorize();
      }
    };
    (async () => {
      await isTokenValid();
    })();
  }, [unAuthorize, authorize]);

  return {
    loading,
    isLoggedIn: !loading && isLoggedIn,
  };
}
export default useAuth;
