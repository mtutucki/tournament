type FormButtonProps = {
  text: string;
};

export default function FormButton({ text }: FormButtonProps) {
  return (
    <button
      type="submit"
      className="cursor-pointer rounded bg-[var(--button)] p-2 transition-colors hover:bg-[var(--button-light)]"
    >
      {text}
    </button>
  );
}
