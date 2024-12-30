import { Footprints, ShieldHalf } from "lucide-react";

export const CharacterCard = () => {
  return (
    <div className="h-full rounded-3xl border-2 border-dashed border-black p-1">
      <div
        className="flex size-full flex-col rounded-3xl bg-[#EBDBBB] p-1 dark:border-white dark:bg-transparent"
        style={{
          backgroundImage: `url("/top-section-bg.jpeg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          boxShadow: "0 0 20px rgba(0, 0, 0, 0.5)",
        }}
      >
        <div className="relative flex h-10 w-full items-center justify-center rounded-3xl bg-[#CB785C]/65 px-1 py-2 text-3xl text-white shadow-lg dark:bg-[#8079B9]/65">
          <p className="absolute z-10">Чешипуз Второй</p>
          <div className="absolute size-full rounded-3xl backdrop-blur"></div>
        </div>
        <div className="mr-auto flex flex-col gap-4 py-3">
          <div className="flex items-center justify-center gap-2 rounded-3xl bg-[#CB785C]/65 px-2 py-[2px] backdrop-blur dark:bg-[#8079B9]/65">
            <ShieldHalf color="white" />
            <p className="text-2xl text-white">2</p>
          </div>
          <div className="flex items-center justify-center gap-2 rounded-3xl bg-[#CB785C]/65 px-2 py-[2px] backdrop-blur dark:bg-[#8079B9]/65">
            <Footprints color="white" />

            <p className="text-2xl text-white">2</p>
          </div>
        </div>
        <div className="mt-auto flex flex-col gap-3 px-2 pb-1">
          <div className="size-8 rounded-full bg-yellow-700"></div>
          <div className="h-5 w-full rounded-3xl bg-[#FC4A1A]"></div>
          <div className="h-5 w-full rounded-3xl bg-[#F7B733]"></div>
        </div>
      </div>
    </div>
  );
};
