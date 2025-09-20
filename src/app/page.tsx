"use client";

import BgDodecahedron from "../components/BgDodecahedron";
import BgLinesPhoto from "../components/BgLinesPhoto";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Section 1: Banner background animation */}
      <section className="relative">
        <BgDodecahedron />
      </section>

      {/* Section 2: About with lines/photo background */}
      <section id="about">
        <div className="max-w-screen-xl mx-auto px-4 pt-[120px] pb-[30px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-8">
            <div className="lg:col-span-6 xl:col-span-5"></div>
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
