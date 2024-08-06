"use client"


import { Input } from "@material-tailwind/react";
import { Select, Option } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
import { useState } from "react";
export default function MotorBikeInfo({ nextStep }) {

  const [bikeinfo, setBikeInfo] = useState({
    regno: "",
    manuctureyear: "",
    make: "",
    model: "",
    enginesize: "",
    fueltype: "",
    fuelconsumption: "",
    price: "",
    location: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBikeInfo({ ...bikeinfo, [name]: value });
  };

  return (
    <div className="border h-[400px]">
      <h1 className="text-3xl font-bold mb-4 mt-2 ml-6">Bike Information</h1>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 sm:grid-cols-1  w-[965px]  items-end  ml-6 ">
        <Input
          color="blue"
          size="lg"
          label="Regestration Number"
          className="uppercase"
          name="regno"
          value={bikeinfo.regno}
          onChange={handleChange}
          required
        />

        <Select
          name="manuctureyear"
          value={bikeinfo.manuctureyear}
          onChange={handleChange}
          color="blue"
          size="lg"
          label="Year of Manufacture"
          required
        >
          <Option>Material Tailwind HTML</Option>
          <Option>Material Tailwind React</Option>
          <Option>Material Tailwind Vue</Option>
          <Option>Material Tailwind Angular</Option>
          <Option>Material Tailwind Svelte</Option>
        </Select>

        <Select
          name="make"
          value={bikeinfo.make}
          onChange={handleChange}
          color="blue"
          size="lg"
          label="Make"
        >
          <Option>Material Tailwind HTML</Option>
          <Option>Material Tailwind React</Option>
          <Option>Material Tailwind Vue</Option>
          <Option>Material Tailwind Angular</Option>
          <Option>Material Tailwind Svelte</Option>
        </Select>

        <Select
          name="model"
          value={bikeinfo.model}
          onChange={handleChange}
          color="blue"
          size="lg"
          label="Model"
        >
          <Option>Material Tailwind HTML</Option>
          <Option>Material Tailwind React</Option>
          <Option>Material Tailwind Vue</Option>
          <Option>Material Tailwind Angular</Option>
          <Option>Material Tailwind Svelte</Option>
        </Select>

        <Select
          name="enginesize"
          value={bikeinfo.enginesize}
          onChange={handleChange}
          color="blue"
          size="lg"
          label="Engine Size"
        >
          <Option>Material Tailwind HTML</Option>
          <Option>Material Tailwind React</Option>
          <Option>Material Tailwind Vue</Option>
          <Option>Material Tailwind Angular</Option>
          <Option>Material Tailwind Svelte</Option>
        </Select>

        <Select
          name="fueltype"
          value={bikeinfo.fueltype}
          onChange={handleChange}
          color="blue"
          size="lg"
          label="Fuel Type"
        >
          <Option>Diesel</Option>
          <Option>Petrol</Option>
          <Option>Electric</Option>
        </Select>

        <Select
          name="fuelconsumption"
          value={bikeinfo.fuelconsumption}
          onChange={handleChange}
          color="blue"
          size="lg"
          label="Fuel Consumption"
        >
          <Option>Diesel</Option>
          <Option>Petrol</Option>
          <Option>Electric</Option>
        </Select>

        <Input
          color="blue"
          size="lg"
          name="price"
          label="Price"
          value={bikeinfo.price}
          onChange={handleChange}
        />

        <Input
          color="blue"
          size="lg"
          name="location"
          label="Your Location"
          value={bikeinfo.location}
          onChange={handleChange}
          className="uppercase"
        />

        <Button  onClick={nextStep} variant="gradient" className="flex items-center  justify-center gap-2">
          Next{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={4}
            stroke="currentColor"
            className="h-5 w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
            />
          </svg>
        </Button>

      </div>
    </div>
  );
}
