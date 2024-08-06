"use client"
import { useState } from "react";
import { Input } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
import InputWithDropdown from "../../phonedropdowninput/phonedropdown";

export default function PersonalInfo({ prevStep }){
  const [personlinfo, setPersonalInfo] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPersonalInfo({ ...personlinfo, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="border h-[400px]">
      <h1 className="text-3xl font-bold mb-4 mt-2 ml-6">Personal Information</h1>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 sm:grid-cols-1  w-[965px]  items-end  ml-6 ">
        <Input
          color="blue"
          size="lg"
          label="First Name"
          name="zfirstname"
          value={personlinfo.firstname}
          onChange={handleChange}
        />

        <Input
          color="blue"
          size="lg"
          label="Last Name"
          name="lastname"
          value={personlinfo.lastname}
          onChange={handleChange}
        />

        <Input
          type="email"
          color="blue"
          size="lg"
          label="Email Address"
          name="email"
          required
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          value={personlinfo.email}
          onChange={handleChange}
        />

        <InputWithDropdown />

        <Button
          onClick={prevStep}
          variant="gradient"
          className="flex items-center  justify-center gap-2"
        >
          Previous{" "}
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
          />
        </Button>

        <Button onSubmit={handleSubmit} type="submit" variant="gradient">
          Submit
        </Button>
      </div>
    </div>
  );
}
