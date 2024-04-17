import BadgeCategory from "../elements/BadgeCategory";

export default function BadgeSection({
  title,
  section,
}: {
  title: string;
  section: string;
}) {
  return (
    <div className="flex flex-col gap-10">
      <BadgeCategory title={title} />
      <h2 className="text-4xl font-semibold">{section}</h2>
    </div>
  );
}
