import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Button, Box, Text } from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { GoogleLogin } from '@react-oauth/google"';
import axios from 'axios';

const Login = () => {
  const navigate = useNavigate();

  const handleGoogleSuccess = (response) => {
    console.log('Google login success:', response);
    navigate('/dashboard');
  };

  const handleGoogleFailure = (response) => {
    console.error('Google login failure:', response);
  };

  return (
    <div className="flex flex-col md:flex-row gap-12 p-4 md:p-12">
      <img
        src="./public/images/login-bg.png"
        className="hidden md:block h-screen w-2/5"
        alt="Login Background"
      />
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={Yup.object({
          email: Yup.string().email("Invalid email address").required("Required"),
          password: Yup.string().min(7, "Must be more than 7 characters").required("Required"),
        })}
        onSubmit={async (values, { setSubmitting, setFieldError }) => {
          try {
            const response = await axios.post('http://localhost:8000/api/auth/login', values);
            console.log('Login successful:', response.data);
            // Store the token (if needed) and navigate to the dashboard
            localStorage.setItem('token', response.data.token);
            navigate("/dashboard");
          } catch (error) {
            console.error('Login error:', error.response);
            if (error.response && error.response.data && error.response.data.message) {
              // Set formik field error based on the error message from the back-end
              if (error.response.data.message === 'Invalid credentials') {
                setFieldError('email', 'Invalid email or password');
                setFieldError('password', 'Invalid email or password');
              } else {
                setFieldError('email', error.response.data.message);
              }
            } else {
              setFieldError('email', 'An unknown error occurred');
            }
          } finally {
            setSubmitting(false);
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form className="flex flex-col gap-4 mt-16 w-full md:w-1/2">
            <div>
              <h2 className="font-bold text-xl text-[#3A404B]">Glad to have you back!</h2>
            </div>

            <Box className="flex flex-col gap-3">
              <label htmlFor="email" className="text-[#3A404B]">Work Email</label>
              <Field
                name="email"
                type="email"
                placeholder="Enter your email"
                className="border border-[#3A404B] rounded p-2 outline-none w-full"
              />
              <ErrorMessage name="email">
                {message => <div className="text-red-500">{message}</div>}
              </ErrorMessage>
            </Box>

            <Box className="flex flex-col gap-3">
              <label htmlFor="password" className="text-[#3A404B]">Password</label>
              <Field
                name="password"
                type="password"
                placeholder="Enter your password"
                className="border border-[#3A404B] rounded p-2 outline-none w-full"
              />
              <ErrorMessage name="password">
                {message => <div className="text-red-500">{message}</div>}
              </ErrorMessage>
              <Link to="/forgot-password" className="text-blue-700 hover:bg-blue-100 p-1 rounded self-end mt-2">
                Forgot Password?
              </Link>
            </Box>

            <Button type="submit" colorScheme="blue" size="lg" className="mt-3 w-full" isLoading={isSubmitting}>
              Log In
            </Button>

            <Text textAlign="center" my="4">OR</Text>

            <GoogleLogin
              clientId="82292926425-baeffrenmlc6bepg8dg83vb0o754fq1a.apps.googleusercontent.com"
              onSuccess={handleGoogleSuccess}
              onFailure={handleGoogleFailure}
              render={(renderProps) => (
                <Button
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                  leftIcon={<FcGoogle />}
                  colorScheme="blue"
                  variant="outline"
                  size="lg"
                  className="w-full"
                >
                  Sign in with Google
                </Button>
              )}
            />

            <Text textAlign="center" mt="4">
              Don't have an account?{" "}
              <Link to="/signup" className="text-blue-700 hover:bg-blue-100 p-1 rounded">
                Sign Up
              </Link>
            </Text>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
