export default function MiniDetailCards({ icon, text }) {
  return (
    <div className="flex items-center py-2 px-2 rounded-lg bg-accent03/90 gap-1 max-w-full shadow text-grayish01 font-semibold">
      <div className={`border border-grayish01 p-1 rounded-full`}>{icon}</div>
      <p>{text}</p>
    </div>
  );
}
