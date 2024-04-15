import useTimer from "@/common/hooks/useTimer";

export default function Timer({ targetDateTime }: { targetDateTime: string }) {
  const { days, hours, minutes, seconds } = useTimer(targetDateTime);

  return (
    <div className="flex flex-row items-end gap-5">
      <SubTime title="Days" duration={days.toString().padStart(2, "0")} />
      <p className="text-4xl">:</p>
      <SubTime title="Hours" duration={hours.toString().padStart(2, "0")} />
      <p className="text-4xl">:</p>
      <SubTime title="Minutes" duration={minutes.toString().padStart(2, "0")} />
      <p className="text-4xl">:</p>
      <SubTime title="Seconds" duration={seconds.toString().padStart(2, "0")} />
    </div>
  );
}

const SubTime = ({ title, duration }: { title: string; duration: string }) => {
  return (
    <div className="flex flex-col">
      <p className="text-xs font-medium">{title}</p>
      <span className="text-4xl font-bold">{duration}</span>
    </div>
  );
};
