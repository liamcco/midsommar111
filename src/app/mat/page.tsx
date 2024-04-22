export default function Page() {
  return (
    <>
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
    </>
  );
}
