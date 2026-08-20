export default function Button({ children, onClick, variant = "primary" }) {
  const variants = {
    primary: "bg-blue-400 hover:bg-blue-500",
    secondary: "bg-gray-200 hover:bg-gray-300",
    danger: "bg-red-400 hover:bg-red-500",
  };

  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 border-2 border-black border-b-4 border-r-4 mt-4 font-medium ${variants[variant]}`}
    >
      {children}
    </button>
  );
}
