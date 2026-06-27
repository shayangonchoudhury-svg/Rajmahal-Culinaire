/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export default function ChefSection() {
  return (
    <section
      id="chef-heritage-section"
      className="py-24 px-6 max-w-[1280px] mx-auto scroll-mt-20"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        {/* Left column: portrait */}
        <div className="md:col-span-5 relative">
          <div className="aspect-[4/5] rounded-lg gold-rim overflow-hidden shadow-2xl relative z-10">
            <img
              className="w-full h-full object-cover select-none pointer-events-none"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAsWpbozL3b4GFQr4Z1hVGa_5ct-aNZk59kmAvvptTxAZ2Lqsc7uaq7WqVvWaZXGiq0_iYbikYijbaT0JhKG3Pts5M_6rqUVTvnHWyFglWgh94OcNjTSu2wbFbTv76Z0ost8wLdrSBk5QABAtdyq8jpD8om1BlsB2WdecOvXChtEVAybD6vp2ZgkUfh1o6UpFUkl6cxpHbXFZ9_Ilx98kLjKAMD6Mlrdl3bSW3C3535Uh8b-X5eNV9opVSKTBllhsNqklqF4ogNZQ"
              alt="Chef Elena Vasseur elegantly garnishing a gourmet plate"
            />
          </div>
          {/* Decorative frame accent */}
          <div className="absolute -bottom-6 -right-6 w-48 h-48 border-2 border-[#C5A059]/20 rounded-lg -z-0 hidden md:block" />
        </div>

        {/* Right column: content */}
        <div className="md:col-span-7 space-y-6">
          <div className="flex items-center gap-4">
            <div className="h-px w-12 bg-[#C5A059]" />
            <span className="font-sans font-semibold text-xs text-[#C5A059] uppercase tracking-widest">
              Our Visionary
            </span>
          </div>

          <h3 className="font-serif text-3xl sm:text-4xl text-[#F0F0F0] font-bold tracking-wide">
            Chef's Heritage: Elena Vasseur
          </h3>

          <p className="font-sans text-base sm:text-lg text-zinc-300 leading-relaxed font-light">
            Where Parisian precision meets the vibrant soul of Rajputana. Chef Elena Vasseur brings two decades of Michelin-starred expertise to Rajmahal Culinaire, reimagining ancestral Rajasthani recipes through a lens of contemporary elegance.
          </p>

          <p className="font-sans text-sm sm:text-base text-zinc-400 italic leading-relaxed border-l-2 border-[#C5A059] pl-4">
            "Culinary art is the only history we can taste. At Rajmahal, we don't just serve food; we serve stories of maharajas and spice-merchants, refined for the modern epicurean."
          </p>

          <div className="pt-4">
            <img
              className="h-16 opacity-85 select-none pointer-events-none"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3jbt_2N-CbqaGwGMSb7TeXa6VuGu5JM15StZ3pemhPZVP_a8N-WkUv19V-GeFnJoS2-tjCBGuCkoPYS0YmX8jkQI5v26lyx3EGW9I5YO7q--CbQCncMTe2PWuSe6C_2N_IexXPWO-bbsffmX4RYq0aJViiV-5KCsWNGxc48dITfY5sYJfmc2ZgTmG0VW98SC4qlWJJ_ISEEuTi5BtPLpYoa47RadpLdV1f-tL_K5nohkcHDFddJzHWOOYm9IGOfArCj0A0DDVvw"
              alt="Elena Vasseur elegant signature"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
