import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Button, Spinner } from '@chakra-ui/react';
import PropTypes from 'prop-types';

const SetUp = ({ nextStep, prevStep, handleChange, formData }) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="flex flex-col md:flex-row gap-12 p-4 md:p-12">
      <img src="./public/images/signup bg.png" className="hidden md:block h-screen w-2/5" alt="Signup Background" />
      <Formik
        initialValues={{
          fullName: formData.fullName,
          company: formData.company,
          industry: formData.industry,
          companySize: formData.companySize,
          role: formData.role
        }}
        validationSchema={Yup.object({
          fullName: Yup.string().required("Required"),
          company: Yup.string().required("Required"),
          industry: Yup.string().required("Required"),
          companySize: Yup.string().required("Required"),
          role: Yup.string().required("Required")
        })}
        onSubmit={async (values, { setSubmitting }) => {
          setIsLoading(true);

          handleChange('fullName')(values.fullName);
          handleChange('company')(values.company);
          handleChange('industry')(values.industry);
          handleChange('companySize')(values.companySize);
          handleChange('role')(values.role);

          console.log("Submitting form with values:", values);

          try {
            const response = await fetch('http://localhost:8000/api/otp/send', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ 
                fullname: values.fullName,
                email: formData.email, 
                password: formData.password,
                industry: values.industry,
                company: values.company,
                companysize: values.companySize,
                role: values.role
              }),
            });

            const data = await response.json();
            if (response.ok) {
              console.log('OTP sent successfully:', data);
              nextStep();
            } else {
              console.error('Error sending OTP:', data.message);
            }
          } catch (error) {
            console.error('Error sending OTP:', error);
          } finally {
            setIsLoading(false);
            setSubmitting(false);
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form className="flex flex-col gap-4 mt-16 w-full md:w-1/2">
            <div className="">
              <h2 className="font-bold text-xl text-[#3A404B]">Complete account setup</h2>
              <p className="text-md text-[#525a6a]">You're one step closer to providing exceptional Customer Services</p>
            </div>

            <div className="flex flex-col gap-3">
              <label htmlFor="fullName" className="text-[#3A404B]">Full Name</label>
              <Field
                name="fullName"
                type="text"
                placeholder="Enter your full name"
                className="border border-[#3A404B] rounded p-2 outline-none placeholder-[#afb3ba]"
              />
              <ErrorMessage name="fullName">
                {message => <div className="text-red-500">{message}</div>}
              </ErrorMessage>
            </div>

            <div className="flex flex-col gap-3">
              <label htmlFor="company" className="text-[#3A404B]">Company</label>
              <Field
                name="company"
                type="text"
                placeholder="Enter your company name"
                className="border border-[#3A404B] rounded p-2 outline-none placeholder-[#afb3ba]"
              />
              <ErrorMessage name="company">
                {message => <div className="text-red-500">{message}</div>}
              </ErrorMessage>
            </div>

            <div className="flex flex-col gap-3">
              <label htmlFor="industry" className="text-[#3A404B]">Industry</label>
              <Field
                name="industry"
                as="select"
                className="border border-[#3A404B] rounded p-2 outline-none placeholder-[#afb3ba]"
              >
                <option value="" disabled>Select your industry</option>
                <option value="Tech">Tech</option>
                <option value="Finance">Finance</option>
                <option value="Healthcare">Healthcare</option>
                {/* Add more options as needed */}
              </Field>
              <ErrorMessage name="industry">
                {message => <div className="text-red-500">{message}</div>}
              </ErrorMessage>
            </div>

            <div className="flex flex-col gap-3">
              <label htmlFor="companySize" className="text-[#3A404B]">Company Size</label>
              <Field
                name="companySize"
                as="select"
                className="border border-[#3A404B] rounded p-2 outline-none placeholder-[#afb3ba]"
              >
                <option value="" disabled>Select your company size</option>
                <option value="1-10">1-10</option>
                <option value="11-50">11-50</option>
                <option value="51-200">51-200</option>
                <option value="201-500">201-500</option>
                <option value="500+">500+</option>
              </Field>
              <ErrorMessage name="companySize">
                {message => <div className="text-red-500">{message}</div>}
              </ErrorMessage>
            </div>

            <div className="flex flex-col gap-3">
              <label htmlFor="role" className="text-[#3A404B]">Role</label>
              <Field
                name="role"
                as="select"
                className="border border-[#3A404B] rounded p-2 outline-none placeholder-[#afb3ba]"
              >
                <option value="" disabled>Select your role</option>
                <option value="Manager">Manager</option>
                <option value="Developer">Developer</option>
                <option value="Designer">Designer</option>
                <option value="Sales">Sales</option>
                {/* Add more options as needed */}
              </Field>
              <ErrorMessage name="role">
                {message => <div className="text-red-500">{message}</div>}
              </ErrorMessage>
            </div>

            <div className="flex justify-between gap-4">
              <Button onClick={prevStep} colorScheme="gray" size="lg">
                Back
              </Button>
              <Button type="submit" colorScheme="blue" size="lg" disabled={isLoading || isSubmitting}>
                {isLoading || isSubmitting ? <Spinner size="md" /> : 'Next'}
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

SetUp.propTypes = {
  nextStep: PropTypes.func.isRequired,
  prevStep: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  formData: PropTypes.object.isRequired,
};

export default SetUp;
