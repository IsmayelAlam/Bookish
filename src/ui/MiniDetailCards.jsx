export default function MiniDetailCards({ icon, text }) {
  return (
    <div className="flex items-center py-2 px-2 rounded-lg bg-accent03 gap-1 max-w-full shadow text-gray-600 font-semibold">
      <div className={`border border-gray-600 p-1 rounded-full`}>{icon}</div>
      <p>{text}</p>
    </div>
  );
}
