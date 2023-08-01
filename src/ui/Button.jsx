export default function ButtonLink({ link, icon, text, onClick }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="w-60 py-2 rounded-full flex items-center justify-center gap-1 capitalize font-semibold text-white bg-orange-500"
      onClick={onClick}
    >
      {icon}
      <span>{text}</span>
    </a>
  );
}
