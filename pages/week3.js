import { useState, useEffect } from "react";

export default function Home() {
    const [data, setData] = useState(null);
    const [data1, setData1] = useState(null);
    const [data2, setData2] = useState(null);
    const [data3, setData3] = useState(null);
    const [data4, setData4] = useState(null);
    const [data5, setData5] = useState(null);
    const [data6, setData6] = useState(null);

    const [searchQuery, setSearchQuery] = useState("");
    const [grid, setGrid] = useState(false);

    const [loading, setLoading] = useState(false); 

    useEffect(() => {
        setLoading(true);
        const fetchData = async () => {
            try {
                const response = await fetch("https://mongol-api-rest.vercel.app/clothes");
                const result = await response.json();
                setData(result);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
        setLoading(false);
    }, []);

    useEffect(() => {
        setLoading(true);
        const fetchData = async () => {
            try {
                const response = await fetch("https://mongol-api-rest.vercel.app/instruments");
                const result = await response.json();
                setData1(result);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
        setLoading(false);
    }, []);

    useEffect(() => {
        setLoading(true);
        const fetchData = async () => {
            try {
                const response = await fetch("https://mongol-api-rest.vercel.app/historicaltools");
                const result = await response.json();
                setData2(result);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
        setLoading(false);
    }, []);
    
    console.log(data2);
    
    useEffect(() => {
        setLoading(true);
        const fetchData = async () => {
            try {
                const response = await fetch("https://mongol-api-rest.vercel.app/ethnicgroups");
                const result = await response.json();
                setData3(result);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
        setLoading(false);
    }, []);

    useEffect(() => {
        setLoading(true);
        const fetchData = async () => {
            try {
                const response = await fetch("https://mongol-api-rest.vercel.app/provinces");
                const result = await response.json();
                setData4(result);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
        setLoading(false);
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await fetch("https://mongol-api-rest.vercel.app/historicalfigures");
                const result = await response.json();
                setData5(result);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
        setLoading(false);
    }, []);

    useEffect(() => {
        setLoading(true);
        const fetchData = async () => {
            try {
                const response = await fetch("https://mongol-api-rest.vercel.app/touristattractions");
                const result = await response.json();
                setData6(result);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
        setLoading(false);
    }, []);

    const filteredClothes = data?.clothes?.filter(item => 
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const filteredInstruments = data1?.instruments?.filter(item => 
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const filteredHistoricalTools = data2?.historicalTools?.filter(item => 
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const filteredEthnicGroups = data3?.ethnicGroups?.filter(item => 
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const filteredProvinces = data4?.provinces?.filter(item => 
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    console.log(filteredProvinces);
    
    
    const filteredHistoricalFigures = data5?.historicalFigures?.filter(item => 
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  
    const filteredTouristAttractions = data6?.touristAttractions?.filter(item => 
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    const renderNoResultsMessage = (filteredData) => {
        if (filteredData == 0) {
            return <p className="text-center text-gray-500">Илэрц олдсонгүй</p>;
        }
    };
    

    return (
        <div className="flex flex-col items-center p-4 bg-gray-100 min-h-screen">
            {loading === true && (
                <div className="text-2xl text-black font-bold">Loading...</div>
            )}
            <input 
                type="text" 
                placeholder="Search" 
                value={searchQuery} 
                onChange={(e) => setSearchQuery(e.target.value)} 
                className="border border-gray-300 bg-white p-3 rounded-lg shadow-md outline-none ring-2 ring-blue-500 w-full text-black mb-2"
            />
            <button
                className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-600 transition w-full sm:w-auto mb-4"
                onClick={() => setGrid(!grid)}
            >
                {grid ? "Grid View руу шилжих" : "Row View руу шилжих"}
            </button>
             {renderNoResultsMessage(filteredClothes) || renderNoResultsMessage(filteredInstruments) || renderNoResultsMessage(filteredHistoricalTools) || renderNoResultsMessage(filteredEthnicGroups) || renderNoResultsMessage(filteredProvinces) || renderNoResultsMessage(filteredHistoricalFigures) || renderNoResultsMessage(filteredTouristAttractions)}
            <div className="w-full mb-8">
                <div className={`w-full flex ${grid ? "flex-wrap justify-center gap-4" : "grid grid-cols-3 gap-4"}`}>
                    {filteredClothes?.map((item) => (
                        <div 
                            key={item.id} 
                            className={`bg-white p-4 ${grid ? "w-80" : "w-full max-w-md"} text-center shadow-lg rounded-lg`}
                        >
                            <img src={item.images[0]} className="w-full h-40 object-cover rounded-md" alt={item.name} />
                            <p className="text-lg font-semibold text-gray-800">{item.name}</p>
                            <p className="text-gray-600 text-sm">DESCRIPTION: {item.description}</p>
                            <p className="text-gray-600 text-sm">MATERIAL: {item.materials}</p>
                            <p className="text-gray-600 text-sm">TIME: {item.timePeriod}</p>
                        </div>
                    ))}
                </div>
            </div>

          
            <div className="w-full mb-8">
                
                <div className={`w-full flex ${grid ? "flex-wrap justify-center gap-4" : "grid grid-cols-3 gap-4"}`}>
                    {filteredInstruments?.map((item) => (
                        <div 
                            key={item.id} 
                            className={`bg-white p-4 ${grid ? "w-80" : "w-full max-w-md"} text-center shadow-lg rounded-lg`}
                        >
                            <img src={item.images[0]} className="w-full h-40 object-cover rounded-md" alt={item.name} />
                            <p className="text-lg font-semibold text-gray-800">{item.name}</p>
                            <p className="text-gray-600 text-sm">DESCRIPTION: {item.description}</p>
                            <p className="text-gray-600 text-sm">MATERIAL: {item.materials}</p>
                            <p className="text-gray-600 text-sm">TIME: {item.timePeriod}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="w-full mb-8">
                <div className={`w-full flex ${grid ? "flex-wrap justify-center gap-4" : "grid grid-cols-3 gap-4"}`}>
                    {filteredHistoricalTools?.map((item) => (
                        <div 
                            key={item.id} 
                            className={`bg-white p-4 ${grid ? "w-80" : "w-full max-w-md"} text-center shadow-lg rounded-lg`}
                        >
                            <img src={item.images[0]} className="w-full h-40 object-cover rounded-md" alt={item.name} />
                            <p className="text-lg font-semibold text-gray-800">{item.name}</p>
                            <p className="text-gray-600 text-sm">DESCRIPTION: {item.description}</p>
                            <p className="text-gray-600 text-sm">MATERIAL: {item.materials}</p>
                            <p className="text-gray-600 text-sm">TIME: {item.timePeriod}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="w-full mb-8">
                <div className={`w-full flex ${grid ? "flex-wrap justify-center gap-4" : "grid grid-cols-3 gap-4"}`}>
                    {filteredEthnicGroups?.map((item) => (
                        <div 
                            key={item.id} 
                            className={`bg-white p-4 ${grid ? "w-80" : "w-full max-w-md"} text-center shadow-lg rounded-lg`}
                        >
                            <img src={item.images[0]} className="w-full h-40 object-cover rounded-md" alt={item.name} />
                            <p className="text-lg font-semibold text-gray-800">{item.name}</p>
                            <p className="text-gray-600 text-sm">DESCRIPTION: {item.description}</p>
                            <p className="text-gray-600 text-sm">MATERIAL: {item.materials}</p>
                            <p className="text-gray-600 text-sm">TIME: {item.timePeriod}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="w-full mb-8">
                <div className={`w-full flex ${grid ? "flex-wrap justify-center gap-4" : "grid grid-cols-3 gap-4"}`}>
                    {filteredProvinces?.map((item) => (
                        <div 
                            key={item.id} 
                            className={`bg-white p-4 ${grid ? "w-80" : "w-full max-w-md"} text-center shadow-lg rounded-lg`}
                        >
                            
                            <p className="text-lg font-semibold text-gray-800">{item.name}</p>
                            <p className="text-gray-600 text-sm">DESCRIPTION: {item.description}</p>
                            <p className="text-gray-600 text-sm">MATERIAL: {item.materials}</p>
                            <p className="text-gray-600 text-sm">TIME: {item.timePeriod}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="w-full mb-8">
                <div className={`w-full flex ${grid ? "flex-wrap justify-center gap-4" : "grid grid-cols-3 gap-4"}`}>
                    {filteredHistoricalFigures?.map((item) => (
                        <div 
                            key={item.id} 
                            className={`bg-white p-4 ${grid ? "w-80" : "w-full max-w-md"} text-center shadow-lg rounded-lg`}
                        >
                            <img src={item.images[0]} className="w-full h-40 object-cover rounded-md" alt={item.name} />
                            <p className="text-lg font-semibold text-gray-800">{item.name}</p>
                            <p className="text-gray-600 text-sm">DESCRIPTION: {item.description}</p>
                            <p className="text-gray-600 text-sm">MATERIAL: {item.materials}</p>
                            <p className="text-gray-600 text-sm">TIME: {item.timePeriod}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="w-full mb-8">
                <div className={`w-full flex ${grid ? "flex-wrap justify-center gap-4" : "grid grid-cols-3 gap-4"}`}>
                    {filteredTouristAttractions?.map((item) => (
                        <div 
                            key={item.id} 
                            className={`bg-white p-4 ${grid ? "w-80" : "w-full max-w-md"} text-center shadow-lg rounded-lg`}
                        >
                            <img src={item.images[0]} className="w-full h-40 object-cover rounded-md" alt={item.name} />
                            <p className="text-lg font-semibold text-gray-800">{item.name}</p>
                            <p className="text-gray-600 text-sm">DESCRIPTION: {item.description}</p>
                            <p className="text-gray-600 text-sm">MATERIAL: {item.materials}</p>
                            <p className="text-gray-600 text-sm">TIME: {item.timePeriod}</p>
                        </div>
                    ))}
                </div>
            </div>
            
            

        </div>
    );
}
