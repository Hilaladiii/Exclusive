export default function CategoryPhone({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="group flex h-36 w-44 cursor-pointer flex-col items-center justify-center rounded border border-black/30 duration-200 hover:border-secondary2 hover:bg-secondary2">
      {children}
      <p className="group-hover:text-white">{title}</p>
    </div>
  );
}
