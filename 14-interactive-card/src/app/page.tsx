"use client";
import CardBack from "@/components/CardBack";
import CardForm from "@/components/CardForm";
import CardFront from "@/components/CardFront";
import Confirmed from "@/components/Confirmed";
import { useState } from "react";

export default function Home() {
  const [isConfirmed, setIsConfirmed] = useState(false);

  return (
    <main className="w-full h-full lg:h-[75vh] max-w-[1440px] flex flex-col lg:flex-row max-lg:gap-12 bg-white text-lg">
      <aside className="relative w-full max-lg:h-[40%] lg:w-[30%] flex items-center justify-center lg:justify-end bg-mobile lg:bg-desktop bg-center bg-cover">
        {/* DESKTOP */}
        <div className="block relative">
          <CardFront />
          <CardBack />
        </div>
        {/* MOBILE */}
      </aside>
      <section className="w-full lg:w-[70%] flex items-center justify-center lg:ml-20 xl:ml-0 p-4">
        {!isConfirmed ? (
          <CardForm setIsConfirmed={setIsConfirmed} />
        ) : (
          <Confirmed setIsConfirmed={setIsConfirmed} />
        )}
      </section>
    </main>
  );
}
