import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function ID() {
  const router = useRouter();
  const { id } = router.query;
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    if (!router.isReady) return; // Wait until router is ready

    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "https://mongol-api-rest.vercel.app/clothes"
        );
        const result = await response.json();
        setData(result.clothes || []);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [router.isReady]); // Run effect only when router is ready

  if (loading) return <p>...Loading</p>;

  const item = data.find((item) => item.id === id);

  return (
    <div>
      <button className="border p-4 bg-blue-200" onClick={() => router.back()}>
        Back
      </button>

      {item ? (
        <div key={item.id} className="p-4 border">
          <h2>{item.name}</h2>
          <p>{item.description}</p>
          {item.images && item.images.length > 0 && (
            <img src={item.images[0]} alt={item.name} className="w-40" />
          )}
        </div>
      ) : (
        <p>{id && `${id} ID-тай бүтээгдэхүүн олдсонгүй!`}</p>
      )}
    </div>
  );
}
