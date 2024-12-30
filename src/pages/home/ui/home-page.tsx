import { MainBlock } from "@/pages/home/ui/content-block";
import { PageTitle } from "@/shared";

const HomePage = () => {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-between px-2">
      <header className="mb-14 flex h-[10%] items-center justify-center">
        <PageTitle />
      </header>
      <MainBlock />
    </div>
  );
};

export { HomePage };
