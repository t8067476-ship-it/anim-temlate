"use client";

import BgDodecahedron from "../components/BgDodecahedron";
import BgLinesPhoto from "../components/BgLinesPhoto";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Section 1: Banner background animation */}
      <section className="relative">
        <BgDodecahedron />
        <div className="absolute inset-0 z-10 flex items-end sm:items-center justify-center">
          <div className="max-w-screen-xl w-full px-4 pb-12 sm:pb-0">
            <h1 className="text-3xl sm:text-4xl font-medium text-white drop-shadow">Креативное пространство</h1>
            <p className="mt-3 text-base sm:text-lg max-w-xl text-white/90 drop-shadow">Мы создаём выразительные цифровые решения, соединяя дизайн, технологию и внимание к деталям.</p>
          </div>
        </div>
      </section>

      {/* Section 2: About with lines/photo background */}
      <section id="about">
        <div className="max-w-screen-xl mx-auto px-4 pt-[120px] pb-[30px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-8">
            <div className="lg:col-span-6 xl:col-span-5">
              <h2 className="text-2xl sm:text-3xl font-medium">О проекте</h2>
              <p className="mt-3 text-base text-neutral-600">Небольшой блок текста для описания раздела. Здесь можно кратко рассказать о миссии, услуге или продукте.</p>
            </div>
            <div className="lg:col-span-5 lg:col-start-8">
              <div className="relative mb-[90px]">
                <BgLinesPhoto />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
