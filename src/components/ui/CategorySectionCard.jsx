import { Link } from "react-router-dom";

const CategorySectionCard = ({ section }) => {
  const {
    title = "Section Title",
    url = "#",
    categories = [],
  } = section || {};

  return (
    <div className="flex flex-col items-center border py-2 px-4 rounded-md">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>

      <div className="grid grid-cols-2 gap-2">
        {categories.map((item) => (
        <Link
          key={item.id}
          to={item.url}
          className="flex flex-col items-center rounded-md hover:scale-105 transition"
          >
            <div className="w-full aspect-square overflow-hidden rounded-md bg-gray-100">
              <img
              src={item.image || "/placeholder.png"}
              alt={item.name}
              loading="lazy"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "/placeholder.png";
              }}
              />
            </div>

            <span className="font-medium mt-1 text-sm text-center">
              {item.name}
            </span>
          </Link>

        ))}
      </div>

      <Link to={url} className="text-blue-500 mt-4">
        See more
      </Link>
    </div>
  );
};

export default CategorySectionCard;
