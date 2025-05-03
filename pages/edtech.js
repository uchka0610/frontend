"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Filter, X, Star, Users, Clock } from "lucide-react";

const categories = [
  { id: "1", name: "Гадаад хэл" },
  { id: "2", name: "Спорт" },
  { id: "3", name: "Программчлалын хэл" },
  { id: "4", name: "STEAM" },
  { id: "5", name: "Ерөнхий боловсрол" },
  { id: "6", name: "Лекц" },
];

const modes = [
  { id: "online", name: "Цахим" },
  { id: "lan", name: "Танхим" },
];

const products = [
  {
    id: 1,
    title: "Basketball course",
    description: "Professional basketball training.",
    price: 100000,
    currency: "₮",
    image: "/dream.png",
    category: "2",
    mode: "lan",
    rating: 4.5,
    students: "300",
    hours: 20,
  },
  {
    id: 2,
    title: "Volleyball Course",
    description: "Learn volleyball from experts.",
    price: 200000,
    currency: "₮",
    image: "/leon.jpg",
    category: "2",
    mode: "lan",
    rating: 4.7,
    students: "450",
    hours: 30,
  },
  {
    id: 3,
    title: "School Of English (IELTS)",
    description: "Preparation for IELTS exam.",
    price: 900000,
    currency: "₮",
    image: "/absolute.jpg",
    category: "1",
    mode: "lan",
    rating: 4.8,
    students: "1.2K",
    hours: 50,
  },
  {
    id: 4,
    title: "Programming C++",
    description: "Learn programming basics with C++.",
    price: 800000,
    currency: "₮",
    image: "/code.jpg",
    category: "3",
    mode: "online",
    rating: 4.9,
    students: "850",
    hours: 40,
  },
  {
    id: 5,
    title: "Web Development",
    description: "Master web development skills.",
    price: 1000000,
    currency: "₮",
    image: "/code.jpg",
    category: "3",
    mode: "online",
    rating: 4.8,
    students: "2.3K",
    hours: 60,
  },
  {
    id: 6,
    title: "School Of English (SAT)",
    description: "SAT preparation classes.",
    price: 900000,
    currency: "₮",
    image: "/absolute.jpg",
    category: "1",
    mode: "lan",
    rating: 4.7,
    students: "900",
    hours: 45,
  },
];

export default function Edtech() {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedModes, setSelectedModes] = useState([]);
  const [sortOption, setSortOption] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  const handleToggle = (value, setter) => {
    setter((prev) =>
      prev.includes(value) ? prev.filter((i) => i !== value) : [...prev, value]
    );
  };

  const resetFilters = () => {
    setSelectedCategories([]);
    setSelectedModes([]);
    setSortOption("");
  };

  const filteredProducts = useMemo(() => {
    return products
      .filter(
        (p) =>
          !selectedCategories.length || selectedCategories.includes(p.category)
      )
      .filter((p) => !selectedModes.length || selectedModes.includes(p.mode));
  }, [selectedCategories, selectedModes]);

  const sortedProducts = useMemo(() => {
    return [...filteredProducts].sort((a, b) => {
      if (sortOption === "price_low_high") return a.price - b.price;
      if (sortOption === "price_high_low") return b.price - a.price;
      return 0;
    });
  }, [filteredProducts, sortOption]);

  return (
    <div className="flex min-h-screen">
      <aside
        className={`bg-white p-6 shadow-lg transition-transform duration-300 md:translate-x-0 ${
          showFilters ? "translate-x-0" : "-translate-x-full"
        } md:static absolute z-20 w-64`}
      >
        <div className="flex justify-between items-center mb-4 md:hidden">
          <h2 className="text-xl font-semibold text-black">Filters</h2>
          <button onClick={() => setShowFilters(false)}>
            <X className="text-black" />
          </button>
        </div>
        <div className="space-y-6 text-black">
          <div>
            <h3 className="font-medium mb-2">Categories</h3>
            {categories.map((c) => (
              <label key={c.id} className="flex items-center">
                <Checkbox
                  checked={selectedCategories.includes(c.id)}
                  onCheckedChange={() =>
                    handleToggle(c.id, setSelectedCategories)
                  }
                />
                <span className="ml-2">{c.name}</span>
              </label>
            ))}
          </div>
          <div>
            <h3 className="font-medium mb-2">Modes</h3>
            {modes.map((m) => (
              <label key={m.id} className="flex items-center">
                <Checkbox
                  checked={selectedModes.includes(m.id)}
                  onCheckedChange={() => handleToggle(m.id, setSelectedModes)}
                />
                <span className="ml-2">{m.name}</span>
              </label>
            ))}
          </div>
          <button
            onClick={resetFilters}
            className="mt-4 bg-gray-200 p-2 rounded-md text-black"
          >
            Reset Filters
          </button>
        </div>
      </aside>
      <main className="flex-1 p-8 bg-gray-100 text-black">
        <div className="flex justify-between items-center mb-6">
          <button onClick={() => setShowFilters(true)} className="md:hidden">
            <Filter className="text-black" />
          </button>
          <h1 className="text-3xl font-bold">Courses</h1>
          <Select onValueChange={setSortOption}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Sort By" className="text-black" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="price_low_high">Price: Low to High</SelectItem>
              <SelectItem value="price_high_low">Price: High to Low</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedProducts.map((prod) => (
            <Link
              key={prod.id}
              href={{ pathname: "/info", query: { id: prod.id } }}
            >
              <Card className="hover:shadow-lg">
                <CardHeader>
                  <Image
                    src={prod.image}
                    alt={prod.title}
                    width={400}
                    height={200}
                    className="object-cover"
                  />
                </CardHeader>
                <CardContent>
                  <h3 className="text-lg font-semibold text-black">
                    {prod.title}
                  </h3>
                  <p className="text-sm mt-1 text-black">{prod.description}</p>
                  <div className="mt-2 flex justify-between items-center text-black">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 mr-1 text-yellow-500" />
                      <span>{prod.rating}</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-1" />
                      <span>{prod.students}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{prod.hours} hrs</span>
                    </div>
                  </div>
                  <p className="mt-2 font-bold text-black">
                    {prod.price.toLocaleString()} {prod.currency}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
