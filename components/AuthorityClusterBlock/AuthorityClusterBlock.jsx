import Link from "next/link";

const linkGroups = [
  {
    title: "Core ceiling and wall services",
    intro:
      "Compare the main services that usually sit around a smooth-ceiling project.",
    links: [
      {
        href: "/services/popcorn-ceiling-removal/",
        label: "Popcorn ceiling removal",
        description:
          "See the full dust-controlled removal, skim coat, primer, and ceiling paint process.",
      },
      {
        href: "/services/drywall-repair/",
        label: "Drywall repair",
        description:
          "Plan for ceiling patches, cracks, water damage, and surface repairs before finishing.",
      },
      {
        href: "/services/drywall-installation/",
        label: "Drywall installation",
        description:
          "Review board replacement, taping, sanding, and paint-ready finishing for larger renovations.",
      },
      {
        href: "/services/interior-painting/",
        label: "Interior painting",
        description:
          "Understand primer, flat ceiling paint, wall repainting, and final colour matching after repairs.",
      },
      {
        href: "/services/wallpaper-removal/",
        label: "Wallpaper removal",
        description:
          "Helpful if wall prep, skim coating, and repainting are part of the same interior update.",
      },
    ],
  },
  {
    title: "Popular service areas",
    intro:
      "Local pricing changes with access, ceiling height, room shape, and existing ceiling condition.",
    links: [
      {
        href: "/popcorn-ceiling-removal/mississauga/",
        label: "Popcorn ceiling removal in Mississauga",
        description:
          "Local smooth-ceiling planning for condos, townhomes, and detached homes across Mississauga.",
      },
      {
        href: "/popcorn-ceiling-removal/oakville/",
        label: "Oakville ceiling texture removal",
        description:
          "Compare removal, skim coating, and finish details for Oakville homes with strong natural light.",
      },
      {
        href: "/popcorn-ceiling-removal/burlington/",
        label: "Burlington popcorn ceiling service",
        description:
          "Review local access, dust control, and finishing notes for Burlington ceiling projects.",
      },
      {
        href: "/popcorn-ceiling-removal/hamilton/",
        label: "Hamilton smooth ceiling contractors",
        description:
          "Plan around older homes, painted texture, ceiling repairs, and room-by-room scheduling.",
      },
      {
        href: "/popcorn-ceiling-removal/toronto/",
        label: "Toronto popcorn ceiling removal",
        description:
          "Useful for condo access, elevator booking, parking, containment, and multi-room pricing.",
      },
      {
        href: "/services/drywall-repair/mississauga/",
        label: "Drywall repair in Mississauga",
        description:
          "Support ceiling removal with patching, water damage repair, sanding, primer, and repaint prep.",
      },
    ],
  },
  {
    title: "Helpful planning guides",
    intro:
      "Use these guides to compare cost, painted texture, quote details, finish levels, and dust control.",
    links: [
      {
        href: "/blog/popcorn-ceiling-removal-cost/",
        label: "Popcorn ceiling removal cost in Ontario",
        description:
          "Learn how access, room size, ceiling height, repairs, primer, and paint affect pricing.",
      },
      {
        href: "/blog/painted-popcorn-ceiling-removal-scrape-or-skim-coat/",
        label: "Painted vs unpainted ceiling texture",
        description:
          "See why painted popcorn takes longer and often changes the removal or skim coat plan.",
      },
      {
        href: "/blog/should-you-remove-popcorn-ceilings-before-selling-your-home/",
        label: "Is removal worth it before selling?",
        description:
          "Compare resale value, buyer expectations, repair scope, and timing before listing a home.",
      },
      {
        href: "/blog/what-happens-after-popcorn-ceiling-removal/",
        label: "Why skim coating matters after removal",
        description:
          "Understand how a full skim coat helps create a smoother ceiling after texture comes off.",
      },
      {
        href: "/blog/level-4-vs-level-5-finish-after-popcorn-ceiling-removal/",
        label: "Level 4 vs Level 5 ceiling finish",
        description:
          "Choose the right finish level for smooth ceilings, pot lights, and critical natural light.",
      },
      {
        href: "/blog/hepa-sanding-containment-smooth-ceiling-projects/",
        label: "Dustless removal with HEPA tools",
        description:
          "Review why Festool Planex sanding, HEPA vacuums, and containment matter during interior work.",
      },
      {
        href: "/blog/popcorn-ceiling-removal-quote-checklist/",
        label: "Popcorn ceiling quote checklist",
        description:
          "Know which photos, room details, repairs, and finish choices help create a clearer estimate.",
      },
      {
        href: "/blog/ceiling-leak-repairs-before-smooth-ceiling-finishing/",
        label: "Ceiling water damage after leaks",
        description:
          "Plan repair, stain blocking, drywall replacement, and repainting after plumbing or roof leaks.",
      },
      {
        href: "/blog/drywall-repair-cost-mississauga/",
        label: "Drywall repair cost in Mississauga",
        description:
          "Compare pricing factors for patches, ceiling repairs, sanding, primer, access, and painting.",
      },
      {
        href: "/blog/benefits-of-removing-popcorn-ceilings/",
        label: "Smooth ceiling vs popcorn ceiling",
        description:
          "Compare appearance, cleaning, lighting, repair visibility, and long-term maintenance.",
      },
    ],
  },
];

export default function AuthorityClusterBlock() {
  return (
    <section className="authority-cluster" aria-labelledby="authority-cluster-title">
      <div className="authority-cluster__inner">
        <div className="authority-cluster__header">
          <p className="authority-cluster__eyebrow">Project planning</p>
          <h2 id="authority-cluster-title">
            Helpful ceiling and drywall guides for planning your project
          </h2>
          <p>
            Homeowners often compare cost, ceiling condition, painted versus
            unpainted texture, skim coat level, repair work, painting, and
            city-specific pricing before starting a popcorn ceiling removal
            project. These pages keep the next step clear without turning the
            section into a long footer list.
          </p>
        </div>

        <div className="authority-cluster__grid">
          {linkGroups.map((group) => (
            <article className="authority-cluster__card" key={group.title}>
              <div className="authority-cluster__card-head">
                <h3>{group.title}</h3>
                <p>{group.intro}</p>
              </div>

              {/* Update the linkGroups array above when service, city, or blog URLs change. */}
              <ul className="authority-cluster__links">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href}>{link.label}</Link>
                    <p>{link.description}</p>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
