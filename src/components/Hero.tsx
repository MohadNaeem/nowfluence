"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-[#ecf8fe] py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Side */}
        <div className="space-y-6">
          <p className="text-sm text-gray-500 font-medium">Brand Name</p>

          <h2 className="text-3xl font-bold text-black">Campaign Title Here</h2>

          <p className="text-gray-600 leading-relaxed text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus
            fermentum odio phasellus cras ac erat parturient. Duis ut libero
            pellentesque ante ultricies mattis. Varius dui placerat egestas ex
            rhoncus per et elit. Nisi maecenas curabitur, ultricies auctor
            bibendum pretium facilisis. Nascetur malesuada sed suscipit
            consequat tempus molestie turpis posuere.
          </p>

          <p className="text-gray-600 leading-relaxed text-sm">
            Habitant tortor integer dui blandit leo aenean. Metus taciti
            praesent malesuada orci vitae tempus vehicula sollicitudin. Morbi
            pharetra vestibulum metus, elit fringilla magnis quis class. Finibus
            auctor maximus, donec rutrum condimentum commodo? Himen aenas
            consequat non per sollicitudin maximus ex nostra enim ridiculus.
            Ipsum litora elit mi enim aenean vitae tortor tempor. Justo maximus
            cursus accumsan at aenean penatibus maecenas.
          </p>

          <div className="flex items-center gap-4">
            <span className="text-sm text-black font-semibold">
              Requested Start Date: MM/DD/YYYY
            </span>
            <button className="text-sm font-semibold border border-black text-black bg-white rounded px-4 py-2 hover:bg-gray-100 transition">
              View Campaign Brief
            </button>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex justify-center">
          <Image
            src="/main-img.png"
            alt="Campaign Image"
            width={580}
            height={420}
            className="rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
