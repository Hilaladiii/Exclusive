import useTimer from "@/common/hooks/useTimer";

export default function MusicExperienceTime({
  targetDateTime,
}: {
  targetDateTime: string;
}) {
  const { days, hours, minutes, seconds } = useTimer(targetDateTime);
  return (
    <div className="flex flex-row gap-6">
      <div className="flex h-20 w-20 flex-col items-center justify-center rounded-full bg-white ">
        <span className="font-semibold">{days}</span>
        <p className="text-sm">Day</p>
      </div>
      <div className="flex h-20 w-20 flex-col items-center justify-center rounded-full bg-white ">
        <span className="font-semibold">{hours}</span>
        <p className="text-sm">Hours</p>
      </div>
      <div className="flex h-20 w-20 flex-col items-center justify-center rounded-full bg-white ">
        <span className="font-semibold">{minutes}</span>
        <p className="text-sm">Minutes</p>
      </div>
      <div className="flex h-20 w-20 flex-col items-center justify-center rounded-full bg-white ">
        <span className="font-semibold">{seconds}</span>
        <p className="text-sm">Seconds</p>
      </div>
    </div>
  );
}
