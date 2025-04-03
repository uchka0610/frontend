import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function ID() {
  const router = useRouter();
  const { id } = router.query;
  const [loading, setLoading] = useState(true);
  const [item, setItem] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!router.isReady || !id) return; // Wait until router is ready

    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        const urls = [
          "https://mongol-api-rest.vercel.app/clothes",
          "https://mongol-api-rest.vercel.app/Instruments",
          "https://mongol-api-rest.vercel.app/HistoricalTools",
          "https://mongol-api-rest.vercel.app/EthnicGroups",
          "https://mongol-api-rest.vercel.app/Provinces",
          "https://mongol-api-rest.vercel.app/HistoricalFigures",
        ];

        const responses = await Promise.allSettled(urls.map((url) => fetch(url)));
        const results = await Promise.all(
          responses.map((res) =>
            res.status === "fulfilled" && res.value.ok ? res.value.json() : null
          )
        );

        const fullData = {
          clothes: results[0]?.clothes || [],
          instru: results[1]?.instruments || [],
          tools: results[2]?.historicalTools || [],
          groups: results[3]?.ethnicGroups || [],
          provinces: results[4]?.provinces || [],
          historicalFigures: results[5]?.historicalFigures || [],
        };

        let foundItem = null;
        Object.values(fullData).forEach((category) => {
          if (!foundItem) {
            foundItem = category.find((item) => String(item.id) === String(id));
          }
        });

        if (foundItem) {
          setItem(foundItem);
        } else {
          setError("Item not found!");
        }
      } catch (error) {
        console.error("Fetch error:", error);
        setError("Failed to fetch data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id, router.isReady]);

  if (loading) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <div className="flex flex-row gap-2">
          <div className="w-4 h-4 rounded-full bg-red-500 animate-bounce"></div>
          <div className="w-4 h-4 rounded-full bg-red-500 animate-bounce [animation-delay:-.3s]"></div>
          <div className="w-4 h-4 rounded-full bg-red-500 animate-bounce [animation-delay:-.5s]"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <p className="text-xl font-bold text-red-500">{error}</p>
      </div>
    );
  }

  if (!item) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <p className="text-xl font-bold">Item not found with ID: {id}</p>
      </div>
    );
  }

  return (
    <div className="p-6">
      <div>
        <h2 className="text-3xl font-bold">{item.name}</h2>
        <p className="text-lg mt-4">{item.description}</p>

        {item?.images && item.images.length > 0 && (
          <div className="mt-4">
            <img
              src={item.images[0]}
              alt={item.name}
              className="w-full h-[300px] object-contain"
            />
          </div>
        )}

        {Object.entries(item).map(([key, value]) =>
          key !== "id" && key !== "images" && key !== "name" ? (
            <div key={key} className="mt-2">
              <p className="font-bold">{key}:</p>
              <p>{value}</p>
            </div>
          ) : null
        )}
      </div>

      <div className="mt-6">
        <button className="border p-4 bg-blue-200" onClick={() => router.back()}>
          Back
        </button>
      </div>
    </div>
  );
}
