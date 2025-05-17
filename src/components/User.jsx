// src/components/User.jsx
import { useState } from 'react';
import CustomInput from './CustomInput';
import CustomButton from './CustomButton';

const User = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    status: '',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Data:", formData);
    alert("User submitted!");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded"
    >
      <h2 className="text-xl font-semibold mb-4">Add User</h2>
      <CustomInput label="Name" type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
      <CustomInput label="Email" type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
      <CustomInput label="Age" type="number" id="age" name="age" value={formData.age} onChange={handleChange} />
      <CustomInput label="Status" type="text" id="status" name="status" value={formData.status} onChange={handleChange} />
      <CustomButton text="Submit" />
    </form>
  );
};

export default User;
