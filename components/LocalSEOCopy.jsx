export function CityCopy({ city, neighborhoods = [] }) {
  return (
    <div className="prose-custom mt-10">
      <h2>Professional wallpaper & popcorn ceiling removal in {city}</h2>
      <p>
        Choosing the right contractor in {city} can be the difference between
        walls that look “just ok” and a paint-ready surface that stays smooth
        for years. We specialize in dust-controlled wallpaper removal, popcorn
        ceiling removal, drywall installation & repair and interior painting for{" "}
        {city} homeowners. Our crews protect floors and furnishings, isolate the
        work area, and use extraction sanding so your home stays clean while the
        work gets done.
      </p>
      <p>
        Wallpaper removal is more than pulling paper. We score, steam or soak
        depending on the wallcovering, remove adhesive safely, then wash the
        surface to eliminate residue. After removal we repair damaged drywall,
        skim-coat for flatness, sand with HEPA extraction, prime with a bonding
        primer and apply quality finish coats. The result: new paint that lays
        down smoothly without bubbles, flashing or seams.
      </p>
      <h3>Popcorn ceiling removal done right</h3>
      <p>
        We contain the room, remove texture, skim as needed, then sand with
        extraction to control dust. Finally we prime and apply an even ceiling
        finish. Most ceilings are completed in one to three days, depending on
        square footage and repairs.
      </p>
      <h3>Transparent quotes & real scheduling</h3>
      <p>
        Every estimate outlines scope, products and warranty so there are no
        surprises. Typical projects start within 3–7 days and include our{" "}
        <strong>3-year workmanship warranty</strong>.
      </p>
      <h3>Neighborhood coverage</h3>
      <p>
        We serve {city} neighbourhoods including {neighborhoods.join(", ")} and
        surrounding areas. If you don’t see your area listed, just ask—we likely
        service your street as well.
      </p>
      <h3>Why homeowners in {city} choose us</h3>
      <ul>
        <li>Dust-controlled sanding and clean job sites</li>
        <li>Proper repairs and skim-coat for smooth finishes</li>
        <li>Premium primers and paints for durable results</li>
        <li>Clear communication, reliable scheduling</li>
        <li>3-year workmanship warranty</li>
      </ul>
      <p>
        Ready to make your walls look new again? Call{" "}
        <a href="tel:+16478129135">(647) 812-9135</a> or request a fast quote.
      </p>
    </div>
  );
}
export function ServiceCopy({ service }) {
  return (
    <div className="prose-custom mt-10">
      <h2>{service} — our complete process</h2>
      <p>
        We start every {service.toLowerCase()} project with protection and
        preparation: clean drop sheets, taped edges, dust containment and moving
        or covering furnishings. Then we handle the technical work—adhesive
        removal and washing (for wallpaper), scraping and skim-coating (for
        popcorn ceilings), detailed studs-to-finish work for drywall
        installation, or precise cut-ins and coatings for painting.
      </p>
      <p>
        Once surfaces are flat and dust-free, we prime with products matched to
        the substrate and finish with premium paints for even colour and
        excellent washability. The result is a finish that looks great on day
        one and still looks great years later.
      </p>
      <h3>Scheduling, warranty & pricing</h3>
      <p>
        Most projects can begin within a week. Pricing reflects square footage,
        access, layers and repair complexity. Every quote is itemized and
        includes our <strong>3-year workmanship warranty</strong>.
      </p>
      <h3>What you can expect</h3>
      <ul>
        <li>Dust-controlled sanding with HEPA extraction</li>
        <li>Straight lines, crisp corners and smooth surfaces</li>
        <li>Friendly, insured crews who respect your home</li>
        <li>Clear daily communication and tidy cleanup</li>
      </ul>
      <p>
        Have questions about {service.toLowerCase()}? Call{" "}
        <a href="tel:+16478129135">(647) 812-9135</a> or hit “Get Quote”.
      </p>
    </div>
  );
}
