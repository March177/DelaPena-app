import React, { useState } from "react";
import Citizen from "./Citizen";
import SearchFilter from "./SearchFilter";

const initialCitizens = [
  { name: "John", age: 34, address: "123 Main St", status: "Active" },
  { name: "Jane", age: 28, address: "456 Oak St", status: "Active" },
  { name: "Mike", age: 45, address: "789 Pine St", status: "Inactive" },
  { name: "Lisa", age: 32, address: "101 Maple St", status: "Active" },
  { name: "Sam", age: 56, address: "202 Birch St", status: "Inactive" },
  { name: "Tom", age: 65, address: "303 Cedar St", status: "Active" },
  { name: "Anna", age: 24, address: "404 Elm St", status: "Active" },
  { name: "Bob", age: 50, address: "505 Spruce St", status: "Inactive" },
  { name: "Emma", age: 37, address: "606 Walnut St", status: "Active" },
  { name: "Alice", age: 29, address: "707 Ash St", status: "Inactive" },
];

const Citizens = () => {
  const [citizens, setCitizens] = useState(initialCitizens);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleStatus = (index) => {
    setCitizens((prevCitizens) =>
      prevCitizens.map((citizen, i) =>
        i === index
          ? {
              ...citizen,
              status: citizen.status === "Active" ? "Inactive" : "Active",
            }
          : citizen
      )
    );
  };

  const filteredCitizens = citizens.filter(
    (citizen) =>
      citizen.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      citizen.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
      citizen.status.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="citizens-container">
      <h1 className="text-2xl font-bold mb-4">Citizens List</h1>
      <SearchFilter searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <div className="overflow-x-auto">
        <table className="citizens-table">
          <thead>
            <tr>
              <th>No.</th>
              <th>Name</th>
              <th>Age</th>
              <th>Address</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredCitizens.length > 0 ? (
              filteredCitizens.map((citizen, index) => (
                <Citizen
                  key={index}
                  citizen={citizen}
                  toggleStatus={() => toggleStatus(index)}
                  index={index}
                />
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center">
                  No results found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Citizens;
