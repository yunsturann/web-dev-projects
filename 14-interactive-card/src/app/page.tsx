import CardBack from "@/components/CardBack";
import CardForm from "@/components/CardForm";
import CardFront from "@/components/CardFront";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full h-[75vh] max-w-[1440px] flex bg-white text-lg">
      <aside className="relative w-[30%] flex items-center justify-end bg-desktop bg-center bg-cover">
        <div className="relative">
          <CardFront />
          <CardBack />
        </div>
      </aside>
      <section className="w-[70%] flex items-center justify-center">
        <CardForm />
      </section>
    </main>
  );
}
