import Image from "next/image";

export default function Page() {
  return (
    <>
      <div className="mb-64 mt-8 text-center lg:mb-0 lg:w-full lg:max-w-5xl">
        <div className="px-5 py-4 flex flex-col items-center gap-2" id="arvid">
          <Image
            className="dark:drop-shadow-[0_0_0.3rem_#ffffff70] rounded-xl"
            src="/arvid.jpg"
            alt="Arvid"
            width={180}
            height={37}
            priority
            unoptimized
          />
          <h2 className="mb-3 text-2xl font-semibold">Arvid </h2>
        </div>

        <div className="px-5 py-4 flex flex-col items-center gap-2" id="dante">
          <Image
            className="dark:drop-shadow-[0_0_0.3rem_#ffffff70] rounded-xl"
            src="/dante.jpg"
            alt="Dante"
            width={180}
            height={37}
            priority
            unoptimized
          />
          <h2 className="mb-3 text-2xl font-semibold">Dante </h2>
        </div>

        <div className="px-5 py-4 flex flex-col items-center gap-2" id="liam">
          <Image
            className="dark:drop-shadow-[0_0_0.3rem_#ffffff70] rounded-xl"
            src="/dante.jpg"
            alt="Dante"
            width={180}
            height={37}
            priority
            unoptimized
          />
          <h2 className="mb-3 text-2xl font-semibold">Liam </h2>
        </div>
      </div>
    </>
  );
}
