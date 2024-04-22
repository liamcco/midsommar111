import Image from "next/image";

export default function Page() {
  return (
    <>
      <div
        className="mb-64 mt-8 text-center lg:mb-0 lg:w-full lg:max-w-5xl"
        id="dante"
      >
        <div className="rounded-lg border border-transparent px-5 py-4">
          <h2 className="mb-3 text-2xl font-semibold">Dante </h2>
          <p className="text-sm opacity-50">Detaljerad information om Dante</p>
        </div>

        <div
          className="rounded-lg border border-transparent px-5 py-4"
          id="liam"
        >
          <h2 className="mb-3 text-2xl font-semibold">Liam </h2>
          <p className="text-sm opacity-50">Detaljerad information om Liam</p>
        </div>
        <div
          className="rounded-lg border border-transparent px-5 py-4"
          id="arvid"
        >
          <h2 className="mb-3 text-2xl font-semibold">Arvid </h2>
          <p className="text-sm opacity-50">Detaljerad information om Arvid</p>
        </div>
      </div>

      <div></div>
    </>
  );
}
