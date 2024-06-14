import { Button, Center, Input } from "@chakra-ui/react";
import { PiHandWavingFill } from "react-icons/pi";
import { useState } from "react";

const Roles = ({ prevStep, handleChange, formData, handleSubmit }) => {
  const [selectedRole, setSelectedRole] = useState('');

  const handleRoleSelect = (role) => {
    setSelectedRole(role);
    handleChange('role')({ target: { value: role } });
  };

  return (
    <div>
      <div className="text-center my-10 flex justify-center items-center">
        <h2 className="font-bold text-xl text-[#3A404B]">Welcome</h2>
        <PiHandWavingFill />
      </div>

      <div className="text-center">
        <h2 className="font-bold text-xl text-[#3A404B] mb-2">
          What is Your Role?
        </h2>
        <p className="text-md">Choose a role let's set up your profile</p>
      </div>

      <div className="flex flex-col justify-center items-center">
        <div className="flex gap-8 mt-10">
          {['Product Manager', 'Marketing Officer', 'Director of Operations', 'Accountant'].map(role => (
            <Button
              key={role}
              size="lg"
              variant="outline"
              borderColor="#c9ccd1"
              textColor="#3a404b"
              onClick={() => handleRoleSelect(role)}
              isActive={selectedRole === role}
            >
              {role}
            </Button>
          ))}
        </div>
        <div className="flex gap-8 mt-10">
          {['Sales Manager', 'Content Strategies', 'Technical Specialist'].map(role => (
            <Button
              key={role}
              size="lg"
              variant="outline"
              borderColor="#c9ccd1"
              textColor="#3a404b"
              onClick={() => handleRoleSelect(role)}
              isActive={selectedRole === role}
            >
              {role}
            </Button>
          ))}
        </div>
        <div className="flex gap-8 my-10">
          <Button
            size="lg"
            variant="outline"
            borderColor="#c9ccd1"
            textColor="#3a404b"
            onClick={() => handleRoleSelect('Customer Service Manager')}
            isActive={selectedRole === 'Customer Service Manager'}
          >
            Customer Service Manager
          </Button>
          <Input
            htmlSize={4}
            width='auto'
            placeholder="Others"
            borderColor="#c9ccd1"
            textColor="#3a404b"
            _placeholder={{ color: '#3a404b' }}
            className="p-6"
            value={selectedRole === 'Others' ? formData.role : ''}
            onChange={(e) => handleChange('role')({ target: { value: e.target.value } })}
          />
        </div>

        <Button
          colorScheme="blue"
          size="lg"
          className="mt-3"
          onClick={handleSubmit}
          disabled={!selectedRole}
        >
          Done
        </Button>
      </div>

      <div className="flex justify-center items-end gap-14">
        <Center className="mt-8 flex flex-col gap-8">
          <img src=".\public\images\LOGO.png" alt="Logo" />
          <img src=".\public\images\Slider.png" alt="Slider" />
        </Center>
      </div>
    </div>
  );
};

export default Roles;

