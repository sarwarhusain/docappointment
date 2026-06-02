"use client";
import { Button, Input } from "@heroui/react";
import React, { useState } from "react";
import DoctorCard from "./DoctorCard";

const SearchMethod = ({ doctors }) => {
  const [search, setSearch] = useState("");
  const [searchText, setSearchText] = useState("");

  const handleTSearchText = () => {
    setSearchText(search);
  };
  const filteredDoctor = doctors.filter((doctor) =>
    doctor?.name?.toLowerCase().includes(searchText.toLowerCase()),
  );
  //   console.log(filteredDoctor);
  return (
    <div className="container mx-auto my-20 ">
      <div className="space-y-5 ">
        <h2 className="font-bold text-3xl">Find The Right Doctors For You</h2>
        <p className="font-semibold text-gray-600  animate-[fadeUp_1s_ease-out_forwards hover:text-cyan-600 transition-all duration-300">
          At DocAppoint, experienced Family Medicine Doctors and Visiting
          Specialists provide trusted healthcare with compassion, respect, and
          expertise. Our doctors combine local and international experience to
          deliver personalized care you can rely on.
        </p>
      </div>
      <div className="border-t border-gray-100 mx-auto my-5">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex items-center justify-center my-2 gap-2"
        >
          <Input
            defaultValue={search}
            onChange={(e) => setSearch(e.target.value)}
            name="search"
            placeholder="Enter Doctors Name"
          />
          <Button variant="ghost" onClick={handleTSearchText} type="submit">
            Find
          </Button>
        </form>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 mx-auto gap-5 ">
        {filteredDoctor.map((doctor) => (
          <DoctorCard key={doctor._id} doctor={doctor} />
        ))}
      </div>
    </div>
  );
};

export default SearchMethod;
