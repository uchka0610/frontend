import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function ID() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    if (!router.query.id) return;

    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://mongol-api-rest.vercel.app/clothes");
        const result = await response.json();
        setData(result.clothes || []); 
      } catch (error) {
        console.error("Fetch error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [router.query.id]); 

  const item = data.find((item) => String(item.id) === String(router.query.id));

  return (
    <div className="p-6">
      {loading && <p>Loading...</p>}

      <button className="border p-4 bg-blue-200" onClick={() => router.back()}>
        Back
      </button>

      {item ? (
        <div className="mt-4 p-4 border rounded-md shadow-md bg-gray-100">
          <h2 className="text-xl font-bold">{item.name}</h2>
          <p className="text-gray-700">{item.description}</p>
          {item?.images?.length > 0 && (
            <img src={item.images[0]} alt={item.name} className="w-40 mt-2 rounded-md shadow" />
          )}
        </div>
      ) : (
        !loading && (
          <p className="text-red-500 text-lg mt-4">
            Item with ID {router.query.id} not found!
          </p>
        )
      )}
    </div>
  );
}
