export default function BadgeCategory({ title }: { title: string }) {
  return (
    <div className="mt-36 flex flex-row items-center gap-4">
      <div className="flex h-10 w-5 rounded bg-secondary2" />
      <h1 className="text-secondary2">{title}</h1>
    </div>
  );
}
