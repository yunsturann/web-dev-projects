import Image from "next/image";
import Link from "next/link";

const Download = () => {
  return (
    <section id="download" className="py-16 md:py-28 relative">
      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-20">
        <Image
          src="/images/beans2.jpg"
          alt="bg"
          fill
          className="object-cover "
        />
      </div>

      {/* CONTAINER / WRAPPER*/}
      <div className="container" data-aos="fade-up">
        {/*CONTENT*/}
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center gap-4 md:gap-8">
          {/*title*/}
          <h2 className="heading_two text-white   font-second2">
            Coffee cafe is available for Andorid and Ios
          </h2>
          {/*Links*/}
          <div className="flex gap-x-6 gap-y-3 flex-wrap justify-center">
            {/* Appstore */}
            <Link href={"/"}>
              <Image
                src={"/images/app_store.png"}
                alt="App Store Link"
                width={150}
                height={120}
                className="object-contain cursor-pointer hover:opacity-80 transition"
              />
            </Link>
            {/* PLAY STORE */}
            <Link href={"/"}>
              <Image
                src={"/images/play_store.png"}
                alt="Play Store Link"
                width={150}
                height={120}
                className="object-contain cursor-pointer hover:opacity-80 transition"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Download;
