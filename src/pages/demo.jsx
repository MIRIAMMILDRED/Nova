/* eslint-disable no-unused-vars */
import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Button } from "@chakra-ui/react";
import {  useNavigate } from "react-router-dom";



const DemoPage = () => {

    const navigate = useNavigate()

    const goBack = () => {
        navigate(-1)
    }
  return (
    <>
      <div className="flex flex-col md:flex-row gap-12 px-4 md:p-12">
        <img
          src="\images\demo-image.png"
          alt="demo"
          className="hidden md:block h-screen w-2/5"
        />

        <Formik
          initialValues={{
            fullName: "",
            workEmail: "",
            phoneNumber: "",
            company: "",
            companySize: "",
          }}
          validationSchema={Yup.object({
            fullName: Yup.string().required("Required"),
            workEmail: Yup.string().email("Invalid email address").required("Required"),
            phoneNumber: Yup.string().required("Required"),
            company: Yup.string().required("Required"),
            companySize: Yup.string().required("Required"),
          })}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              //alert(JSON.stringify(values, null, 2));
              //   navigate("/emailverification");
              setSubmitting(false);
            }, 400);
          }}
        >
          <Form className="flex flex-col gap-4 mt-12 w-full md:w-1/2">
            <div>
              <div className="flex justify-end" onClick={goBack}>
              <img src="\images\close-square.png" alt="close-square"/>
              </div>
              <h2 className="font-bold text-xl text-[#3A404B]">Request Demo</h2>
              <p className="text-md">
                Schedule a 30 minutes product demo with our expert
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <label htmlFor="fullName" className="text-[#3A404B]">
                Full Name
              </label>
              <Field
                name="fullName"
                type="text"
                placeholder="Enter your full name"
                className="border border-[#3A404B] rounded p-2 outline-none"
              />
              <ErrorMessage name="fullName">
                {(message) => <div className="text-red-500">{message}</div>}
              </ErrorMessage>
            </div>

            <div className="flex flex-col gap-3">
              <label htmlFor="workEmail" className="text-[#3A404B]">
                Work Email
              </label>
              <Field
                name="workEmail"
                type="text"
                placeholder="Enter your your work email address"
                className="border border-[#3A404B] rounded p-2 outline-none"
              />
              <ErrorMessage name="workEmail">
                {(message) => <div className="text-red-500">{message}</div>}
              </ErrorMessage>
            </div>

            <div className="flex flex-col gap-3">
              <label htmlFor="phone-number" className="text-[#3A404B]">
                Phone Number
              </label>
              <Field
                name="phoneNumber"
                type="number"
                placeholder="Enter your phone number"
                className="border border-[#3A404B] rounded p-2 outline-none"
              />

              <ErrorMessage name="phoneNumber">
                {(message) => <div className="text-red-500">{message}</div>}
              </ErrorMessage>
            </div>

            <div className="flex flex-col gap-3">
              <label htmlFor="company" className="text-[#3A404B]">
                Company
              </label>
              <Field
                name="company"
                type="text"
                placeholder="Enter your company name"
                className="border border-[#3A404B] rounded p-2 outline-none"
              />

              <ErrorMessage name="company">
                {(message) => <div className="text-red-500">{message}</div>}
              </ErrorMessage>
            </div>

            <div className="flex flex-col gap-3">
              <label htmlFor="companySize" className="text-[#3A404B]">
                Company Size
              </label>
              <Field
                name="companySize"
                type="text"
                as="select"
                placeholder="Select Company Size"
                className="border border-[#3A404B] rounded p-2 outline-none"
              >
                <option value="" disabled>
                  Select Company Size
                </option>
                <option value="small">1-10</option>
                <option value="big">11-20</option>
                <option value="21">21-30</option>
                <option value="31">31-50</option>
                <option value="51">51-100</option>
                <option value="101">101 - above</option>
              </Field>
              <ErrorMessage name="companySize">
                {(message) => <div className="text-red-500">{message}</div>}
              </ErrorMessage>
            </div>

            <Button type="submit" colorScheme="blue" size="lg" className="mt-3">
              Schedule a demo
            </Button>
          </Form>
        </Formik>
      </div>
    </>
  );
};

export default DemoPage;
