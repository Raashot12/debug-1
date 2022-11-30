import React from 'react';
import { AuthBackGround } from './styles';
type AuthLayoutProps = {
  children: JSX.Element;
};

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return <AuthBackGround>{children}</AuthBackGround>;
};

export default AuthLayout;

// F0F2F5;
