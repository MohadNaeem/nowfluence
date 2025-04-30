"use client";

import Image from "next/image";

export default function Deliverables() {
  return (
    <section className="bg-[#f3f8fb] px-6 py-12">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Heading */}
        <h2 className="text-2xl font-bold text-black">
          Deliverables Requested
        </h2>

        <div className="space-y-10">
          {/* Instagram */}
          <div className="flex justify-center">
            <div className="flex items-start gap-6">
              <Image
                src="/insta-logo.png"
                alt="Instagram Logo"
                width={150}
                height={40}
              />
              <p className="text-black text-base leading-relaxed max-w-xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit.
                Donec quis nisl feugiat.
              </p>
            </div>
          </div>

          {/* TikTok */}
          <div className="flex justify-center">
            <div className="flex items-start gap-6">
              <Image
                src="/tiktok-logo.png"
                alt="TikTok Logo"
                width={150}
                height={40}
              />
              <p className="text-black text-base leading-relaxed max-w-xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit.
                Donec quis nisl feugiat.
              </p>
            </div>
          </div>

          {/* YouTube */}
          <div className="flex justify-center">
            <div className="flex items-start gap-6">
              <Image
                src="/yt-logo.png"
                alt="YouTube Logo"
                width={150}
                height={40}
              />
              <p className="text-black text-base leading-relaxed max-w-xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit.
                Donec quis nisl feugiat.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
