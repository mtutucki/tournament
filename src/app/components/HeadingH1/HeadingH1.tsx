type HeadingH1Props = {
  text: string;
};

export default function HeadingH1({ text }: HeadingH1Props) {
  return <h1 className="text-3xl font-bold">{text}</h1>;
}
