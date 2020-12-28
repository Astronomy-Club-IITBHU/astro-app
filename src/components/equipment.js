import React from "react";

const Table = () => {
  const data = [
    [
      "Meade LX200 (blue)",
      "Telescope",
      "10 aperture, 6'' dia schmidt-cassegrain design. In its case on TKO platform.",
    ],
    [
      "Orion SkyQuest (dark gray)",
      "Telescope",
      "10 aperture, 12'' dia, Dobsonian design. Currently mounted in TKO, replacing the Bobich scope.	",
    ],
    [
      "Meade LXD55 (white)",
      "Telescope",
      "One 10 aperture, One 8 aperture, both 90mm dia, Schmidt-Newtonian design.",
    ],
    [
      "Astromaster 102AZ (blue)",
      "Telescope",
      "10 aperture, 5'' dia, Schmidt-cassegrain design, Refractor type",
    ],
    [
      "Orion 190mm (white)",
      "Telescope",
      "10 aperture, 6'' dia, Maksutov Newtonian design, ",
    ],
  ];

  const heading = ["Name", "Category", "Description"];

  return (
    <div className="text-white w-full sm:place-content-evenly">
      <table className="bg-gray-900 rounded-lg	border-separate	p-2	shadow-md w-full text-md md:text-lg lg:text-lg">
        <thead>
          <tr className="border-t-1">
            {heading.map(ele => (
              <th className="border-b-2 text-center">{ele}</th>
            ))}
          </tr>
        </thead>
        <tbody className="">
          {data.map(ele => (
            <React.Fragment>
              <tr className="transition duration-500 ease-in-out hover:bg-white hover:text-black hover:shadow-2xl">
                <td className="text-center border-b-2 border-gray-500 rounded-lg md:border-b-0 lg:border-b-0">
                  <div className="my-5 lg:m-2 md:m-2 sm:m-3">{ele[0]}</div>
                </td>
                <td className="text-center border-b-2 border-gray-500 rounded-lg md:border-b-0 lg:border-b-0">
                  <div className="my-5 lg:m-2 md:m-2 sm:m-3">{ele[1]}</div>
                </td>
                <td className="text-center border-b-2 border-gray-500 rounded-lg md:border-b-0 lg:border-b-0">
                  <div className="my-5 lg:m-2 md:m-2 sm:m-3">{ele[2]}</div>
                </td>
              </tr>
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
