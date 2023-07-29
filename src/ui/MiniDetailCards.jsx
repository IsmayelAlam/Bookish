export default function MiniDetailCards({ icon, text, color }) {
  return (
    <div
      className={`flex items-center py-2 px-1 rounded-lg bg-yellow-300 gap-1 truncate`}
    >
      <div className={`border-2 border-yellow-800 p-2 rounded-full`}>
        {icon}
      </div>
      <p>{text}</p>
    </div>
  );
}