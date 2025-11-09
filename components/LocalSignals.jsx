// components/LocalSignals.jsx
// Renders authoritative local links & paint stores.
// NOTE: This file must contain ONE default export only.

export default function SignalsBlock({ signals }) {
  if (!signals) return null;

  const {
    authorities = {}, // { permitsURL, hazardousWasteURL, dropOffDepotsURL }
    paintStores = [], // [{ name, address, url }]
    bigBox = [], // [{ name, address, url }] (optional)
  } = signals;

  const LinkOut = ({ href, children }) => (
    <a
      href={href}
      className="underline"
      target="_blank"
      rel="nofollow noopener noreferrer"
    >
      {children}
    </a>
  );

  const List = ({ items }) =>
    !items?.length ? null : (
      <ul className="list-disc ml-5 mt-2 space-y-1">
        {items.map((x) => (
          <li key={x.url || `${x.name}-${x.address}`}>
            <LinkOut href={x.url}>{x.name}</LinkOut>
            {x.address ? (
              <span className="text-gray-600"> — {x.address}</span>
            ) : null}
          </li>
        ))}
      </ul>
    );

  return (
    <section className="card p-5 bg-white mt-10">
      <h2 className="text-2xl font-semibold">Local Resources</h2>
      <p className="text-gray-700 mt-2">
        Trusted links for permits, paint, and recycling.
      </p>

      {/* Paint stores */}
      {paintStores?.length ? (
        <>
          <h3 className="font-semibold mt-4">Quality Paint Stores</h3>
          <List items={paintStores} />
        </>
      ) : null}

      {/* Optional big-box section */}
      {bigBox?.length ? (
        <>
          <h3 className="font-semibold mt-4">Big-Box Supply</h3>
          <List items={bigBox} />
        </>
      ) : null}

      {/* Authorities */}
      {(authorities.permitsURL ||
        authorities.hazardousWasteURL ||
        authorities.dropOffDepotsURL) && (
        <div className="grid md:grid-cols-2 gap-3 mt-6">
          {authorities.permitsURL && (
            <LinkOut href={authorities.permitsURL}>
              City permits & inspections
            </LinkOut>
          )}
          {authorities.hazardousWasteURL && (
            <LinkOut href={authorities.hazardousWasteURL}>
              Household hazardous waste
            </LinkOut>
          )}
          {authorities.dropOffDepotsURL && (
            <LinkOut href={authorities.dropOffDepotsURL}>
              Drop-off depots
            </LinkOut>
          )}
        </div>
      )}
    </section>
  );
}
