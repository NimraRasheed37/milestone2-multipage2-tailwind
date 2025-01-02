import CustomImage from "./CustomImage";
import Image from "next/image";

interface Recipe {
    image: string;
    authorImg: string;
    title: string;
}
 
export default function RecipeCard({ recipe }: { recipe: Recipe }) {
    return (
        <div className="recipe-card isolate rounded-lg overflow-hidden shadow-lg bg-[var(--background-color)]">
            <CustomImage imgSrc={recipe.image} pt="65%" />
            <div className="recipe-card-info p-4">
                <Image 
                    className="auther-img h-15 w-15 rounded-full border-3 border-[var(--background-light)] shadow-sm -mt-12 z-10" 
                    src={recipe.authorImg} 
                    alt="Author Image" 
                    width={60} 
                    height={60} 
                />
                <p className="recipe-title text-xl font-bold mt-1 mb-2 text-[var(--text-color)]">
                    {recipe.title}
                </p>
                <p className="recipe-desc text-[var(--text-light)] text-sm tracking-wider">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>
                <a className="view-btn text-[var(--primary-color)] font-bold mt-3 inline-block">
                    VIEW RECIPE
                </a>
            </div>
        </div>
    );
}


