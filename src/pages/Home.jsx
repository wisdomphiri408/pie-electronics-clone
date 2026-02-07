import Hero from "../components/Hero";
import categoryData from "./../data/homeSections.json";
import CategorySectionCard from "../components/ui/CategorySectionCard";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      <Hero />

      {/* Sections grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-[1500px] mx-auto pt-6 px-2">
        {categoryData.sections.map((section) => (
          <CategorySectionCard
            key={section.id}
            section={section}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
