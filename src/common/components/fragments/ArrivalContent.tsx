import Link from "next/link";

export default function ArrivalContent({
  title,
  description,
  href,
}: {
  title: string;
  description: string;
  href: string;
}) {
  return (
    <div className="z-10 flex max-w-xs flex-col gap-4 text-white">
      <h1 className="text-2xl font-semibold">{title}</h1>
      <p>{description}</p>
      <Link href={href} className="text-base font-medium underline">
        Shop Now
      </Link>
    </div>
  );
}
