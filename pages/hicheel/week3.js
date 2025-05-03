import { useState, useEffect } from "react";

export default function Home() {
    const [clothes, setClothes] = useState([]);
    const [instruments, setInstruments] = useState([]);
    const [historicalTools, setHistoricalTools] = useState([]);
    const [ethnicGroups, setEthnicGroups] = useState([]);
    const [provinces, setProvinces] = useState([]);
    const [historicalFigures, setHistoricalFigures] = useState([]);
    const [touristAttractions, setTouristAttractions] = useState([]);

    const [loading, setLoading] = useState(true);
    const [selectedItem, setSelectedItem] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res1 = await fetch("https://mongol-api-rest.vercel.app/clothes");
                const clothesData = await res1.json();
                setClothes(clothesData.clothes || []);

                const res2 = await fetch("https://mongol-api-rest.vercel.app/instruments");
                const instrumentsData = await res2.json();
                setInstruments(instrumentsData.instruments || []);

                const res3 = await fetch("https://mongol-api-rest.vercel.app/historicaltools");
                const toolsData = await res3.json();
                setHistoricalTools(toolsData.historicalTools || []);

                const res4 = await fetch("https://mongol-api-rest.vercel.app/ethnicgroups");
                const ethnicData = await res4.json();
                setEthnicGroups(ethnicData.ethnicGroups || []);

                const res5 = await fetch("https://mongol-api-rest.vercel.app/provinces");
                const provincesData = await res5.json();
                setProvinces(provincesData.provinces || []);

                const res6 = await fetch("https://mongol-api-rest.vercel.app/historicalfigures");
                const figuresData = await res6.json();
                setHistoricalFigures(figuresData.historicalFigures || []);

                const res7 = await fetch("https://mongol-api-rest.vercel.app/touristattractions");
                const attractionsData = await res7.json();
                setTouristAttractions(attractionsData.touristAttractions || []);
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    // Handler to set the selected item when an image is clicked
    const handleImageClick = (item) => {
        setSelectedItem(item);
    };

    // Handler to close the modal
    const closeModal = () => {
        setSelectedItem(null);
    };

    return (
        <div className="flex flex-col items-center p-4 bg-gray-100 min-h-screen">
            {loading && <div className="text-2xl text-black font-bold">Loading...</div>}

            {/* Display Clothes Data */}
            <div className="w-full mb-8">
                <h2 className="text-2xl font-bold text-gray-700 mb-4">Clothes</h2>
                {clothes.length > 0 ? (
                    clothes.map((item, index) => (
                        <div key={index} className="mb-4">
                            <img
                                src={item?.images[0]}
                                alt={item?.name}
                                className="w-32 h-32 object-cover rounded-md cursor-pointer mb-2"
                                onClick={() => handleImageClick(item)}
                            />
                            <div>{item?.name}</div>
                        </div>
                    ))
                ) : (
                    <p>No data available</p>
                )}
            </div>

            {/* Display Instruments Data */}
            <div className="w-full mb-8">
                <h2 className="text-2xl font-bold text-gray-700 mb-4">Instruments</h2>
                {instruments.length > 0 ? (
                    instruments.map((item, index) => (
                        <div key={index} className="mb-4">
                            <img
                                src={item?.images[0]}
                                alt={item?.name}
                                className="w-32 h-32 object-cover rounded-md cursor-pointer mb-2"
                                onClick={() => handleImageClick(item)}
                            />
                            <div>{item?.name}</div>
                        </div>
                    ))
                ) : (
                    <p>No data available</p>
                )}
            </div>

            {/* Display Historical Tools Data */}
            <div className="w-full mb-8">
                <h2 className="text-2xl font-bold text-gray-700 mb-4">Historical Tools</h2>
                {historicalTools.length > 0 ? (
                    historicalTools.map((item, index) => (
                        <div key={index} className="mb-4">
                            <img
                                src={item?.images[0]}
                                alt={item?.name}
                                className="w-32 h-32 object-cover rounded-md cursor-pointer mb-2"
                                onClick={() => handleImageClick(item)}
                            />
                            <div>{item?.name}</div>
                        </div>
                    ))
                ) : (
                    <p>No data available</p>
                )}
            </div>

            {/* Modal to display selected item details */}
            {selectedItem && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg max-w-2xl w-full">
                        <button
                            onClick={closeModal}
                            className="absolute top-2 right-2 bg-gray-500 text-white rounded-full p-2"
                        >
                            X
                        </button>
                        <img
                            src={selectedItem.images[0]}
                            className="w-full h-60 object-cover rounded-md mb-4"
                            alt={selectedItem.name}
                        />
                        <h2 className="text-xl font-bold text-gray-800">{selectedItem.name}</h2>
                        <p className="text-sm text-gray-600">Description: {selectedItem.description}</p>
                        <p className="text-sm text-gray-600">Materials: {selectedItem.materials}</p>
                        <p className="text-sm text-gray-600">Time: {selectedItem.timePeriod}</p>
                    </div>
                </div>
            )}
        </div>
    );
}
