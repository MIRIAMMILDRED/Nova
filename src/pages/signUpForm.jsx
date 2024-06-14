import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SignUp from './signup';
import SetUp from './setup';
import EmailVerification from './emailVerification';

const SignupForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    fullName: '',
    company: '',
    industry: '',
    companySize: '',
    otp: '',
    role: ''
  });

  const navigate = useNavigate();

  const handleChange = (input) => (value) => {
    setFormData({ ...formData, [input]: value });
  };

  const handleChange2 = (values) => {
    console.log({values:values.pass})
    if(values.pass){
      setFormData((v)=>{
        return { ...v, [values.pass.name]: values.pass.value }
       });
    }
    if(values.emails){
      setFormData((v)=>{
        return { ...v, [values.emails.name]: values.emails.value }
       });
    }
  
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = async () => {
    try {
      setFormData((v)  =>{
       const newValues=v
         fetch('http://localhost:8000/api/otp/verify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: newValues.email, otp: newValues.otp }),
      }).then((response)=>{
          response.json().then((data)=>{
             if (response.ok) {
           console.log('OTP verified successfully:', data);
           navigate('/dashboard');
       } else {
           console.error('Error verifying OTP:', data.message);
         }
         });
       
      });
        return { ...v, ["otp1"]: "values.pass.value" }
       });
     
    } catch (error) {
      console.error('Error verifying OTP:', error);
    }
  };

  switch (step) {
    case 1:
      return (
        <SignUp
          nextStep={nextStep}
          handleChange={handleChange2}
          formData={formData}
        />
      );
    case 2:
      return (
        <SetUp
          nextStep={nextStep}
          prevStep={prevStep}
          handleChange={handleChange}
          formData={formData}
        />
      );
    case 3:
      return (
        <EmailVerification
          prevStep={prevStep}
          handleChange={handleChange}
          formData={formData}
          handleSubmit={handleSubmit}
        />
      );
    default:
      return <div>Error</div>;
  }
};

export default SignupForm;
