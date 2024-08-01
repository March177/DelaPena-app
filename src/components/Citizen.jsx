import React from "react";

const Citizen = ({ citizen, toggleStatus, index }) => {
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{citizen.name}</td>
      <td>{citizen.age}</td>
      <td>{citizen.address}</td>
      <td>
        <span
          className={
            citizen.status === "Active" ? "status-active" : "status-inactive"
          }
        >
          {citizen.status}
        </span>
      </td>
      <td>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded"
          onClick={toggleStatus}
        >
          Toggle Status
        </button>
      </td>
    </tr>
  );
};

export default Citizen;
