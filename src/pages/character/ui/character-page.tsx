import { CharacterCard } from "@/entities/character";
import { CharacterCardCarousel } from "@/entities/character/ui/character-card-carousel";
import { PageTitle } from "@/shared";

export const CharacterPage = () => {
  return (
    <div className="flex size-full min-h-screen flex-col items-center gap-4">
      <PageTitle />
      <div className="flex h-fit w-full justify-center px-3">
        <CharacterCardCarousel
          cards={[<CharacterCard key={0} />, <div key={1}>TEST</div>]}
        />
      </div>
    </div>
  );
};
