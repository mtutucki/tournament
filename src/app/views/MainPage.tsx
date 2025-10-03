import HowItWorks from "../components/HowItWorks/HowItWorks";
import MainPageMainSection from "../components/MainPageMainSection/MainPageMainSection";

export default function MainPage() {
  return (
    <main className="flex flex-col items-center justify-center px-6 text-center">
      <MainPageMainSection />
      <HowItWorks />
    </main>
  );
}
