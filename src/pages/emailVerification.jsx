import React, { useState } from "react";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Button, Center, Text, Box, Input } from "@chakra-ui/react";
import PropTypes from 'prop-types';
import Countdown from "react-countdown";

const EmailVerification = ({ prevStep, handleChange, formData, handleSubmit }) => {
  const [otp, setOtp] = useState(new Array(4).fill(""));
  const [resendTimer, setResendTimer] = useState(Date.now() + 120000); // 2 minutes timer

  const handleInputChange = (e, index) => {
    if (isNaN(e.target.value)) return;

    setOtp(otp.map((data, i) => (i === index ? e.target.value : data)));

    if (e.target.value && e.target.nextSibling) {
      e.target.nextSibling.focus();
    }
  };

  const handleResendOTP = async () => {
    try {
      const response = await fetch('https://novaend.azurewebsites.net/api/otp/resend', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: formData.email }),
      });

      const data = await response.json();
      if (response.ok) {
        console.log('OTP resent successfully:', data);
        setResendTimer(Date.now() + 120000); // Reset the timer
      } else {
        console.error('Error resending OTP:', data.message);
      }
    } catch (error) {
      console.error('Error resending OTP:', error);
    }
  };

  const renderer = ({ seconds, completed }) => {
    if (completed) {
      return (
        <Button colorScheme="blue" size="lg" onClick={handleResendOTP}>
          Resend OTP
        </Button>
      );
    } else {
      return <span>{seconds}s</span>;
    }
  };

  return (
    <div className="flex flex-col md:flex-row gap-12 p-4 md:p-12">
      <img
        src="/images/signup bg.png"
        className="hidden md:block h-screen w-2/5 object-cover"
        alt="Signup Background"
      />
      <Formik
        initialValues={{ otp: "" }}
        validationSchema={Yup.object({
          // otp: Yup.string().required("Required"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          const joinedOtp = otp.join("");
          handleChange("otp")(joinedOtp);
          handleSubmit();
          setSubmitting(false);
        }}
      >
        <Form className="flex flex-col gap-4 mt-16 w-full md:w-1/2">
          <div>
            <h2 className="font-bold text-xl text-[#3A404B]">Email Verification</h2>
            <Text fontSize="md" color="#525a6a">
              A 4-digit confirmation code has been sent to your email. It will expire in 20 minutes. Please enter the code correctly.
            </Text>
            <Center>
              <img src="/images/postal letter.png" className="m-12" alt="Postal Letter" />
            </Center>
          </div>

          <Center>
            <Box display="flex" gap={4}>
              {otp.map((data, i) => (
                <Input
                  key={i}
                  type="text"
                  value={data}
                  maxLength={1}
                  onChange={(e) => handleInputChange(e, i)}
                  textAlign="center"
                  width="50px"
                  height="50px"
                  fontSize="2xl"
                  border="2px solid #3A404B"
                  borderRadius="md"
                />
              ))}
            </Box>
          </Center>

          <Center>
            <Text fontSize="lg" color="#3A404B">
              <Countdown date={resendTimer} renderer={renderer} />
            </Text>
          </Center>

          <div className="flex flex-col gap-3 mt-4">
            <label htmlFor="otp" className="text-[#3A404B]">OTP</label>
            <ErrorMessage name="otp">
              {message => <Text color="red.500">{message}</Text>}
            </ErrorMessage>
          </div>

          <div className="flex justify-between gap-4 mt-4">
            <Button onClick={prevStep} colorScheme="gray" size="lg">
              Back
            </Button>
            <Button type="submit" colorScheme="blue" size="lg">
              Verify
            </Button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

EmailVerification.propTypes = {
  prevStep: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  formData: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default EmailVerification;
