import FormButton from "../FormButton/FormButton";
import FormInput from "../FormInput/FormInput";
import FormWrapper from "../FormWrapper/FormWrapper";

export default function FormRegister() {
  return (
    <FormWrapper>
      <p className="text-xl">Utwórz pokój</p>
      <FormInput type="text" placeholder="Nazwa pokoju" name="name" />
      <FormInput type="password" placeholder="Hasło pokoju" name="password" />
      <FormButton text="Stwórz pokój"></FormButton>
    </FormWrapper>
  );
}
