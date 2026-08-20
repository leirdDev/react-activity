export default function ActivityCard({ title, subtitle, color, children }) {
  return (
    <div className="mt-8 border-2 border-l-4 border-b-4 max-w-md mx-auto">
      <div className={`${color} p-4`}>
        <h1 className="font-medium text-xl">{title}</h1>
        <h2>{subtitle}</h2>
      </div>
      <div className="flex flex-col p-4">{children}</div>
    </div>
  );
}
