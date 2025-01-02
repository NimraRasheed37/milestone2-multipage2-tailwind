'use client';

import Image from 'next/image';

export default function Starsection() {
  const images = [
    "/img/gallery/img 0 (1).jpg",
    "/img/gallery/img 0 (2).jpg",
    "/img/gallery/img 0 (3).jpg",
    "/img/gallery/img 0 (4).jpg",
    "/img/gallery/img 0 (5).jpg",
    "/img/gallery/img 0 (6).jpg",
    "/img/gallery/img 0 (7).jpg",
    "/img/gallery/img 0 (8).jpg",
    "/img/gallery/img 0 (9).jpg",
  ];

  return (
    <div className="flex flex-col md:flex-row items-center gap-8 mx-auto my-20 px-8 md:px-16">
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">
          About Us
        </h1>
        <p className="text-gray-600 text-base leading-relaxed tracking-wide mb-6">
          Welcome to Foodily Ever After, where great food meets a warm, inviting atmosphere. Our restaurant offers a delightful dining experience with a carefully crafted menu featuring a variety of flavorful dishes made from the finest ingredients. Foodily Ever After is the perfect spot to create memorable moments over delicious food.
        </p>
        <button className="bg-pink-600 text-white uppercase text-sm font-bold tracking-wide py-3 px-6 rounded-md shadow-md hover:shadow-lg transition-shadow">
          Explore Now
        </button>
      </div>
      <div className="grid grid-cols-3 gap-3 w-full md:w-1/2 md:p-10 ">
        {images.map((src, index) => (
          <div
            key={index}
            className="rounded-md overflow-hidden transform scale-0 opacity-0 animate-[popOut_0.5s_forwards]"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <Image
              src={src}
              alt={`Gallery image ${index + 1}`}
              width={500}
              height={500}
              className="object-cover w-full h-full"
              priority
            />
          </div>
        ))}
      </div>
    </div>
  );
}
