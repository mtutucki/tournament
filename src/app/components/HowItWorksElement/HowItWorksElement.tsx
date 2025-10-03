import { HowItWorksStep } from "@/app/data/howItWorks";

export default function HowItWorksElement({
  number,
  mainText,
  secondaryText,
}: HowItWorksStep) {
  return (
    <div className="flex cursor-pointer flex-col items-center space-y-2 transition-transform hover:scale-105">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500 font-bold text-white">
        {number}
      </div>
      <h3 className="font-semibold">{mainText}</h3>
      <p className="text-sm text-gray-300">{secondaryText}</p>
    </div>
  );
}
