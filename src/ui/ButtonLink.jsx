export default function ButtonLink({ link, icon, text, onClick }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="w-full px-1 py-2 rounded-full flex items-center justify-center gap-1 capitalize font-semibold text-grayish01 bg-accent03 text-lg active:bg-accent03/80"
      onClick={onClick}
    >
      {icon}
      <span>{text}</span>
    </a>
  );
}
