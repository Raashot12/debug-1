import axios from 'axios';
import jwtDecode, { JwtPayload } from 'jwt-decode';

export type TokenPayload = JwtPayload & {
  completedOnboarding: boolean;
  createdAt: string;
  appName: string;
  firstName: string;
  lastName: string;
  email: string;
  userType: string;
  id?: string;
  iat: number;
  exp: number;
};

export const validateToken = (token: string | null): TokenPayload | null => {
  if (!token) throw new Error('Missing token');
  const userDetails = jwtDecode<TokenPayload>(token);
  const { createdAt, appName = '', exp } = userDetails;

  const createdAtTime = new Date(createdAt).getTime() / 1000;
  const createdAtTimeStamp = Math.round(createdAtTime).toString();
  const appTimestamp = appName.split('-')[1];

  const isMatch = createdAtTimeStamp === appTimestamp;
  if ((exp && Date.now() >= exp * 1000) || !isMatch) {
    throw new Error('Invalid authorization token');
  }
  return userDetails;
};

export const setAuthorizationToken = (token: string | null) => {
  if (token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  }
};
