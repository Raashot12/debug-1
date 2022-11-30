import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { Formik } from 'formik';
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';
import * as Yup from 'yup';
import { Spinner } from 'react-bootstrap';
import AuthLayout from '../src/components/AuthLayout/AuthLayout';
import {
  Button,
  ForgetPassword,
  GreetingText,
  HideShowElement,
  InputWrapper,
  Label,
  LoginContainer,
  LoginTextParagraph,
  LoginWrapper,
  Network,
  ShowHideSpan,
  TermsPolicy,
  WelcomeMessage,
} from './login';
import CustomInputOnboarding from '../src/components/CustomInput/CustomInput';
interface loginFormType {
  email: string;
  password: string;
}
interface ShowPasswordInterface {
  onClick?: () => void;
}
const Register = () => {
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
    first_name: Yup.string().required('Required'),
    last_name: Yup.string().required('Required'),
    password: Yup.string()
      .min(5)
      // .matches(passwordRules, { message: "Please create a stronger password" })
      .required('Required'),
  });
  const onSubmit = async (values: loginFormType, actions: any) => {
    setLoading(true);
    // const authService = new AuthenticationServiceOnboarding();
    // const { resetForm } = actions;
    // resetForm({ values: { ...values, password: '' } });
    // const loginService: LoginSuccessInterface | ErrorBodyInterface =
    //   await authService.loginUser({
    //     username: values.email,
    //     password: values.password,
    //   });
    // if ('token' in loginService && loginService.token !== 'error') {
    //   // setToken({
    //   //   token: loginService.token,
    //   //   refresh_token: loginService.refresh_token,
    //   // });
    //   history.push('/onboarding/facility-Page');
    // } else {
    //   if ('message' in loginService) {
    //     setError(loginService.message);
    //     setLoading(false);
    //     setTimeout(() => {
    //       setError('');
    //     }, 3000);
    //   }
    // }
  };
  return (
    <>
      <AuthLayout>
        <LoginWrapper>
          <WelcomeMessage>Create Account</WelcomeMessage>
          <GreetingText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            convallis tempus urna eu.
          </GreetingText>
          <Formik
            initialValues={{
              email: '',
              password: '',
              first_name: '',
              last_name: '',
            }}
            validationSchema={advancedSchema}
            onSubmit={onSubmit}
          >
            {(formik) => (
              <LoginContainer noValidate onSubmit={formik.handleSubmit}>
                <Network>{error}</Network>
                <div className="mb-3">
                  <Label htmlFor="email">First Name</Label>
                  <CustomInputOnboarding
                    type="text"
                    placeholder="Rasheed"
                    {...formik.getFieldProps('first_name')}
                  />
                  {formik.touched.first_name && formik.errors.first_name ? (
                    <div style={{ color: 'red', fontSize: '12px' }}>
                      {formik.errors.first_name}
                    </div>
                  ) : null}
                </div>
                <div className="mb-3">
                  <Label htmlFor="email">Last Name</Label>
                  <CustomInputOnboarding
                    type="text"
                    placeholder="Iskilu"
                    {...formik.getFieldProps('last_name')}
                  />
                  {formik.touched.last_name && formik.errors.last_name ? (
                    <div style={{ color: 'red', fontSize: '12px' }}>
                      {formik.errors.last_name}
                    </div>
                  ) : null}
                </div>
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
                    'Create'
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
                  By clicking “Create Account”, I agree to the SHERUTA{' '}
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

export default Register;
