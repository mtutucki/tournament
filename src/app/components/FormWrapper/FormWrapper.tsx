type FormWrapperProps = {
  children: React.ReactNode;
};

export default function FormWrapper({ children }: FormWrapperProps) {
  return (
    <form className="flex w-full flex-col space-y-6 rounded-lg bg-[var(--bg-color-dark)] p-6">
      {children}
    </form>
  );
}
