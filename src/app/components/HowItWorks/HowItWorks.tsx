import { howItWorksElements } from "@/app/data/howItWorks";
import HowItWorksElement from "../HowItWorksElement/HowItWorksElement";

export default function HowItWorks() {
  return (
    <section className="px-6 pb-16 text-center">
      <h2 className="mb-8 text-2xl font-bold">Jak to działa?</h2>

      <div className="grid gap-8 md:grid-cols-4">
        {howItWorksElements.map((step) => (
          <HowItWorksElement
            key={step.number}
            number={step.number}
            mainText={step.mainText}
            secondaryText={step.secondaryText}
          />
        ))}
      </div>
    </section>
  );
}
