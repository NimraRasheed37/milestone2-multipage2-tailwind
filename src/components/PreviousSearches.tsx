import { FaSearch } from "react-icons/fa";

export default function PreviousSearches() {
  const searches = [
    "pizza", "burger", "cookies", "juice",
    "biriyani", "salad", "ice cream",
    "lasagna", "pudding", "soup"
  ];

  return (
    <div className="previous-searches block my-20 mx-12">
      <h2 className="text-3xl text-black mb-1.5">Previous Searches</h2>
      <div className="flex flex-wrap ">
        {searches.map((search, index) => (
          <div
            key={index}
            style={{ animationDelay: `${index * 0.1}s` }}
            className=" flex flex-wrap search-item bg-red-500 py-2 px-4 mb-4 mr-4 text-white rounded-full shadow-md transform opacity-0 animate-slideInRight"
          >
            {search}
          </div>
        ))}
      </div>
      <div className="search-box flex items-center justify-end h-9">
        <input
          type="text"
          placeholder="Search ..."
          className="h-9 min-w-[250px] px-2 rounded-l-md border-[1px] border-[#4d4d4d] outline-none"
        />
        <button className="h-9 px-3 rounded-r-md">
          <FaSearch className="bg-red-500 text-white p-2 rounded-md" size={36} />
        </button>
      </div>
    </div>
  );
}
