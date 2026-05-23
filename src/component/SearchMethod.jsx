"use client";
import { Button, Input } from "@heroui/react";
import React, { useRef, useState } from "react";
import DoctorCard from "./DoctorCard";

const SearchMethod = ({ doctors }) => {
  const [search, setSearch] = useState("");
  const [searchText, setSearchText] = useState("");

  const handleTSearchText = () => {
    setSearchText(search);
  };
  const filteredDoctor = doctors.filter((doctor) =>
    doctor.name.toLowerCase().includes(searchText.toLowerCase()),
  );
  //   console.log(filteredDoctor);
  return (
    <div className="container mx-auto">
      <h2 className="font-bold text-3xl">Our Doctors</h2>
      <p className="font-semibold text-gray-600">
        At Square, Family Medicine Doctors as well as Visiting Specialists take
        care of you. Our doctors have years of local and international
        experience and treat you with the respect and empathy you deserve.
      </p>

      <div className="border mx-auto ">
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
          <Button onClick={handleTSearchText} type="submit">
            Search
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
