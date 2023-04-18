const Input = ({ label, type, value, onChange }) => {
  console.log("llegamos acá");
  return (
    <div>
      <label className="block">{label}</label>
      <input
        className="outline-none border border-black mb-2"
        type={type}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

export default Input;
