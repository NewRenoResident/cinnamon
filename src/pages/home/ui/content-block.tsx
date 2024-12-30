"use client";
import { LoginCard } from "@/features/auth/ui/login-card";
import { useState } from "react";

export const MainBlock = () => {
  const [shakeSiho, setShakeSiho] = useState(false);

  const handleShihoClick = () => {
    setShakeSiho(!shakeSiho);
  };
  return (
    <>
      <main className="mb-[5%] w-full max-w-screen-sm">
        <LoginCard setShakeSiho={setShakeSiho} shakeSiho={shakeSiho} />
      </main>
      <footer className="mb-[2%] text-center text-[16px] font-light text-[rgba(0,0,0,0.6)] dark:text-[rgba(255,255,255,0.75)]">
        <p>
          By being on this site you agree
          <br />
          that{" "}
          <button
            onClick={handleShihoClick}
            className="cursor-pointer text-[rgba(0,0,0,0.9)] dark:text-[rgba(255,255,255,1)]"
            tabIndex={0}
          >
            Shiho
          </button>{" "}
          is a good girl
        </p>
      </footer>
    </>
  );
};
