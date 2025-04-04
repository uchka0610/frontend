import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Json() {
    const router = useRouter();
    const [data, setData] = useState([]);
    const [search, setSearch] = useState("");
    const [isGridView, setIsGridView] = useState(true);

    useEffect(() => {
        const fetchAllData = async () => {
            try {
                const endpoints = [
                    "clothes", "instruments", "HistoricalTools",
                    "EthnicGroups", "Provinces", "HistoricalFigures", "TouristAttractions"
                ];
                
                const requests = endpoints.map(endpoint => 
                    fetch(`https://mongol-api-rest.vercel.app/${endpoint}`).then(res => res.json())
                );

                const results = await Promise.all(requests);
                const mergedData = results.flatMap((result, index) => {
                    const key = Object.keys(result)[0];
                    return result[key]?.map(item => ({ ...item, category: endpoints[index] })) || [];
                });
                
                setData(mergedData);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchAllData();
    }, []);
 
    const filteredData = data.filter(item => 
        item?.name?.toLowerCase().includes(search.toLowerCase())
    );
    
    return (
        <div className="min-h-screen bg-blue-200 p-5 flex flex-col items-center text-gray-200">
            <div className="mb-8 flex items-center justify-between w-full max-w-4xl">
                <input 
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search..."
                    className="flex-grow mb-4 p-2 rounded bg-white border text-black "
                />
                <button
                    onClick={() => setIsGridView(!isGridView)}
                    className="ml-4 px-5 py-3 bg-white text-black font-medium rounded-lg  "
                >
                    {isGridView ? "Normal View" : "Grid View"}
                </button>
            </div>
            {filteredData.length > 0 ? (
                isGridView ? (
                    <div className="grid grid-cols-3 gap-4 m-4">
                        {filteredData.map((item) => (
                            <button 
                                key={item.id} 
                                onClick={() => router.push(`/detail/${item.category}/${item.id}`)}
                                className="border border-[#73c5fc] text-black bg-white shadow-md rounded-lg p-4 text-center transition"
                            >
                                <img src={item?.images?.[0]} className="w-full h-64 rounded-xl object-cover" alt={item.name} />
                                <p className="font-bold mt-2">{item.name}</p>
                                <p>{item.description}</p>
                                <p className="font-bold">{item.timePeriod}</p>
                                <p className="font-bold">{item?.materials}</p>
                                <p>{item.accomplishment}</p>
                                <p>{item.area}</p>
                                <p>{item.population}</p>
                            </button>
                        ))}
                    </div>
                ) : (
                    <div className="space-y-4 m-4 w-full max-w-4xl">
                        {filteredData.map((item) => (
                            <div 
                                key={item.id} 
                                onClick={() => router.push(`/detail/${item.category}/${item.id}`)}
                                className="flex items-start border  text-gray-200 bg-white shadow-md rounded-lg p-4 cursor-pointer hover:bg-[#A38970] transition"
                            >
                                <img src={item?.images?.[0]} className="w-32 h-32 rounded-xl object-cover" alt={item.name} />
                                <div className="ml-4">
                                    <p className="font-bold">{item.name}</p>
                                    <p>{item.description}</p>
                                    <p className="font-bold">{item.timePeriod}</p>
                                    <p className="font-bold">{item?.materials}</p>
                                    <p>{item.accomplishment}</p>
                                    <p>{item.area}</p>
                                    <p>{item.population}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                )
            ) : (
                <p className="text-center text-gray-400 font-bold mt-5">No results found</p>
            )}
        </div>
    );  
}
