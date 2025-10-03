"use client";

import { useParams } from "next/navigation";
import { Option, Team } from "../types/types";
import HeadingH1 from "../components/HeadingH1/HeadingH1";
import FormInput from "../components/FormInput/FormInput";
import FormWrapper from "../components/FormWrapper/FormWrapper";
import FormButton from "../components/FormButton/FormButton";
import FormSelect from "../components/FormSelect/FormSelect";
import { useState } from "react";

export default function RoomConfig() {
  const { roomId } = useParams();
  const [teams, setTeams] = useState<Team[]>([]);

  console.log(teams);

  const options: Option[] = [
    {
      value: "round-robin",
      label: "Każdy z każdym",
    },
    {
      value: "knockout",
      label: "Drabinka (pucharowy)",
    },
  ];

  return (
    <main className="flex flex-col items-center justify-center space-y-4 px-6 py-12">
      <div>
        <HeadingH1 text="Konfiguracja pokoju" />
        <p className="mt-2">#{roomId}</p>
      </div>

      <FormWrapper>
        <FormInput
          type="number"
          placeholder="Liczba drużyn"
          name="number-of-teams"
        />
        <FormSelect defaultOption="Model rozgrywki" options={options} />

        <h4>Drużyny:</h4>

        <FormButton text="Zapisz konfigurację" />
      </FormWrapper>
    </main>
  );
}
