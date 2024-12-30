"use client";
import { ArrowRight } from "lucide-react";
import React, { ReactNode, useEffect, useState, useCallback } from "react";

interface ICharacterCardCarousel {
  cards: ReactNode[];
  startFromCardId?: number;
}

export const CharacterCardCarousel = ({
  cards,
  startFromCardId = 0,
}: ICharacterCardCarousel) => {
  const [cardIdx, setCardIdx] = useState(startFromCardId);
  const [isGoRightAvailable, setIsGoRightAvailable] = useState(
    cardIdx !== cards.length - 1,
  );
  const [isGoLeftAvailable, setIsGoLeftAvailable] = useState(cardIdx !== 0);

  useEffect(() => {
    setIsGoRightAvailable(cardIdx !== cards.length - 1);
  }, [cardIdx, cards]);

  useEffect(() => {
    setIsGoLeftAvailable(cardIdx !== 0);
  }, [cardIdx]);

  const goRight = useCallback(() => {
    if (isGoRightAvailable) {
      setCardIdx((prev) => prev + 1);
    }
  }, [isGoRightAvailable]);

  const goLeft = useCallback(() => {
    if (isGoLeftAvailable) {
      setCardIdx((prev) => prev - 1);
    }
  }, [isGoLeftAvailable]);

  return (
    <div className="relative size-full h-screen max-h-[820px] max-w-screen-sm flex-col overflow-x-hidden rounded-3xl">
      {cards.map((card, index) => (
        <div
          style={{
            transform: `translateX(${110 * (index - cardIdx)}%)`,
            willChange: "transform",
            backfaceVisibility: "hidden",
          }}
          className="absolute size-full transition-transform duration-300 ease-out"
          key={index}
        >
          {card}
        </div>
      ))}
      <button
        onClick={goRight}
        className={`absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-[#967364]/65 p-2 opacity-0 backdrop-blur transition-all duration-100 hover:bg-[#7a5e52]/65 dark:bg-[#8079B9]/65 dark:hover:bg-[#6157a8]/65 ${
          !isGoRightAvailable ? "hidden" : "opacity-100"
        }`}
      >
        <ArrowRight size={25} color="white" />
      </button>
      <button
        onClick={goLeft}
        disabled={!isGoLeftAvailable}
        className={`absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-[#967364]/65 p-2 opacity-0 backdrop-blur transition-opacity duration-100 hover:bg-[#7a5e52]/65 dark:bg-[#8079B9]/65 dark:hover:bg-[#6157a8]/65 ${
          !isGoLeftAvailable ? "" : "opacity-100"
        }`}
      >
        <ArrowRight className="rotate-180" size={25} color="white" />
      </button>
    </div>
  );
};
