export default function Input({label, placeholder, type = "text", value, onChange}) {
  return (
    <>
      <label className="mb-2">{label}</label>
      <input
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="p-2 border-2 border-gray-400 corner rounded-md mb-2"
      />
    </>
  );
}