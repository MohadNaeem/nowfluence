"use client";

export default function FinalCTA() {
  return (
    <section className="bg-[#f3f8fb] px-6 py-12">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Additional Info Block */}
        <div className="space-y-5">
          <h2 className="text-2xl font-bold text-black">
            Additional Information
          </h2>
          <p className="text-black text-base leading-relaxed w-full">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In the
            pursuit of excellence, individuals often find themselves driven by a
            desire to push boundaries, unlocking new potential within
            themselves. Sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua—a phrase that reminds us of the diligence and effort
            required to achieve greatness.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center space-y-4">
          <h3 className="text-3xl font-semibold text-[#385a74]">
            Interested in this Campaign?
          </h3>
          <p className="text-base text-black font-bold">
            Apply here to participate in the campaign:
          </p>
          <button className="px-8 py-3 rounded-full text-white font-semibold text-base bg-gradient-to-r from-[#56c6a9] to-[#55c7f0] hover:opacity-90 transition">
            Apply
          </button>
        </div>
      </div>
    </section>
  );
}
