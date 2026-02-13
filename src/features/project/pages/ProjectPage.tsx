import { useState } from "react";
import Header from "@shared/components/Header";
import Footer from "@shared/components/Footer";
import Button from "@shared/components/Button";
import ProjectCard from "@project/components/ProjectCard";
import { PROJECTS, GENERATIONS } from "@project/constants/projectData";
import { getProjectImageById } from "@project/constants/projectCardConfig";
import type { Generation } from "@project/types/project";

export default function ProjectPage() {
  const [selectedGen, setSelectedGen] = useState<Generation>(11);
  const displayed = PROJECTS.filter((p) => p.generation === selectedGen);
  const mobileFilterButtonBase =
    "button-style inline-flex h-[29px] w-[39px] items-center justify-center rounded-[10px] border-[1.01px] px-0 text-[8px] leading-none font-medium tracking-[-0.01em] text-white";
  const mobileFilterButtonActive = "button-style--active";

  return (
    <div className="bg-mobile-page-dark md:bg-black1 text-white1 min-h-dvh w-full bg-black md:bg-none">
      <Header />

      <main className="px-4 pt-4 pb-16 md:px-0 md:pt-15 md:pb-75">
        <div className="mx-auto w-full max-w-228 md:px-12 xl:max-w-360">
          <div className="mt-2 mb-24 hidden flex-col items-center gap-6 min-[701px]:flex">
            <div
              className="order-1 mt-0 flex items-center justify-center gap-5"
              role="tablist"
              aria-label="기수 선택"
            >
              {GENERATIONS.map((gen) => {
                const active = gen === selectedGen;

                return (
                  <Button
                    key={gen}
                    variant="part"
                    selected={active}
                    onClick={() => setSelectedGen(gen)}
                  >
                    {gen}기
                  </Button>
                );
              })}
            </div>
          </div>

          <div className="mx-auto mb-12 flex w-full max-w-89.75 items-center justify-center gap-3 md:hidden">
            {GENERATIONS.map((gen) => {
              const active = gen === selectedGen;

              return (
                <button
                  key={gen}
                  type="button"
                  className={`${mobileFilterButtonBase} ${active ? mobileFilterButtonActive : ""}`}
                  onClick={() => setSelectedGen(gen)}
                  aria-pressed={active}
                >
                  {gen}기
                </button>
              );
            })}
          </div>

          <section
            className="grid grid-cols-1 justify-items-center gap-y-5 min-[701px]:grid-cols-[repeat(3,389.93px)] min-[701px]:justify-center min-[701px]:justify-items-stretch min-[701px]:gap-x-20 min-[701px]:gap-y-24 min-[701px]:max-[1100px]:grid-cols-[repeat(2,389.93px)] min-[701px]:max-[1100px]:gap-x-[131.995px] min-[701px]:max-[1100px]:gap-y-24"
            aria-label="프로젝트 목록"
          >
            {displayed.map((item) => (
              <ProjectCard
                key={item.id}
                item={item}
                imgSrc={getProjectImageById(item.id)}
              />
            ))}
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
