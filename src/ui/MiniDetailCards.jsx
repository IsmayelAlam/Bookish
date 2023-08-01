export default function MiniDetailCards({ icon, text, onClick }) {
  return (
    <div
      className={`flex items-center py-2 px-2 rounded-lg bg-yellow-300 gap-1 truncate`}
      onClick={onClick}
    >
      <div className={`border border-black p-1 rounded-full`}>{icon}</div>
      <p>{text}</p>
    </div>
  );
}
