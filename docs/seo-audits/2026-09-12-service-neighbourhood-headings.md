# Service and city neighbourhood headings

Existing neighbourhood coverage and nearby-area directories now identify the service and city. Neighbourhood names, links, metadata, routing and header branding are retained.

## Validation

All 49 modified JSX files passed syntax parsing; `git diff --check` passed. This change updates visible heading text only. No new articles, images, service claims or neighbourhood pages were added. No deployment performed.

The legacy `/service-areas/popcorn/[city]` template currently renders wallpaper-removal content and links. Its heading follows that existing content; correcting the legacy route/content mismatch requires a separate change.

## Updated headings

- `app/services/drywall-installation/hamilton/page.jsx`: Drywall Installation Hamilton — Neighbourhoods We Serve
- `app/services/drywall-installation/burlington/page.jsx`: Drywall Installation Burlington — Neighbourhoods We Serve
- `app/services/drywall-installation/mississauga/page.jsx`: Drywall Installation Mississauga — Neighbourhoods We Serve
- `app/services/baseboard-installation/oakville/page.jsx`: Baseboard Installation Oakville — Neighbourhoods We Serve
- `app/services/baseboard-installation/burlington/page.jsx`: Baseboard Installation Burlington — Neighbourhoods We Serve
- `app/services/baseboard-installation/mississauga/page.jsx`: Baseboard Installation Mississauga — Neighbourhoods We Serve
- `app/services/baseboard-installation/st-catharines/page.jsx`: Baseboard Installation St. Catharines — Neighbourhoods We Serve
- `app/services/baseboard-installation/mississauga/page.jsx`: Baseboard Installation Mississauga — Local Service Coverage
- `app/services/interior-painting/mississauga/page.jsx`: Interior Painting Mississauga — Neighbourhoods We Serve
- `app/services/drywall-contractor/city-page-template.jsx`: Drywall Contractor {config.city} — Neighbourhoods We Serve
- `app/services/drywall-contractor/mississauga/page.jsx`: Drywall Contractor Mississauga — Neighbourhoods We Serve
- `app/services/drywall-repair/etobicoke/page.jsx`: Drywall Repair Etobicoke — Neighbourhoods We Serve
- `components/GarageDrywallRepairPage.jsx`: Garage Drywall Repair {city.name} — Neighbourhoods We Serve
- `app/service-areas/[city]/page.jsx`: >Wallpaper Removal {c.name} — Neighbourhoods We Serve</h2>
- `app/service-areas/popcorn/[city]/page.jsx`: >Wallpaper Removal {c.name} — Neighbourhoods We Serve</h2>
- `app/popcorn-ceiling-removal/st-catharines/page.jsx`: Popcorn Ceiling Removal St. Catharines — Neighbourhoods We Serve
- `app/popcorn-ceiling-removal/hamilton/page.jsx`: Popcorn Ceiling Removal Hamilton — Neighbourhoods We Serve
- `app/popcorn-ceiling-removal/hamilton/dundas/page.jsx`: Popcorn Ceiling Removal Hamilton — Nearby Neighbourhoods
- `app/popcorn-ceiling-removal/hamilton/stoney-creek/page.jsx`: Popcorn Ceiling Removal Hamilton — Nearby Neighbourhoods
- `app/popcorn-ceiling-removal/etobicoke/page.jsx`: Popcorn Ceiling Removal Etobicoke — Neighbourhoods We Serve
- `app/popcorn-ceiling-removal/burlington/page.jsx`: Popcorn Ceiling Removal Burlington — Neighbourhoods We Serve
- `app/popcorn-ceiling-removal/burlington/palmer/page.jsx`: Popcorn Ceiling Removal Burlington — Nearby Neighbourhoods
- `app/popcorn-ceiling-removal/burlington/tyandaga/page.jsx`: Popcorn Ceiling Removal Burlington — Nearby Neighbourhoods
- `app/popcorn-ceiling-removal/burlington/orchard/page.jsx`: Popcorn Ceiling Removal Burlington — Nearby Neighbourhoods
- `app/popcorn-ceiling-removal/burlington/millcroft/page.jsx`: Popcorn Ceiling Removal Burlington — Nearby Neighbourhoods
- `app/popcorn-ceiling-removal/burlington/brant-hills/page.jsx`: Popcorn Ceiling Removal Burlington — Nearby Neighbourhoods
- `app/popcorn-ceiling-removal/burlington/brant-hills/page.jsx`: Popcorn Ceiling Removal Burlington — Nearby Neighbourhoods
- `app/popcorn-ceiling-removal/burlington/roseland/page.jsx`: Popcorn Ceiling Removal Burlington — Nearby Neighbourhoods
- `app/popcorn-ceiling-removal/burlington/headon-forest/page.jsx`: Popcorn Ceiling Removal Burlington — Nearby Neighbourhoods
- `app/popcorn-ceiling-removal/burlington/tansley/page.jsx`: Popcorn Ceiling Removal Burlington — Nearby Neighbourhoods
- `app/popcorn-ceiling-removal/burlington/mountainside/page.jsx`: Popcorn Ceiling Removal Burlington — Nearby Neighbourhoods
- `app/popcorn-ceiling-removal/milton/page.jsx`: Popcorn Ceiling Removal Milton — Neighbourhoods We Serve
- `app/popcorn-ceiling-removal/mississauga/page.jsx`: Popcorn Ceiling Removal Mississauga — Neighbourhoods We Serve
- `app/popcorn-ceiling-removal/north-york/page.jsx`: Popcorn Ceiling Removal North York — Neighbourhoods We Serve
- `app/popcorn-ceiling-removal/toronto/page.jsx`: Popcorn Ceiling Removal Toronto — Neighbourhoods We Serve
- `app/popcorn-ceiling-removal/grimsby/page.jsx`: Popcorn Ceiling Removal Grimsby — Neighbourhoods We Serve
- `app/popcorn-ceiling-removal/oakville/page.jsx`: Popcorn Ceiling Removal Oakville — Neighbourhoods We Serve
- `app/popcorn-ceiling-removal/oakville/bronte-creek/page.jsx`: Popcorn Ceiling Removal Oakville — Nearby Neighbourhoods
- `app/popcorn-ceiling-removal/oakville/kerr-village/page.jsx`: Popcorn Ceiling Removal Oakville — Nearby Neighbourhoods
- `app/popcorn-ceiling-removal/oakville/old-oakville/page.jsx`: Popcorn Ceiling Removal Oakville — Nearby Neighbourhoods
- `app/popcorn-ceiling-removal/oakville/glen-abbey/page.jsx`: Popcorn Ceiling Removal Oakville — Nearby Neighbourhoods
- `app/popcorn-ceiling-removal/oakville/iroquois-ridge-north/page.jsx`: Popcorn Ceiling Removal Oakville — Nearby Neighbourhoods
- `app/popcorn-ceiling-removal/oakville/bronte/page.jsx`: Popcorn Ceiling Removal Oakville — Nearby Neighbourhoods
- `app/popcorn-ceiling-removal/oakville/west-oak-trails/page.jsx`: Popcorn Ceiling Removal Oakville — Nearby Neighbourhoods
- `app/popcorn-ceiling-removal/oakville/downtown-oakville/page.jsx`: Popcorn Ceiling Removal Oakville — Nearby Neighbourhoods
- `app/popcorn-ceiling-removal/oakville/falgarwood/page.jsx`: Popcorn Ceiling Removal Oakville — Nearby Neighbourhoods
- `app/popcorn-ceiling-removal/oakville/uptown-core/page.jsx`: Popcorn Ceiling Removal Oakville — Nearby Neighbourhoods
- `app/popcorn-ceiling-removal/oakville/college-park/page.jsx`: Popcorn Ceiling Removal Oakville — Nearby Neighbourhoods
- `app/popcorn-ceiling-removal/oakville/clearview/page.jsx`: Popcorn Ceiling Removal Oakville — Nearby Neighbourhoods
- `app/popcorn-ceiling-removal/oakville/river-oaks/page.jsx`: Popcorn Ceiling Removal Oakville — Nearby Neighbourhoods
- `app/popcorn-ceiling-removal/oakville/palermo-west/page.jsx`: Popcorn Ceiling Removal Oakville — Nearby Neighbourhoods
