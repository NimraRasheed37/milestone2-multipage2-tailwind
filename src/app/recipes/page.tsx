import PreviousSearches from "../../components/PreviousSearches";
import RecipeCard from "../../components/RecipeCard";

interface Recipe {
  title: string;
  image: string;
  authorImg: string;
}

export default function Recipes() {
  const recipes: Recipe[] = [
    {
      title: "Chicken Chowmein",
      image: "/img/gallery/img 0 (1).jpg",
      authorImg: "/img/top-chefs/chef 3.jpg",
    },
    {
      title: "Chicken Biryani",
      image: "/img/gallery/img 0 (2).jpg",
      authorImg: "/img/top-chefs/chef 5.jpg",
    },
    {
      title: "Arabian Special roll",
      image: "/img/gallery/img 0 (7).jpg",
      authorImg: "/img/top-chefs/chef 4.jpg",
    },
    {
      title: "Chicken White Karahi",
      image: "/img/gallery/img 0 (8).jpg",
      authorImg: "/img/top-chefs/chef 5.jpg",
    },
    {
      title: "Chicken Pan Pizza",
      image: "/img/gallery/img 0 (5).jpg",
      authorImg: "/img/top-chefs/chef 1.webp",
    },
    {
      title: "Chicken Lasagna",
      image: "/img/gallery/img 0 (4).jpg",
      authorImg: "/img/top-chefs/chef 4.jpg",
    },
    {
      title: "Healthy Pasta",
      image: "/img/gallery/img 0 (10).jpg",
      authorImg: "/img/top-chefs/chef 1.jpg",
    },
    {
      title: "Daal Makhni",
      image: "/img/gallery/img 0 (9).jpg",
      authorImg: "/img/top-chefs/chef 2.jpg",
    },
    {
      title: "Fish Fried",
      image: "/img/gallery/img 0 (6).jpg",
      authorImg: "/img/top-chefs/chef 2.jpg",
    },
    {
      title: "American chicken Cheese Burger",
      image: "/img/gallery/img 0 (3).jpg",
      authorImg: "/img/top-chefs/chef 1.jpg",
    },
  ].sort(() => Math.random() - 0.5);

  return (
    <div>
      <PreviousSearches />
      <div className="recipes-container">
        {recipes.map((recipe, index) => (
          <RecipeCard key={index} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}
