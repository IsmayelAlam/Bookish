export default function MiniDetailCards({ icon, text }) {
  return (
    <div
      className={`flex items-center py-2 px-2 rounded-lg bg-yellow-300 gap-1 truncate`}
    >
      <div className={`border border-black p-1 rounded-full`}>{icon}</div>
      <p>{text}</p>
    </div>
  );
}
