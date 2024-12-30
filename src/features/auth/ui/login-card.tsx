"use client";
import Image from "next/image";
import styles from "./login-card.module.css";
import { Dispatch, SetStateAction, useEffect } from "react";
import { authClient } from "@/shared/lib/auth/auth-client";

interface LoginCard {
  setShakeSiho: Dispatch<SetStateAction<boolean>>;
  shakeSiho: boolean;
}

const signIn = async () => {
  authClient.signIn.social({
    provider: "github",
  });
};

export const LoginCard = ({ setShakeSiho, shakeSiho }: LoginCard) => {
  const { data } = authClient.useSession();
  useEffect(() => {
    console.log(data);
  });
  return (
    <div
      role="presentation"
      onMouseEnter={() => setShakeSiho(true)}
      onMouseLeave={() => setShakeSiho(false)}
      className="w-full max-w-screen-sm rounded-3xl shadow-none transition-shadow duration-150 ease-linear hover:shadow-[0_0_100px_15px_#92817A] dark:hover:shadow-[0_0_100px_15px_#7c81d8]"
    >
      <div className="relative w-full rounded-t-3xl border-2 border-dashed border-black px-2 dark:border-white">
        <Image
          src="/hehe.webp"
          width={112}
          height={112}
          className={`${
            shakeSiho ? styles["shake-image-click"] : ""
          } ${styles["shake-image"]} absolute -top-16 left-0 w-28`}
          alt="cat"
        />
        <h1 className="mb-4 mt-8 w-full text-center text-3xl font-medium">
          Start new journey 🧙‍♂️
        </h1>
        <p className="mb-4 text-center text-[16px] font-light text-black text-opacity-60 dark:text-white dark:text-opacity-75">
          Use your email or another service to
          <br />
          continue with Swords and Spells.
        </p>
      </div>

      <div className="flex w-full flex-col items-center justify-center gap-3 rounded-b-3xl border-2 border-t-0 border-dashed border-black px-2 py-8 shadow-md dark:border-white">
        <button className="w-full rounded-full border border-[#848586] py-2 transition-colors hover:bg-black/10 dark:border-white/60">
          <p className="text-2xl font-light dark:text-white">
            Continue with Google
          </p>
        </button>
        <button
          onClick={signIn}
          className="w-full rounded-full border border-[#848586] py-2 transition-colors hover:bg-black/10 dark:border-white/60"
        >
          <p className="text-2xl font-light dark:text-white">
            Continue with GitHub
          </p>
        </button>
        <button className="w-full rounded-full bg-[#CB785C] py-3 transition-colors duration-75 hover:bg-[#c26141] dark:bg-[hsl(18deg_20%_49%)] dark:hover:bg-[hsl(18deg_20%_42)]">
          <p className="text-2xl font-medium text-white">Continue with email</p>
        </button>
      </div>
    </div>
  );
};
