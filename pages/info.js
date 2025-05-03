import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const productsInfo = [
  {
    id: 1,
    title: "Basketball course",
    description: "Improve your basketball skill to be like LEBRON JAMES.",
    price: 100000,
    currency: "₮",
    image: "/dream.png",
    mode: "Танхим",
    location: { lat: 47.9189, lng: 106.9175 },
  },
  {
    id: 2,
    title: "Volleyball Course",
    description: "Volleyball course.",
    price: 200000,
    currency: "₮",
    image: "/Leon.jpg",
    mode: "Танхим",
    location: { lat: 47.922, lng: 106.918 },
  },
  {
    id: 3,
    title: "School Of English (IELTS)",
    description: "Preparation for IELTS exam.",
    price: 900000,
    currency: "₮",
    image: "/absolute.jpg",
    mode: "Танхим",
    location: { lat: 47.915, lng: 106.919 },
  },
  {
    id: 4,

    title: "Programming C++",
    price: 800000,
    currency: "₮",
    image: "/code.jpg",
    mode: "Цахим",
    location: { lat: 47.915, lng: 106.919 },
  },
  {
    id: 5,

    title: "Web Development",
    price: 1000000,
    currency: "₮",
    image: "/code.jpg",
    mode: "Цахим",
    location: { lat: 47.915, lng: 106.919 },
  },
  {
    id: 6,
    image: "/absolute.jpg",
    title: "School Of English (SAT)",
    price: 900000,
    currency: "₮",
    mode: "Танхим",
    location: { lat: 47.915, lng: 106.919 },
  },
];

export default function Info() {
  const router = useRouter();
  const id = Number(router.query.id);
  const prod = productsInfo.find((p) => p.id === id);

  if (!prod) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <p className="text-xl text-gray-600">Product not found.</p>
        <Link href="/edtech">
          <a className="ml-4">
            <Button variant="outline">Go to Catalog</Button>
          </a>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-6">
      <div className="max-w-3xl mx-auto p-6 space-y-6 bg- rounded-lg shadow">
        <div>
          <Link href="/edtech">
            <Button
              variant="ghost"
              className="flex items-center gap-2 text-black"
            >
              <ArrowLeft /> Буцах
            </Button>
          </Link>
        </div>

        <Card className="overflow-hidden">
          <div className="relative w-full h-64">
            <Image
              src={prod.image}
              alt={prod.title}
              layout="fill"
              className="object-cover"
            />
            <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full">
              {prod.mode}
            </div>
          </div>
          <CardContent className="space-y-6 p-6">
            <h2 className="text-2xl font-bold">{prod.title}</h2>
            <p className="text-gray-600">{prod.description}</p>
            <p className="text-lg font-semibold">
              Үнэ: {prod.price.toLocaleString()} {prod.currency}
            </p>
          </CardContent>
          <CardFooter className="p-6">
            <div className="h-80 w-full rounded-lg overflow-hidden shadow-inner">
              <iframe
                src={`https://www.google.com/maps?q=47.9189,106.9175&z=14&output=embed`}
                allowFullScreen
                loading="lazy"
                className="w-full h-full border-0"
              />
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
