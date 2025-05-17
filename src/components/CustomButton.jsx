// src/components/CustomButton.jsx
const CustomButton = ({ text, onClick }) => (
  <button
    type="submit"
    onClick={onClick}
    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
  >
    {text}
  </button>
);

export default CustomButton;
