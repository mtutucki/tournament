type FormInputProps = {
  type: string;
  placeholder: string;
  name: string;
};

export default function FormInput({ type, placeholder, name }: FormInputProps) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="rounded border border-[var(--button)] px-4 py-2"
      name={name}
      required
    />
  );
}
