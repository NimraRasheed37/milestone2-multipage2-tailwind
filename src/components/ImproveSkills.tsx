import Image from "next/image";
import Link from "next/link";

export default function ImproveSkills() {
  const list = [
    "Learn new recipes",
    "Experiment with food",
    "Write your own recipes",
    "Know nutrition facts",
    "Get cooking tips",
    "Get ranked",
  ];

  return (
    <div className="flex flex-col md:flex-row justify-between gap-8 px-8 md:px-16 py-6 w-full">
      {/* Image Column */}
      <div className="flex-1">
        <Image
          src="/img/gallery/img 0 (10).jpg"
          alt="Improve Skills"
          width={500}
          height={550}
          className=" mx-auto"
        />
      </div>

      {/* Typography Column */}
      <div className="flex-1 max-w-xl">
        <h1 className="text-3xl md:text-5xl font-bold mb-8">
          Improve Your Culinary Skills
        </h1>
        {list.map((item, index) => (
          <p
            key={index}
            className={`border-l-4 border-pink-600 pl-4 mb-4 text-gray-600 font-semibold opacity-0 animate-[slideInRight_0.3s_forwards]`}
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            {item}
          </p>
        ))}
        <Link href="/signup">
          <button className="bg-pink-600  text-white uppercase text-sm font-bold tracking-wide py-3 px-6 rounded-md shadow-md hover:shadow-lg transition-shadow mt-4">
            Sign up now
          </button>
        </Link>
      </div>
    </div>
  );
}
