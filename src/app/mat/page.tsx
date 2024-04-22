import Image from "next/image";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-12 pt-24 lg:p-0">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center backdrop-blur-2xl dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:p-4">
          <a href="/">
            <Image
              src="/midsommarfest.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={350}
              height={24}
              priority
            />
          </a>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="/"
            rel="noopener noreferrer"
          >
            Midsommar i{" "}
            <Image
              src="/gunrabol.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={150}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div
        className="mb-64 mt-8 text-center lg:mb-0 lg:w-full lg:max-w-5xl"
        id="mat"
      >
        <div className="rounded-lg border border-transparent px-5 py-4">
          <h2 className="mb-3 text-2xl font-semibold">Mat </h2>
          <p className="text-sm opacity-50">
            Detaljerad information om GB-grillen, sponsrad av Dante Tjus
            Catering
          </p>
        </div>

        <div
          className="rounded-lg border border-transparent px-5 py-4"
          id="dryck"
        >
          <h2 className="mb-3 text-2xl font-semibold">Dryck </h2>
          <p className="text-sm opacity-50">
            Detaljerad information om GB-baren
          </p>
        </div>
        <div
          className="rounded-lg border border-transparent px-5 py-4"
          id="liveband"
        >
          <h2 className="mb-3 text-2xl font-semibold">Liveband </h2>
          <p className="text-sm opacity-50">
            Detaljerad information om kvällens liveband
          </p>
        </div>
      </div>

      <div></div>
    </main>
  );
}
