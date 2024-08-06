"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Bike from "../bike/page";

export default function ListingMotorbikes() {
  const [bikes, setBikes] = useState([]);
  const [filteredBikes, setFilteredBikes] = useState([]);
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      fetch("/bikes.json")
        .then((response) => response.json())
        .then((data) => {
          setBikes(data);
          setFilteredBikes(data); // Initially display all bikes
        });
    }
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const { query, budget } = router.query;

      if (!bikes.length) return;

      let filtered = bikes;

      // Filter by query
      if (query) {
        filtered = filtered.filter((bike) =>
          bike.name.toLowerCase().includes(query.toLowerCase())
        );
      }

      // Filter by budget
      if (budget) {
        const [min, max] = budget.split("-").map(Number);
        filtered = filtered.filter(
          (bike) => bike.price >= min && bike.price <= max
        );
      }

      setFilteredBikes(filtered);
    }
  }, [router.query, bikes]);

  return (
    <div className="bg-gray-200">
      {filteredBikes.map((bike) => (
        <div key={bike.id}>
          <Bike
            bikephoto={bike.photo}
            bikename={bike.name}
            biketype={bike.type}
            bikeengineCapacity={bike.engineCapacity}
            bikespeedLimit={bike.speedLimit}
            bikefuelType={bike.fuelType}
            bikefuelCapacity={bike.fuelCapacity}
            bikeprice={bike.price}
          />
        </div>
      ))}
    </div>
  );
}
