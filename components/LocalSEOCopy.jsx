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
        <a href="tel:+16479236784">(647) 923-6784</a> or request a fast quote.
      </p>
    </div>
  );
}
export function ServiceCopy({ service }) {
  return (
    <div className="space-y-12">
      {/* Main Content Section */}
      <div className="bg-gradient-to-br from-slate-50 to-white rounded-3xl p-8 md:p-12 border-2 border-gray-200 shadow-lg">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-3xl shadow-lg">
              📋
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              {service} — Our Complete Process
            </h2>
          </div>

          <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
            <p>
              We start every {service.toLowerCase()} project with{" "}
              <strong className="text-gray-900">
                protection and preparation
              </strong>
              : clean drop sheets, taped edges, dust containment and moving or
              covering furnishings. Then we handle the technical work—adhesive
              removal and washing (for wallpaper), scraping and skim-coating
              (for popcorn ceilings), detailed studs-to-finish work for drywall
              installation, or precise cut-ins and coatings for painting.
            </p>
            <p>
              Once surfaces are flat and dust-free, we prime with products
              matched to the substrate and finish with premium paints for even
              colour and excellent washability. The result is a finish that{" "}
              <strong className="text-gray-900">
                looks great on day one and still looks great years later
              </strong>
              .
            </p>
          </div>
        </div>
      </div>

      {/* Two Column Section */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Scheduling & Pricing Card */}
        <div className="bg-white rounded-2xl p-8 border-2 border-blue-200 hover:shadow-xl transition">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-2xl">
              📅
            </div>
            <h3 className="text-2xl font-bold text-gray-900">
              Scheduling, Warranty & Pricing
            </h3>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            Most projects can begin within a week. Pricing reflects square
            footage, access, layers and repair complexity.
          </p>
          <div className="bg-blue-50 rounded-xl p-4 border-2 border-blue-200">
            <p className="text-gray-900 font-semibold flex items-center gap-2">
              <span className="text-2xl">✓</span>
              Every quote is itemized and includes our{" "}
              <strong className="text-blue-600">
                3-year workmanship warranty
              </strong>
            </p>
          </div>
        </div>

        {/* What You Can Expect Card */}
        <div className="bg-white rounded-2xl p-8 border-2 border-cyan-200 hover:shadow-xl transition">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-cyan-100 flex items-center justify-center text-2xl">
              ⭐
            </div>
            <h3 className="text-2xl font-bold text-gray-900">
              What You Can Expect
            </h3>
          </div>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-gray-700">
              <span className="text-cyan-600 font-bold text-xl flex-shrink-0">
                ✓
              </span>
              <span>Dust-controlled sanding with HEPA extraction</span>
            </li>
            <li className="flex items-start gap-3 text-gray-700">
              <span className="text-cyan-600 font-bold text-xl flex-shrink-0">
                ✓
              </span>
              <span>Straight lines, crisp corners and smooth surfaces</span>
            </li>
            <li className="flex items-start gap-3 text-gray-700">
              <span className="text-cyan-600 font-bold text-xl flex-shrink-0">
                ✓
              </span>
              <span>Friendly, insured crews who respect your home</span>
            </li>
            <li className="flex items-start gap-3 text-gray-700">
              <span className="text-cyan-600 font-bold text-xl flex-shrink-0">
                ✓
              </span>
              <span>Clear daily communication and tidy cleanup</span>
            </li>
          </ul>
        </div>
      </div>

      {/* CTA Banner */}
      <div className="bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-600 rounded-3xl p-8 md:p-10 text-center shadow-2xl relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
              backgroundSize: "30px 30px",
            }}
          ></div>
        </div>

        <div className="relative z-10">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Have Questions About {service}?
          </h3>
          <p className="text-xl text-blue-100 mb-6 max-w-2xl mx-auto">
            Get expert answers and a detailed quote for your project
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+16479236784"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-full bg-white text-blue-600 hover:bg-gray-100 transition shadow-lg hover:shadow-xl hover:scale-105 transform"
            >
              <span className="mr-2">📞</span>Call (647) 923-6784
            </a>
            <a
              href="#quote-form"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-full bg-white/20 backdrop-blur text-white hover:bg-white/30 transition border-2 border-white/30 shadow-lg"
            >
              Get Free Quote
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
