import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Button } from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { GoogleLogin } from 'react-google-login';
import PropTypes from 'prop-types';

const SignUp = ({ nextStep, handleChange, formData }) => {
  const navigate = useNavigate();
  
  const [password, setPassword] = useState("");

  console.log({password})
  const handleGoogleSuccess = (response) => {
    console.log('Google login success:', response);
    nextStep();
  };

  const handleGoogleFailure = (response) => {
    console.error('Google login failure:', response);
  };

  return (
    <div className="flex flex-col md:flex-row gap-12 p-4 md:p-12">
      <img
        src="./public/images/signup bg.png"
        className="hidden md:block h-screen w-2/5"
        alt="Sign Up Background"
      />
      <Formik
        initialValues={{ email: formData.email || '', password: formData.password || '' }}
        validationSchema={Yup.object({
          email: Yup.string().email("Invalid email address").required("Required"),
          password: Yup.string().min(8, "Must be more than 7 characters").required("Required"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          handleChange({"pass":{name:'password',value:values.password},"emails":{name:'email',value:values.email}});
          nextStep();
          setSubmitting(false);
        }}
      >
        <Form className="flex flex-col gap-4 mt-16 w-full md:w-1/2">
          <div className="">
            <h2 className="font-bold text-xl text-[#3A404B]">Create your account</h2>
            <p className="text-md text-[#525a6a]">
              You're one step closer to providing exceptional Customer Services
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <label htmlFor="email" className="text-[#525a6a] font-semibold">
              Work Email
            </label>
            <Field
              name="email"
              type="email"
              placeholder="Enter your work email"
              className="border border-[#3A404B] rounded p-2 outline-none placeholder-[#afb3ba]"
            />
            <ErrorMessage name="email">
              {(message) => <div className="text-red-500">{message}</div>}
            </ErrorMessage>
          </div>

          <div className="flex flex-col gap-3">
            <label htmlFor="password" className="text-[#3A404B]">
              Password
            </label>
            <Field
           
              name="password"
              type="password"
              placeholder="Enter your password"
              className="border border-[#3A404B] rounded p-2 outline-none placeholder-[#afb3ba]"
            />
            <small className="text-[#afb3ba]">8 characters minimum, 1 uppercase letter and 1 Number</small>
            <ErrorMessage name="password">
              {message => <div className="text-red-500">{message}</div>}
            </ErrorMessage>
          </div>

          <Button type="submit" colorScheme="blue" size="lg" className="mt-3">
            Next
          </Button>

          <h2 className="text-center my-4">OR</h2>

          <GoogleLogin
            clientId="YOUR_GOOGLE_CLIENT_ID"
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

          <p className="text-center mt-4">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-blue-700 hover:bg-blue-100 p-1 rounded"
            >
              Login
            </Link>
          </p>
        </Form>
      </Formik>
    </div>
  );
};

SignUp.propTypes = {
  nextStep: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  formData: PropTypes.object.isRequired,
};

export default SignUp;
