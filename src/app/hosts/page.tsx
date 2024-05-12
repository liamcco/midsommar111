import Image from "next/image";

export default function Page() {
  return (
    <div className="mb-32 mt-8 text-center lg:mb-0 lg:w-full lg:max-w-5xl">
      <div className="pb-8 text-center lg:mb-0 lg:w-full lg:max-w-5xl">
        <div className="py-4 flex flex-col items-center gap-2" id="liam">
          <Image
            className="dark:drop-shadow-[0_0_0.3rem_#ffffff70] rounded-xl"
            src="/liam.jpg"
            alt="Liam"
            width={300}
            height={37}
            priority
            unoptimized
          />
          <h2 className="mb-3 text-2xl font-semibold">Liam </h2>
        </div>

        <p className="mb-4 italic">tillsammans med</p>

        <div className="py-4 flex flex-col items-center gap-2" id="dante">
          <Image
            className="dark:drop-shadow-[0_0_0.3rem_#ffffff70] rounded-xl"
            src="/dante.jpg"
            alt="Dante"
            width={300}
            height={37}
            priority
            unoptimized
          />
          <h2 className="mb-3 text-2xl font-semibold">Arvid & Dante</h2>
        </div>
      </div>
    </div>
  );
}
