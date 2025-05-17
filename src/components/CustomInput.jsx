// src/components/CustomInput.jsx
const CustomInput = ({ label, type, id, name, value, onChange }) => (
  <div className="mb-4">
    <label htmlFor={id} className="block mb-1 font-medium text-gray-700">
      {label}
    </label>
    <input
      type={type}
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      className="w-full border border-gray-300 p-2 rounded"
    />
  </div>
);

export default CustomInput;
