export default function MainServiceDetail({
  image,
  title,
  desc,
}: {
  image: string;
  title: string;
  desc: string;
}) {
  return (
    <div className="flex flex-col items-center gap-5">
      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary1 p-2">
        <div
          className="p- h-14 w-14 rounded-full bg-black bg-center bg-no-repeat"
          style={{ backgroundImage: `url(/${image})` }}
        />
      </div>
      <div className="flex flex-col items-center">
        <h1 className="text-xl font-semibold">{title}</h1>
        <p>{desc}</p>
      </div>
    </div>
  );
}
