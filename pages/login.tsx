import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import { Spinner } from 'react-bootstrap';
import * as Yup from 'yup';
import AuthLayout from '../src/components/AuthLayout/AuthLayout';
import styled from '@emotion/styled';
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';
import { useRouter } from 'next/router';
import CustomInputOnboarding from '../src/components/CustomInput/CustomInput';
import appTheme from '../src/components/appTheme';

interface loginFormType {
  email: string;
  password: string;
}
interface ShowPasswordInterface {
  onClick?: () => void;
}
const Login = () => {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassWord, setShowPassword] = useState<boolean>(false);
  const history = useRouter();
  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };
  const forgetpaaswordRoute = () => {
    history.push('/forget-password');
  };
  const advancedSchema = Yup.object().shape({
    email: Yup.string()
      .email('Please enter a valid email')
      .required('Required'),
    password: Yup.string()
      .min(5)
      // .matches(passwordRules, { message: "Please create a stronger password" })
      .required('Required'),
  });
  const onSubmit = async (values: loginFormType, actions: any) => {
    setLoading(true);
  };
  return (
    <>
      <AuthLayout>
        <LoginWrapper>
          <WelcomeMessage>Welcome Back</WelcomeMessage>
          <GreetingText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            convallis tempus urna eu.
          </GreetingText>
          <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={advancedSchema}
            onSubmit={onSubmit}
          >
            {(formik) => (
              <LoginContainer noValidate onSubmit={formik.handleSubmit}>
                <Network>{error}</Network>
                <div className="mb-3">
                  <Label htmlFor="email">Email address</Label>
                  <CustomInputOnboarding
                    type="text"
                    placeholder="someone@example.com"
                    {...formik.getFieldProps('email')}
                  />
                  {formik.touched.email && formik.errors.email ? (
                    <div style={{ color: 'red', fontSize: '12px' }}>
                      {formik.errors.email}
                    </div>
                  ) : null}
                </div>
                <div className="mb-3">
                  <Label htmlFor="email">Password</Label>
                  <InputWrapper>
                    <CustomInputOnboarding
                      type={showPassWord ? 'text' : 'password'}
                      placeholder="Type your password here"
                      {...formik.getFieldProps('password')}
                      name="password"
                    />
                    <HideShowElement onClick={handleShowPassword}>
                      {showPassWord ? (
                        <>
                          <AiOutlineEyeInvisible /> &nbsp;{' '}
                          <ShowHideSpan> Hide</ShowHideSpan>
                        </>
                      ) : (
                        <>
                          <AiOutlineEye /> &nbsp;{' '}
                          <ShowHideSpan>Show</ShowHideSpan>
                        </>
                      )}
                    </HideShowElement>
                  </InputWrapper>
                  {formik.touched.password && formik.errors.password ? (
                    <div style={{ color: 'red', fontSize: '12px' }}>
                      {formik.errors.password}
                    </div>
                  ) : null}
                </div>
                <ForgetPassword onClick={forgetpaaswordRoute}>
                  Forgot password?
                </ForgetPassword>
                <Button type="submit">
                  {' '}
                  {!loading ? (
                    'Sign In'
                  ) : (
                    <Spinner
                      animation="border"
                      variant="light"
                      size="sm"
                      style={{ display: 'block', margin: '0 auto' }}
                    />
                  )}
                </Button>

                <LoginTextParagraph>
                  By clicking “Sign In”, I agree to the SHERUTA{' '}
                  <TermsPolicy>Terms of Use</TermsPolicy> and the{' '}
                  <TermsPolicy>Privacy Policy</TermsPolicy>.
                </LoginTextParagraph>
              </LoginContainer>
            )}
          </Formik>
        </LoginWrapper>
      </AuthLayout>
    </>
  );
};

export default Login;

export const LoginWrapper = styled.div`
  margin-top: 50px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  padding: 20px;
  border-radius: 10px;
  @media (max-width: 992px) {
    width: 80%;
  }
  @media (min-width: 993px) {
    width: 50% !important;
  }
  @media (min-width: 1200px) {
    width: 40% !important;
  }
  @media (max-width: 567px) {
    width: 100%;
  }
`;
export const WelcomeMessage = styled.h1`
  font-size: 2.25rem;
  line-height: 1.3;
  font-family: 'Lexend', 'Helvetica', 'Arial', sans-serif;
  color: #344767;
  font-weight: 700;
  color: #171c1d;
  font-size: 2rem;
  line-height: 1.2;
  font-weight: 600;
`;
export const GreetingText = styled.div`
  font-family: 'Lexend', 'Helvetica', 'Arial', sans-serif;
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.6;
  line-height: 1.5;
  color: #575757;
  font-size: 1rem;
  margin-bottom: 1.6875rem;
  color: #7e8487;
  padding-top: 0.625rem;
  font-size: 1rem;
  font-weight: 400;
`;
export const LoginContainer = styled(Form)``;
export const Label = styled.label`
  font-family: 'Lexend', 'Helvetica', 'Arial', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  color: #000000;
  margin-bottom: 8px;
`;
export const Button = styled.button`
  padding: 15px 15px;
  background: #d19f21;
  border-radius: 10px;
  width: 100%;
  font-family: 'Lexend', 'Helvetica', 'Arial', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 18px;
  letter-spacing: 0.02em;
  color: #ffffff;
  outline: none;
  border: none;
  &:hover {
    transform: translateY(2px);
    background-color: #f7f7f7;
    border: 1px solid red;
    color: black;
    transition: transform 0.25s ease-out;
  }
`;
export const ForgetPassword = styled.a`
  font-family: 'Lexend', 'Helvetica', 'Arial', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  cursor: pointer;
  text-decoration: none;
  display: inline-block;
  margin-bottom: 32px;
  line-height: 24px;
  color: #344767;
`;
export const Network = styled.span`
  font-size: 12px;
  color: red;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const CreatAccount = styled.div`
  text-align: center;
  font-family: 'Lexend', 'Helvetica', 'Arial', sans-serif;
  margin-top: 32px;
  display: inline-block;
`;
export const LoginTextParagraph = styled.p`
  font-family: 'General Sans', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.02em;
  display: inline-block;
  margin-top: 24px;
  margin-bottom: 0;
  color: #344767;
`;
export const TermsPolicy = styled.span`
  font-weight: 500;
  color: #344767
  font-family: 'Lexend', 'Helvetica', 'Arial', sans-serif;
  text-decoration: none;
  cursor: pointer;
`;
export const CreatAccountLink = styled.span`
  font-family: 'Lexend', 'Helvetica', 'Arial', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.02em;
  text-decoration-line: underline;
  color: #0b0c7d;
`;
export const ShowHideSpan = styled.span`
  font-family: 'Lexend', 'Helvetica', 'Arial', sans-serif;
  display: inline-block;
`;
export const InputWrapper = styled.div`
  position: relative;
`;
export const HideShowElement = styled.div<ShowPasswordInterface>`
  position: absolute;
  right: 20px;
  top: 14px;
  cursor: pointer;
  display: flex;
  align-items: center;
  color: ${appTheme.COLORS.grey5};
`;
