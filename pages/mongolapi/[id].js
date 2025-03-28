import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function ID() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState();

  console.log(router.query.id);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "https://mongol-api-rest.vercel.app/clothes"
        );

        const result = await response.json();

        setData(result.clothes);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  console.log(data);

  return (
    <div>
      {loading && <p>...Loading</p>}
      <button className="border p-4 bg-blue-200" onClick={() => router.back()}>
        back
      </button>
      {(data || []).map((item, index) =>
        router.query.id === item.id ? (
          <div>
            {item.id} {item.name} {item.description}
            <img src={item?.images} className="w-40" />
          </div>
        ) : (
          <p>
            {index == 1 &&
              `${router.query.id} ene ni idtai hereglecgh oldsongu!`}
          </p>
        )
      )}
    </div>
  );
}