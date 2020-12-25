import React from "react";

const Table = () => {
  const data = [
    [
      "Meade LX200 (blue)",
      "Telescope",
      "10 aperture, schmidt-cassegrain design. In its case on TKO platform.",
    ],
    [
      "Orion SkyQuest (dark gray)",
      "Telescope",
      "10 aperture, Dobsonian design. Currently mounted in TKO, replacing the Bobich scope.	",
    ],
    [
      "Meade LXD55 (white)",
      "Telescope",
      "One 10 aperture, One 8 aperture, Schmidt-Newtonian design.",
    ],
  ];

  const heading = ["Name", "Category", "Description"];

  return (
    <div className="text-white">
      <table className="bg-gray-900 rounded-lg	border-separate	p-2	shadow-md	">
        <thead>
          <tr className="border-t-1 text-left">
            {heading.map(ele => (
              <th className="border-b-2	 align-middle	">{ele}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map(ele => (
            <tr>
              <td>{ele[0]}</td>
              <td> {ele[1]} </td>
              <td> {ele[2]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
