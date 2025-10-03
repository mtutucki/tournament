import FormButton from "../FormButton/FormButton";
import FormInput from "../FormInput/FormInput";
import FormWrapper from "../FormWrapper/FormWrapper";

export default function FormLogin() {
  return (
    <FormWrapper>
      <p className="text-xl">Zaloguj się</p>
      <FormInput type="text" placeholder="ID pokoju" name="id" />
      <FormInput type="password" placeholder="Hasło" name="password" />
      <FormButton text="Dołącz" />
    </FormWrapper>
  );
}
