"use client";

function CategoryIcon({ title }) {
  const normalized = title.toLowerCase();
  const icon =
    normalized.includes("medical")
      ? "medical"
      : normalized.includes("colleges")
        ? "college"
        : "university";

  return (
    <svg className={`client-category-icon client-category-icon-${icon}`} viewBox="0 0 48 48" aria-hidden="true">
      {icon === "university" && (
        <>
          <path d="M6 19 24 9l18 10-18 10L6 19Z" />
          <path d="M12 24v11M18 24v11M30 24v11M36 24v11M9 38h30" />
          <path d="M39 21v10" />
        </>
      )}
      {icon === "medical" && (
        <>
          <path d="M10 17a9 9 0 0 1 15-6 9 9 0 0 1 15 6c0 12-15 21-15 21S10 29 10 17Z" />
          <path d="M24 16v13M17.5 22.5h13" />
        </>
      )}
      {icon === "college" && (
        <>
          <path d="M9 12h13v13H9zM26 12h13v13H26zM9 29h13v7H9zM26 29h13v7H26z" />
          <path d="M14 18h3M31 18h3M14 32.5h3M31 32.5h3" />
        </>
      )}
    </svg>
  );
}

export default function ClientGroups({ groups }) {
  return (
    <div className="client-groups collapsible-client-groups">
      {groups.map(([title, clients]) => (
        <details key={title}>
          <summary>
            <span className="client-category-mark"><CategoryIcon title={title} /></span>
            <span className="client-category-copy">
              <span>{title}</span>
              <em>{clients.length} institutions</em>
            </span>
          </summary>
          <ul>
            {clients.map((client) => (
              <li key={client}>{client}</li>
            ))}
          </ul>
        </details>
      ))}
    </div>
  );
}
