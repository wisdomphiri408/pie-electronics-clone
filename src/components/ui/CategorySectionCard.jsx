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
            className="flex flex-col items-center rounded-md hover:scale-105"
          >
            <img
              src={item.image || ""}
              alt={item.name}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "";
              }}
              className="rounded-md"
            />
            <span className="font-medium">{item.name}</span>
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
