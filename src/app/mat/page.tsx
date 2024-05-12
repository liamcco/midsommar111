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
            När det är midsommar på Edsgatan går ingen hungrig hem. Vi kommer
            tända en grill som går varm större delen av kvällen. Det kommer
            finnas en utekyl där man kan köpa mat att grilla! Mer info kommer!
            Man kan givetvis ta med egen mat om man så behagar.
          </p>
        </div>

        <div
          className="rounded-lg border border-transparent px-5 py-4"
          id="dryck"
        >
          <h2 className="mb-3 text-2xl font-semibold">Dryck </h2>
          <p className="text-sm opacity-50">
            Midsommar på Edsgatan är en festlig tillställning och det kommer
            finnas möjlighet att köpa alkoholhaltiga drycker. Vi kommer ha en
            bar med ett brett utbud av drycker. Mer info kommer!
          </p>
        </div>

        <div
          className="rounded-lg border border-transparent px-5 py-4"
          id="liveband"
        >
          <h2 className="mb-3 text-2xl font-semibold">Liveband </h2>
          <p className="text-sm opacity-50">
            Ett lokalt band kommer göra debut under kvällen. Vi är stolta att
            meddela att bandet{" "}
            <span
              className="font-semibold
            text-red-500"
            >
              Blåtira
            </span>{" "}
            kommer spela under kvällen. Missa inte det!
          </p>
        </div>
      </div>
    </>
  );
}
