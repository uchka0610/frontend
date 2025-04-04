import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function Home() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const tasks = [
    { path: "/a", label: "Counter", description: "Interactive counter with animations", category: "Functionality" },
    { path: "/grid", label: "Grid", description: "Responsive grid layout system", category: "UI Components" },
    { path: "/nemeltonoo", label: "Nemeltonoo", description: "Additional features showcase", category: "Functionality" },
    { path: "/search", label: "Search", description: "Real-time search implementation", category: "Functionality" },
    { path: "/task1", label: "Task1", description: "Dynamic content rendering", category: "UI Components" },
    { path: "/task2", label: "Task2", description: "State management example", category: "Functionality" },
    { path: "/uck", label: "CV", description: "My professional portfolio", category: "Personal" },
    { path: "/mongolapi", label: "MongolAPI", description: "Integration with Mongolian data API", category: "API" },
  ];

  const categories = [
    { name: "All", icon: "⚡" },
    { name: "UI Components", icon: "📐" },
    { name: "Functionality", icon: "⚙️" },
    { name: "API", icon: "🔌" },
    { name: "Personal", icon: "👤" },
  ];

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const filteredTasks = tasks.filter(
    (task) =>
      task.label.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (selectedCategory === "All" || task.category === selectedCategory)
  );

  if (loading) {
    return (
      <div className="h-screen w-full flex items-center justify-center bg-black">
        <div className="animate-pulse flex flex-col items-center">
          <div className="w-24 h-24 border-4 border-gray-800 border-t-gray-300 rounded-full animate-spin"></div>
          <p className="mt-4 text-gray-300 font-light">Loading projects...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <div className="flex-grow max-w-6xl mx-auto px-4 py-12 w-full">
        <div className="mb-12">
          <h1 className="text-4xl font-light text-white mb-2">MooN - Uchka</h1>
          <p className="text-gray-400">A collection of my front-end projects</p>
        </div>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
          <div className="flex overflow-x-auto pb-2 md:pb-0 space-x-2 md:space-x-4">
            {categories.map((category) => (
              <button
                key={category.name}
                onClick={() => setSelectedCategory(category.name)}
                className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
                  selectedCategory === category.name
                    ? "bg-white text-black"
                    : "bg-gray-900 text-gray-300 hover:bg-gray-800"
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>
          
          <div className="w-full md:w-1/3">
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 rounded-lg bg-gray-900 text-white border border-gray-800 focus:outline-none focus:border-gray-600 transition-all"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredTasks.length > 0 ? (
            filteredTasks.map((task) => (
              <div
                key={task.path}
                onClick={() => router.push(task.path)}
                className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-gray-600 hover:bg-gray-800 transition-all duration-300 cursor-pointer group"
              >
                <div className="h-24 mb-4 bg-gray-800 rounded flex items-center justify-center group-hover:bg-gray-700 transition-colors">
                  <span className="text-3xl">{
                    task.category === "UI Components" ? "🎨" : 
                    task.category === "Functionality" ? "⚙️" : 
                    task.category === "API" ? "🔌" : "📄"
                  }</span>
                </div>
                
                <h3 className="text-xl font-medium text-white mb-1 group-hover:text-gray-200">{task.label}</h3>
                <p className="text-sm text-gray-500 mb-3">{task.category}</p>
                <p className="text-gray-400 text-sm">{task.description}</p>
              </div>
            ))
          ) : (
            <div className="col-span-full p-8 text-center text-gray-400">
              No projects found. Try adjusting your search criteria.
            </div>
          )}
        </div>
      </div>

      <footer className="bg-gray-900 py-6 w-full mt-auto">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-gray-400 mb-2">&copy; {new Date().getFullYear()} EnkhUchral</p>
          <div className="flex justify-center space-x-4">
            <a href="https://github.com/uchka0610" className="text-gray-400 hover:text-white transition-colors">GitHub</a>
            <span className="text-gray-600">•</span>
            <a href="mailto:nest21261022@nhs.edu.mn" className="text-gray-400 hover:text-white transition-colors">Email</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
