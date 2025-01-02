import Image from "next/image";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

interface Chef {
    img: string;
    name: string;
    recipesCount: number;
    cuisine: string;
}

export default function ChefCard({ chef }: { chef: Chef }) {
    return (
        <div className="flex  h-[120px] bg-[var(--background-color)] rounded-lg overflow-hidden">
            <Image 
                src={chef.img} 
                alt={chef.name} 
                width={120}
                height={120}
                className="h-full w-[120px] rounded-lg shadow-lg"
            />
            <div className="flex flex-col justify-between px-4 py-2">
                <h3 className="text-xl font-bold text-[var(--text-color)]">{chef.name}</h3>
                <p className="text-base text-[var(--text-light)]">
                    Recipes: <b>{chef.recipesCount}</b>
                </p>
                <p className="text-base text-[var(--text-light)]">
                    Cuisine: <b>{chef.cuisine}</b>
                </p>
                <div className="flex gap-2 text-xl">
                    <FaFacebook className="text-[#0063f7]" />
                    <FaTwitter className="text-[#13b4ff]" />
                    <FaInstagram className="text-[#ff0056]" />
                </div>
            </div>
        </div>
    );
}
