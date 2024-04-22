import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] rounded-xl"
          src="/midsommar.gif"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
          unoptimized
        />
      </div>

      <div className="mt-8 text-center max-w-[30ch] lg:mt-16 lg:mb-0 lg:w-full lg:max-w-5xl">
        <p className="mb-8 text-lg opacity-70">
          Hjärtligt välkomna till årets största midsommarfest i Gundrabol! 🌸
        </p>
        <h1 className="text-3xl font-semibold">Midsommar 2024</h1>
        <a
          className="transition-colors hover:text-blue-500 dark:hover:text-blue-300"
          href="https://maps.app.goo.gl/chQUkfVeb9wiXGTF8"
          target="_blank"
        >
          <p className="text-lg opacity-70 italic">
            Gunrabol 111, 662 91 Åmål{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </p>
        </a>
      </div>

      <div className="my-4">
        <a className="text-blue-500 dark:text-blue-300" href="karta.pdf">
          <p className="font-bold text-xl">~event-kartan~</p>
        </a>
      </div>

      <div className="mb-8 mt-4 grid text-justify lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-3 lg:text-left">
        <p className="mb-4 max-w-[30ch] text-sm opacity-50">
          Vi välkomnar till festligheter från kl. 19:00. Under kvällen kommer vi
          att ha en bar med ett brett sortiment, där du kan beställa drinkar
          till ett förmånligt pris.
        </p>
        <p className="mb-4 max-w-[30ch] text-sm opacity-50">
          Det är också möjigt att förboka tillgång till gunrabols egna grill,
          som kommer att vara öppen under hela kvällen. Där kan du beställa
          hamburgare, korv och annat gott som du kan grilla själv.
        </p>
        <p className="mb-4 max-w-[30ch] text-sm opacity-50">
          Det rekommenderade transportmedlet är cykel, då vi ämnar att bli fulla
          som ägg. För mer information om festen, se nedan.
        </p>
      </div>

      <div className="mb-64 mt-8 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
        <a
          href="/mat#mat"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Mat{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Läs mer om GB-grillen och förboka ditt käk här!
          </p>
        </a>

        <a
          href="/mat#dryck"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Dryck{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Upptäck Gunrabols lokala bar och utforska vårt sortiment.
          </p>
        </a>

        <a
          href="/mat#liveband"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Liveband{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Under kvällen gästas festen av{" "}
            <span className="italic">Blåtira</span>.
          </p>
        </a>

        <a
          href="/hosts"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Värdar{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Möt era värdar här!
          </p>
        </a>
      </div>
    </>
  );
}
