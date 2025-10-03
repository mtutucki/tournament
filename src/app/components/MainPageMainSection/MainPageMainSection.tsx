"use client";

import { useState } from "react";
import FormLogin from "../FormLogin.tsx/FormLogin";
import FormRegister from "../FormRegister.tsx/FormRegister";
import HeadingH1 from "../HeadingH1/HeadingH1";

export default function MainPageMainSection() {
  const [isLogin, setIsLogin] = useState<boolean>(true);
  const isLoginText = isLogin ? "Utwórz nowy pokój" : "Dołącz do pokoju";

  return (
    <section className="flex min-h-screen flex-col items-center justify-center space-y-4">
      <HeadingH1 text="SquadUp" />
      <p className="mb-8 text-lg">
        Twórz turnieje, graj i dziel się emocjami ze swoją ekipą 🎮
      </p>
      {isLogin ? <FormLogin /> : <FormRegister />}

      <button
        className="mt-4 cursor-pointer text-[var(--text)]"
        type="button"
        onClick={() => setIsLogin((prev) => !prev)}
      >
        {isLoginText}
      </button>
      <div className="absolute bottom-10 animate-bounce">
        <span className="text-gray-300">↓</span>
      </div>
    </section>
  );
}
