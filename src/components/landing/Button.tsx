export default function Button({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) {
  return (
    <button
      className={`px-8 py-3  mx-auto bg-[#00D47E] text-[#013941] rounded-full font-bold shadow-[-2px_2px_0px_#000000] ${className}`}
    >
      {children}
    </button>
  );
}
