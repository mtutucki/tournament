export type HowItWorksStep = {
  number: number;
  mainText: string;
  secondaryText: string;
};

export const howItWorksElements: HowItWorksStep[] = [
  {
    number: 1,
    mainText: "Utwórz pokój",
    secondaryText: "Nadaj nazwę i ustaw hasło.",
  },
  {
    number: 2,
    mainText: "Zaproś znajomych",
    secondaryText: "Podziel się ID pokoju i hasłem.",
  },
  {
    number: 3,
    mainText: "Dodaj drużyny",
    secondaryText: "Każdy wpisuje swoją ekipę.",
  },
  {
    number: 4,
    mainText: "Wpisuj wyniki",
    secondaryText: "I oglądaj tabelę na żywo.",
  },
];
